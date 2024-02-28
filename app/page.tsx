"use client";

import { useState } from "react";
import Preview from "@/components/Preview";
import Input from "@/components/Input";
import SaveButton from "@/components/SaveButton";
import WorkingSpace from "@/components/WorkingSpace";

export const colorClasses: { [key: string]: string } = {
  red: "bg-red-600",
  orange: "bg-orange-600",
  yellow: "bg-yellow-600",
  green: "bg-green-600",
  cyan: "bg-cyan-600",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  pink: "bg-pink-600",
};
export const colorPalette = [
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

export default function Home() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");
  const [blocks, setBlocks] = useState<BlockType[]>([]);
  const [widgets, setWidgets] = useState<BlockType[]>([]);

  return (
    <div className="flex items-center flex-col mb-10">
      <div className="w-full">
        <div className="flex justify-around gap-2 mb-6">
          <Input input={input} setInput={setInput} />

          <Preview
            input={input}
            color={color}
            setColor={setColor}
            blocks={blocks}
            widgets={widgets}
          />
        </div>

        <SaveButton
          input={input}
          color={color}
          blocks={blocks}
          setBlocks={setBlocks}
          setInput={setInput}
          setColor={setColor}
        />
      </div>

      <WorkingSpace
        blocks={blocks}
        widgets={widgets}
        setWidgets={setWidgets}
        setBlocks={setBlocks}
      />
    </div>
  );
}
