"use client";

import { useEffect, useState } from "react";
import "./door-chamber.css";

const CLOSED = "/images/chapters-4-5/doors-closed.png";
const OPEN = "/images/chapters-4-5/doors-open.png";

export function DoorChamber() {
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
    window.setTimeout(() => setOpened(true), 1900);
  }

  return (
    <div className="door-chamber">
      <div className="door-chamber-world" />
      <div className="door-chamber-gate">
        <div
          className={`door-chamber-stage${opening ? " is-opening" : ""}${opened ? " is-opened" : ""}`}
        >
          <img src={OPEN} alt="" className="door-chamber-beyond" draggable={false} />
          <div className="door-chamber-frame" />
          <div className="door-chamber-leaf is-left" />
          <div className="door-chamber-leaf is-right" />
          <button
            type="button"
            className="door-chamber-hit"
            onClick={openDoors}
            disabled={opening || opened}
            aria-label={opened ? "The doors are open" : "Open the doors"}
          />
        </div>
      </div>
      <div className="door-chamber-vignette" />
    </div>
  );
}
