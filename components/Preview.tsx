"use client";

import { colorClasses, colorPalette } from "@/app/page";
import { LampDeskIcon, PaintBucketIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Markdown from "react-markdown";

interface Preview {
  input: string;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  blocks: BlockType[];
  widgets: BlockType[];
}

export default function Preview({
  input,
  color,
  setColor,
  blocks,
  widgets,
}: Preview) {
  return (
    <div className="w-full h-64">
      {input === "" ? (
        <p className="text-center mt-8 text-lg">
          {blocks.length === 0 && widgets.length === 0 && "Waiting...😪"}
        </p>
      ) : (
        <>
          <h2 className="justify-center mb-4 text-lg font-bold flex">
            <LampDeskIcon className="mr-1" /> <span>Preview</span>
          </h2>

          <div className="overflow-y-auto mb-2 border-2">
            <Markdown
              className={`mx-auto ${colorClasses[color]} h-[212px] prose w-full break-words dark:prose-invert prose-blue p-2`}
            >
              {input}
            </Markdown>
          </div>
          <div className="flex justify-center">
            <PaintBucketIcon className="mr-1" />
            <select
              name="colors"
              id="color"
              onChange={(e) => setColor(e.target.value)}
            >
              {colorPalette.map((color, i) => (
                <option
                  value={color}
                  key={i}
                  className={`${colorClasses[color]}`}
                >
                  {color}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
}
