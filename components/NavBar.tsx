import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center px-3 py-4">
      <Link href="/">
        <span className="text-lg font-bold">Text Blocks</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
