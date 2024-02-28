import Markdown from "react-markdown";
import { colorClasses } from "@/lib/colors";
import {
  ArrowUpSquareIcon,
  ChevronDown,
  ChevronUp,
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

  function handleMoveUp(i: number) {
    if (i > 0 && i < widgets.length) {
      const newWidgets = [...widgets];
      const temp = newWidgets[i];
      newWidgets[i] = newWidgets[i - 1];
      newWidgets[i - 1] = temp;
      setWidgets(newWidgets);
    }
  }
  function handleMoveDown(i: number) {
    if (i >= 0 && i < widgets.length - 1) {
      const newWidgets = [...widgets];
      const temp = newWidgets[i];
      newWidgets[i] = newWidgets[i + 1];
      newWidgets[i + 1] = temp;
      setWidgets(newWidgets);
    }
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
          <div key={i} className="flex justify-center">
            <div className="flex flex-col">
              <Button
                onClick={() => handleMoveUp(i)}
                className={`${
                  colorClasses[widget.color]
                } border-2 hover:bg-secondary p-0 m-0 w-8 h-8`}
              >
                <ChevronUp className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleMoveDown(i)}
                className={`${
                  colorClasses[widget.color]
                } border-2 hover:bg-secondary p-0 m-0 w-8 h-8`}
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
            <Markdown
              className={` ${
                colorClasses[widget.color]
              } rounded-sm prose break-words w-full dark:prose-invert prose-blue p-2 border`}
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
