import { colorClasses } from "@/lib/colors";
import cutString from "@/helpers/cutSting";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { BlocksIcon, TrashIcon, XIcon } from "lucide-react";

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
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-1">
        {blocks.map((block, i) => (
          <div
            key={i}
            draggable
            className={`${
              colorClasses[block.color]
            } hover:cursor-grab flex justify-between rounded-sm`}
            onDragStart={(e) => handleOnDrag(e, block)}
          >
            <p className="break-all p-2 h-20">{cutString(block.input, 50)}</p>
            <Button
              onClick={() => handleDelete(i)}
              className="border-2 h-6 w-6 p-0 m-1 bg-zinc-300"
            >
              <XIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
