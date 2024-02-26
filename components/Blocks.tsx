import { colorClasses } from "@/app/page";

interface Blocks {
  blocks: BlockType[];
  handleOnDrag: (
    event: React.DragEvent<HTMLDivElement>,
    block: BlockType
  ) => void;
}

export default function Blocks({ blocks, handleOnDrag }: Blocks) {
  return (
    <>
      <h2 className="mb-4 text-lg font-bold">Blocks</h2>
      <div>
        {blocks.map((block, i) => (
          <div
            key={i}
            draggable
            className={`${colorClasses[block.color]} hover:cursor-grab`}
            onDragStart={(e) => handleOnDrag(e, block)}
          >
            {block.input}
          </div>
        ))}
      </div>
    </>
  );
}
