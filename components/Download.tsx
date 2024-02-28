import { DownloadIcon, FileTextIcon, MSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Download {
  widgets: BlockType[];
}

export default function Download({ widgets }: Download) {
  function handleDownloadMarkdown() {
    const markdownContent = widgets
      .map((widget) => `${widget.input}`)
      .join("\n");

    const blob = new Blob([markdownContent], { type: "text/markdown" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "text-blocks.md";
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  function handleDownloadTxt() {
    const textContent = widgets.map((widget) => `${widget.input}`).join("\n");

    const blob = new Blob([textContent], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "text-blocks.txt";
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="border py-2 px-12 rounded-sm hover:bg-secondary">
          <DownloadIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleDownloadTxt}>
            <FileTextIcon className="mr-1" />
            .txt
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDownloadMarkdown}>
            <MSquare className="mr-1" />
            .md
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
