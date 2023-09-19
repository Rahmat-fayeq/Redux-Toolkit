import React from "react";
import style from "./Canvas.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFont, selectFont } from "./canvasSlice";

const Font = () => {
  const font = useSelector(selectFont);
  const dispatch = useDispatch();

  return (
    <div className={style.font}>
      <h2>Font</h2>
      <p>
        <span style={{ fontSize: `${font}px` }}>
          Redux Toolkit (RTK) is the modern way to manage react state in more
          proficient way.
        </span>
      </p>
      <input
        type="range"
        min={10}
        max={30}
        value={font}
        onChange={(e) => dispatch(changeFont(e.target.value))}
      />
      <p>{font} px</p>
    </div>
  );
};

export default Font;
