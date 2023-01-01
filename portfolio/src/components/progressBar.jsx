import { useEffect } from "react";
import { useState } from "react";

export default function Progressbar({ value, colorZ }) {
  return (
    <div>
      <div className="w-full  bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className={
            colorZ +
            " -600 h-3.5 rounded-full w-45 innerprogressbar text-1xl h-4 shadow-xl shadow-inherit "
          }
          style={{ width: value + "%" }}
        ></div>
      </div>
    </div>
  );
}
