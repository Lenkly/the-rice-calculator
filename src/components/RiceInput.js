import React from "react";
import Dropdown from "./Dropdown";
import Inputbox from "./Inputbox";

export default function RiceInput() {
  return (
    <div className="input-table">
      <Dropdown />
      <p className="p-span">or</p>
      <Inputbox />
    </div>
  );
}
