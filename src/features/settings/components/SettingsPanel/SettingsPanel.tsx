"use client";
import s from "./SettingsPanel.module.css";
import { loadBase, saveBase } from "./utils";
import { useEffect, useState } from "react";

export default function SettingsPanel(){
  const [base, setBase] = useState("");
  useEffect(()=>{ setBase(loadBase()); },[]);
  return (
    <div className={s.wrap}>
      <section className={`card ${s.left} ${s.cardPad}`}>
        <h2>API</h2>
        <label className={s.label}>Base URL</label>
        <div className={s.row}>
          <input value={base} onChange={e=>setBase(e.target.value)} placeholder="http://localhost:8080" className={s.input}/>
          <button className={s.btn} onClick={()=>saveBase(base)}>Save</button>
        </div>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          This overrides <code>NEXT_PUBLIC_API_BASE</code> for client usage.
        </p>
      </section>

      <section className={`card ${s.right} ${s.cardPad}`}>
        <h2>Telegram</h2>
        <p style={{ color: "var(--muted)" }}>
          Add your BotFather token and chat ID in the Hummingbot instance, then enable Telegram.
          This panel is a placeholder for future UI toggles.
        </p>
      </section>
    </div>
  );
}
