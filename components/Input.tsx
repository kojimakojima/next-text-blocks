import { Dispatch, SetStateAction } from "react";

export default function Input({
  input,
  setInput,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <h2 className="mb-4 text-lg font-bold">Write Markdown Here 📝</h2>
      <textarea
        className="w-11/12 h-48 p-2 border-2 mb-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
