"use client";
import s from "./ConnectorList.module.css";
import { type Conn, caption } from "./utils";

export default function ConnectorList({ items }: { items: Conn[] }) {
  return (
    <div className={s.grid}>
      {items.map((c,i)=>(
        <div key={i} className={`card ${s.item} ${s.pad}`}>
          <div className={s.name}>{c.name}</div>
          <p className={s.desc}>{caption(c)}{c.desc ? ` · ${c.desc}` : ""}</p>
        </div>
      ))}
    </div>
  );
}
