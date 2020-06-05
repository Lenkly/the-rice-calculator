import React from "react";

export default function Dropdown() {
  const [showDropdown, setShowDropdown] = React.useState(false);
  console.log(showDropdown);
  return (
    <button className="button" onClick={() => setShowDropdown(true)}>
      Choose Rice
    </button>
  );
}
