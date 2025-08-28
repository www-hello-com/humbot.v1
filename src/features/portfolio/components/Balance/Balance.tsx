"use client";
import s from "./Balance.module.css";
import { type Bal, assetName, fmt, usd } from "./utils";

export default function Balance({ rows }: { rows: Bal[] }) {
  return (
    <div className={s.list}>
      {rows.map((r, i)=>(
        <div key={i} className={`card ${s.item} ${s.pad}`}>
          <div className={s.h}>{assetName(r.asset)}</div>
          <div className={s.row}><span className={s.label}>Exchange</span><span>{r.exchange}</span></div>
          <div className={s.row}><span className={s.label}>Free</span><span>{fmt(r.free)}</span></div>
          <div className={s.row}><span className={s.label}>Locked</span><span>{fmt(r.locked)}</span></div>
          <div className={s.row}><span className={s.label}>USD</span><span>{usd(r.usdValue)}</span></div>
        </div>
      ))}
    </div>
  );
}
