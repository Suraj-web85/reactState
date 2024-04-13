import React from "react";
import "./State.css";

function State() {
  const [isImportant, setIsImportant] = React.useState(true);
  function handleClick(){
    setIsImportant(set => set ? false : true)
  }
  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <button type="button" className="btn" onClick={handleClick}>
        {isImportant ? "yes" : "no"}
      </button>
    </div>
  );
}

export default State;
