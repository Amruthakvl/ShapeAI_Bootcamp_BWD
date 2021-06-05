import React from "react";

var curryear = new Date().getFullYear();
function footer() {
  return (
    <footer>
      <p>Copyright @ {curryear}</p>
    </footer>
  );
}

export default footer;
