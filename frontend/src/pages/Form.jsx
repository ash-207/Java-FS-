import React, { useState } from "react";
import "../style/F.css";
function Form() {
  let [data, setData] = useState(0);
  return (
    <>
      <div>
        <input
          placeholder="enter a number"
          className="input"
          onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value);
          }}
        />
        <br />
        <br />
        <button>click</button>
        <br />
        <h1>{data}</h1>
      </div>
    </>
  );
}

export default Form;
