import env from '@/config/env';

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: Response
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Safe JSON parsing that handles empty responses
 */
async function safeJsonParse(response: Response) {
  const text = await response.text();
  if (!text.trim()) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new ApiError(`Invalid JSON response: ${error}`);
  }
}

/**
 * Typed API client wrapper
 */
export async function api<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  // Get base URL from environment or localStorage override
  const baseUrl = typeof window !== 'undefined' 
    ? localStorage.getItem('apiBaseUrl') || env.apiBaseUrl
    : env.apiBaseUrl;

  const url = `${baseUrl}${path}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  };

  console.log(`API Request: ${config.method || 'GET'} ${url}`);

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await safeJsonParse(response);
      throw new ApiError(
        errorData?.message || `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        response
      );
    }

    const data = await safeJsonParse(response);
    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network or other errors
    throw new ApiError(
      `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}
