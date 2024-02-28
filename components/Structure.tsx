import Markdown from "react-markdown";
import { colorClasses } from "@/app/page";
import {
  ArrowUpSquareIcon,
  GalleryVerticalEndIcon,
  TrashIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

interface Structure {
  widgets: BlockType[];
  setWidgets: Dispatch<SetStateAction<BlockType[]>>;
  handleOnDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}

export default function Structure({
  widgets,
  setWidgets,
  handleOnDrop,
  handleDragOver,
}: Structure) {
  function handleDelete(i: number) {
    const newWidgets = widgets.filter((widget, index) => index !== i);
    setWidgets(newWidgets);
  }
  return (
    <div>
      <h2 className="justify-center mb-4 text-lg font-bold flex">
        <GalleryVerticalEndIcon className="mr-1" /> <span>Structure</span>
      </h2>

      <div
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        className={`bg-zinc-800 h-64 overflow-y-scroll w-full my-2
        ${widgets.length === 0 && " flex justify-center items-center h-20"}
        `}
      >
        {widgets.length === 0 && (
          <p className="flex justify-center">
            <ArrowUpSquareIcon className="mr-1" />
            <span>DROP BLOCKS</span>
          </p>
        )}
        {widgets.map((widget, i) => (
          <div key={i} className="flex">
            <Markdown
              className={`mx-auto ${
                colorClasses[widget.color]
              }  prose break-words w-full dark:prose-invert prose-blue p-2 border`}
            >
              {widget.input}
            </Markdown>
            <Button
              onClick={() => handleDelete(i)}
              className={`${
                colorClasses[widget.color]
              } border-2 hover:bg-secondary w-14`}
            >
              <TrashIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
