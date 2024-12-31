"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MISC_LINKS } from "@/config/constants";
import {
  IconBrandGithubFilled,
  IconCode,
  IconStarFilled,
} from "@tabler/icons-react";

export function RepoDropdown() {
  const starUrl = `${MISC_LINKS.sourceCode}/stargazers`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 rounded"
          aria-label="View repository options"
        >
          <IconCode className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-md"
      >
        <DropdownMenuItem asChild className="text-gray-900 dark:text-gray-100">
          <a
            href={MISC_LINKS.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <IconBrandGithubFilled className="text-gray-900 dark:text-gray-100" />
            View Source Code
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-gray-900 dark:text-gray-100">
          <a
            href={starUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <IconStarFilled className="text-yellow-500 dark:text-yellow-400" />{" "}
            Star the Repo
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default RepoDropdown;
