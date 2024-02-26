import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

interface SubmitButton {
  input: string;
  color: string;
  blocks: BlockType[];
  setBlocks: Dispatch<SetStateAction<BlockType[]>>;
  setInput: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
}

export default function SubmitButton({
  input,
  color,
  blocks,
  setBlocks,
  setInput,
  setColor,
}: SubmitButton) {
  function handleSubmit() {
    if (input && color) {
      setBlocks([...blocks, { input: input, color: color }]);
      setInput("");
      setColor("");
    }
  }
  return (
    <>
      {input && color && (
        <Button onClick={handleSubmit} className="font-bold">
          SUBMIT
        </Button>
      )}
    </>
  );
}
