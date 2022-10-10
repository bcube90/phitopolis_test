import React from "react";

export default function InputHelper({text, type}) {
  return (
    <span 
      className={`mt-2 text-${type} p-1 bg-primary rounded bg-light bg-gradient px-2`}
      style={{fontSize: 13}}
    >
      {text}
    </span>
  )
}