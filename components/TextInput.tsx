"use client";

import { useState } from "react";
import Markdown from "react-markdown";

export default function TextInput() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");

  const colorClasses: { [key: string]: string } = {
    red: "bg-red-600",
    orange: "bg-orange-600",
    yellow: "bg-yellow-600",
    green: "bg-green-600",
    cyan: "bg-cyan-600",
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
  };
  const colorPalette = [
    "Pick a color!",
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
  ];
  return (
    <>
      <h2 className="mb-4 text-lg font-bold">WRITE MARKDOWN</h2>
      <textarea
        className="w-11/12 h-48 p-2 border-2 mb-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="w-11/12 h-2/5">
        <h2 className="text-center mb-4 text-lg font-bold">PREVIEW</h2>
        <div>
          {input === "" ? (
            <p className="text-center pt-20 text-lg">Waiting...😪</p>
          ) : (
            <>
              <Markdown
                className={`mx-auto ${colorClasses[color]} mb-12 prose break-words w-full dark:prose-invert prose-blue p-2 border-2`}
              >
                {input}
              </Markdown>

              <div className="text-center">
                <label htmlFor="color-select">Color: </label>
                <select
                  name="colors"
                  id="color-select"
                  onChange={(e) => setColor(e.target.value)}
                >
                  {colorPalette.map((color, i) => (
                    <option value={color} key={i}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
