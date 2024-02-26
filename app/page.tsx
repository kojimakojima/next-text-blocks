"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

type BlockType = {
  input: string;
  color: string;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");
  const [blocks, setBlocks] = useState<BlockType[]>([]);
  const [widgets, setWidgets] = useState<BlockType[]>([]);

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

  function handleOnDrag(e: React.DragEvent, block: BlockType) {
    const blockData = JSON.stringify({
      color: block.color,
      input: block.input,
    });
    e.dataTransfer.setData("application/json", blockData);
  }

  function handleOnDrop(e: React.DragEvent) {
    e.preventDefault();
    // Parse the JSON string back to an object
    const blockData = e.dataTransfer.getData("application/json");
    const block = JSON.parse(blockData);
    console.log("block", block);
    setWidgets([...widgets, block]);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleSubmit() {
    if (input && color) {
      setBlocks([...blocks, { input: input, color: color }]);
      setInput("");
      setColor("");
    }
  }

  useEffect(() => {
    if (blocks.length >= 1) {
      console.log(blocks); // Log block after it changes.
    }
  }, [blocks]);

  return (
    <div className="flex items-center flex-col">
      <h2 className="mb-4 text-lg font-bold">Write Markdown Here 📝</h2>
      <textarea
        className="w-11/12 h-48 p-2 border-2 mb-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input === "" ? (
        <p className="text-center mt-8 text-lg">{!blocks && "Waiting...😪"} </p>
      ) : (
        <div className="w-11/12 h-2/5 mb-8">
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

      {input && color && (
        <Button onClick={handleSubmit} className="font-bold">
          SUBMIT
        </Button>
      )}

      {blocks.length >= 1 && (
        <div className="w-full">
          <h2 className="mb-4 text-lg font-bold">Blocks</h2>
          <div>
            {blocks.map((block, i) => (
              <div
                key={i}
                draggable
                className={`${colorClasses[block.color]}`}
                onDragStart={(e) => handleOnDrag(e, block)}
              >
                {block.input}
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-lg font-bold">Structure</h2>
          <div
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
            className="bg-zinc-400 h-48 w-full"
          >
            {widgets.map((widget, i) => (
              <Markdown
                key={i}
                className={`mx-auto ${
                  colorClasses[widget.color]
                }  prose break-words w-full dark:prose-invert prose-blue p-2 border`}
              >
                {widget.input}
              </Markdown>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
