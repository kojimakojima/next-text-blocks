import { Dispatch, SetStateAction } from "react";
import Blocks from "./Blocks";
import Structure from "./Structure";

interface WorkingSpace {
  blocks: BlockType[];
  widgets: BlockType[];
  setBlocks: Dispatch<SetStateAction<BlockType[]>>;
  setWidgets: Dispatch<SetStateAction<BlockType[]>>;
}

export default function WorkingSpace({
  blocks,
  widgets,
  setBlocks,
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
    <div className="w-full">
      {blocks.length >= 1 && (
        <Blocks
          blocks={blocks}
          setBlocks={setBlocks}
          handleOnDrag={handleOnDrag}
        />
      )}
      {(blocks.length >= 1 || widgets.length >= 1) && (
        <Structure
          widgets={widgets}
          setWidgets={setWidgets}
          handleOnDrop={handleOnDrop}
          handleDragOver={handleDragOver}
        />
      )}
    </div>
  );
}
