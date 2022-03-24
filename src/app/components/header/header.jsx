import React from "react"
import world from "./img/world.svg"

import "./header.css"

export function Header() {
  return (
    <div className="header">
      <img src={world} alt="world" />
      <span>my travel journal.</span>
    </div>
  )
}
