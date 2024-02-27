"use client";

import { colorClasses, colorPalette } from "@/app/page";
import { Dispatch, SetStateAction } from "react";
import Markdown from "react-markdown";

export default function Preview({
  input,
  color,
  setColor,
  blocks,
}: {
  input: string;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  blocks: BlockType[];
}) {
  return (
    <>
      {input === "" ? (
        <p className="text-center mt-8 text-lg">
          {blocks.length === 0 && "Waiting...😪"}
        </p>
      ) : (
        <div className="w-11/12 h-2/5 mb-8 mx-auto">
          <h2 className="text-center mb-4 text-lg font-bold">PREVIEW</h2>

          <div>
            <>
              <Markdown
                className={`mx-auto ${colorClasses[color]} mb-12 prose break-words w-full dark:prose-invert prose-blue p-2 border-2`}
              >
                {input}
              </Markdown>

              <div className="text-center">
                <label htmlFor="color">Color: </label>
                <select
                  name="colors"
                  id="color"
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
          </div>
        </div>
      )}
    </>
  );
}
