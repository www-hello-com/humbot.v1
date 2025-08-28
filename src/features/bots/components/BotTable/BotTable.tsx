"use client";
import s from "./BotTable.module.css";
import { type BotRow, pnlClass, fmtUsd } from "./utils";

export default function BotTable({ rows }: { rows: BotRow[] }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>Name</th>
            <th className={s.th}>Status</th>
            <th className={`${s.th} ${s.right}`}>PnL</th>
            <th className={s.th}>Updated</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r=>(
            <tr key={r.id}>
              <td className={s.td}>{r.name}</td>
              <td className={s.td}>{r.status}</td>
              <td className={`${s.td} ${s.right} ${s[pnlClass(r.pnl)]}`}>{fmtUsd(r.pnl)}</td>
              <td className={s.td}>{r.updatedAt ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
