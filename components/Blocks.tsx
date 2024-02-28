import { colorClasses } from "@/app/page";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { BlocksIcon, TrashIcon } from "lucide-react";

interface Blocks {
  blocks: BlockType[];
  setBlocks: Dispatch<SetStateAction<BlockType[]>>;
  handleOnDrag: (
    event: React.DragEvent<HTMLDivElement>,
    block: BlockType
  ) => void;
}

export default function Blocks({ blocks, setBlocks, handleOnDrag }: Blocks) {
  function handleDelete(i: number) {
    const newBlocks = blocks.filter((block, index) => index !== i);
    setBlocks(newBlocks);
  }
  return (
    <div className="mb-4">
      <h2 className="justify-center mb-4 text-lg font-bold flex">
        <BlocksIcon className="mr-1" /> <span>Blocks</span>
      </h2>
      <div>
        {blocks.map((block, i) => (
          <div
            key={i}
            draggable
            className={`${
              colorClasses[block.color]
            } hover:cursor-grab flex justify-between`}
            onDragStart={(e) => handleOnDrag(e, block)}
          >
            <p className="break-all">{block.input}</p>
            <Button
              onClick={() => handleDelete(i)}
              className="border-2 m-2 w-14"
            >
              <TrashIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
