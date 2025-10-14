import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react"; // Import icons

export default function DropdownMenuRadioGroupDemo() {
  const [selected, setSelected] = React.useState("");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-transparent text-black text-lg p-0 h-auto md:text-sm lg:text-lg"
        >
          Practice Areas
          <ChevronDown className="w-4 h-4" /> {/* Dropdown arrow */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black text-white backdrop-blur-md w-56">
        <DropdownMenuLabel>Select Your Desired</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
          <Link href="/practiceareas/family-law">
            <DropdownMenuRadioItem value="family-law">
              Family Law
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/practiceareas/corporate-law">
            <DropdownMenuRadioItem value="corporate-law">
              Corporate Law
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/practiceareas/real-estate-law">
            <DropdownMenuRadioItem value="real-estate-law">
              Real Estate Law
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/practiceareas/criminal-defense">
            <DropdownMenuRadioItem value="criminal-defense">
              Criminal Defense
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
