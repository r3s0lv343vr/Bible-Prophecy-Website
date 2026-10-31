"use client";

import { useEffect, useState } from "react";
import "./heaven-doors.css";

const CLOSED = "/images/chapters-4-5/doors-closed.png";
const OPEN = "/images/chapters-4-5/doors-open.png";

export function HeavenDoors() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const closed = new Image();
    const open = new Image();
    closed.src = CLOSED;
    open.src = OPEN;
  }, []);

  function openDoors() {
    if (opening || opened) {
      return;
    }

    setOpening(true);
    window.setTimeout(() => setOpened(true), 1800);
  }

  return (
    <div className="heaven-doors">
      <div
        className={`heaven-doors-stage${opening ? " is-opening" : ""}${opened ? " is-opened" : ""}`}
      >
        <img
          src={OPEN}
          alt=""
          className="heaven-doors-beyond"
          draggable={false}
        />
        <div
          className="heaven-doors-leaf is-left"
          style={{ backgroundImage: `url(${CLOSED})` }}
        />
        <div
          className="heaven-doors-leaf is-right"
          style={{ backgroundImage: `url(${CLOSED})` }}
        />
        <button
          type="button"
          className="heaven-doors-hit"
          onClick={openDoors}
          disabled={opening || opened}
          aria-label={opened ? "The doors are open" : "Open the doors"}
        />
      </div>
    </div>
  );
}
