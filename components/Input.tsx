import { MSquareIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Input {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export default function Input({ input, setInput }: Input) {
  return (
    <div className="flex flex-col items-center w-full h-64">
      <h2 className="justify-center mb-4 text-lg font-bold flex">
        <MSquareIcon className="mr-1" /> <span>Source</span>
      </h2>
      <textarea
        placeholder="Write Markdown here..."
        className="h-full w-full p-2 border-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
