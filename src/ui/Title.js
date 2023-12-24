import React from "react";

export default function Title({ children }) {
  return (
    <div className="bgHeader">
      <span className="headerArrow">{String.fromCharCode(60)}</span>
      <p className="headerText">{children}</p>
    </div>
  );
}
