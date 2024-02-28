import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

interface SaveButton {
  input: string;
  color: string;
  blocks: BlockType[];
  setBlocks: Dispatch<SetStateAction<BlockType[]>>;
  setInput: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
}

export default function SaveButton({
  input,
  color,
  blocks,
  setBlocks,
  setInput,
  setColor,
}: SaveButton) {
  function handleSave() {
    if (input && color) {
      setBlocks([...blocks, { input: input, color: color }]);
      setInput("");
      setColor("");
    }
  }
  return (
    <div className="flex justify-center mb-8">
      {input && color && (
        <Button
          onClick={handleSave}
          className="font-bold w-20 md:w-32 text-base"
        >
          Save
        </Button>
      )}
    </div>
  );
}
