import { Dispatch, SetStateAction } from "react";
import Blocks from "./Blocks";
import Markdown from "react-markdown";
import { colorClasses } from "@/app/page";

interface WorkingSpace {
  blocks: BlockType[];
  widgets: BlockType[];
  setWidgets: Dispatch<SetStateAction<BlockType[]>>;
}

export default function WorkingSpace({
  blocks,
  widgets,
  setWidgets,
}: WorkingSpace) {
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
  return (
    <>
      {blocks.length >= 1 && (
        <div className="w-full">
          <Blocks blocks={blocks} handleOnDrag={handleOnDrag} />

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
    </>
  );
}
