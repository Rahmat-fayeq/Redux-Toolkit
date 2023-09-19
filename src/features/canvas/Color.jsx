import React from "react";
import style from "./Canvas.module.css";
import logo from "../../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  paintColorAsync,
  selectColor,
  selectColorLoading,
} from "./canvasSlice";

const Color = () => {
  const color = useSelector(selectColor);
  const isLoading = useSelector(selectColorLoading);
  const dispatch = useDispatch();

  return (
    <div className={style.colors}>
      <h2>Colors {isLoading ? "loading..." : ""}</h2>
      <div className={style.circle} style={{ backgroundColor: color }}>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="buttons">
        <button
          className={style.btn}
          onClick={() => dispatch(changeColor("#ffff"))}
        >
          White
        </button>
        <button
          className={style.btn}
          onClick={() => dispatch(changeColor("orange"))}
        >
          Orange
        </button>
        <button
          className={style.btn}
          onClick={() => dispatch(changeColor("yellow"))}
        >
          Yellow
        </button>
        <button
          className={style.btn}
          onClick={() => dispatch(changeColor("pink"))}
        >
          Pink
        </button>
        <button
          className={style.btn}
          onClick={() => dispatch(paintColorAsync())}
        >
          Random
        </button>
      </div>
    </div>
  );
};

export default Color;
