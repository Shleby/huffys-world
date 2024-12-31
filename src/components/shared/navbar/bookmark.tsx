"use client";

import { Bookmark, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function BookmarkFeature() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
  }, []);

  const addBookmark = (url?: string) => {
    const currentURL = url || window.location.href;
    if (!bookmarks.includes(currentURL)) {
      const newBookmarks = [...bookmarks, currentURL];
      setBookmarks(newBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
    }
  };

  const removeBookmark = (url: string) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark !== url);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 rounded"
          aria-label="Toggle bookmarks"
        >
          <Bookmark className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-md"
        style={{ minWidth: "200px", maxWidth: "350px" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-2">
          <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-200">
            Bookmarks
          </h4>
          <button
            onClick={() => addBookmark()}
            className="p-1 text-blue-500 hover:text-blue-700"
            aria-label="Add current page to bookmarks"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Bookmarks List */}
        <ul className="space-y-2 px-2">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark, index) => (
              <li
                key={index}
                className="flex justify-between items-center space-x-2"
              >
                <a
                  href={bookmark}
                  className="text-blue-500 hover:underline text-sm truncate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {bookmark}
                </a>
                <button
                  onClick={() => removeBookmark(bookmark)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Remove bookmark for ${bookmark}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No bookmarks yet.
            </p>
          )}
        </ul>

        {/* "Ctrl+D" Message */}
        <div className="my-2 text-xs text-gray-500 dark:text-gray-400 px-2">
          Want to save as a browser bookmark? Press{" "}
          <kbd className="bg-gray-200 dark:bg-neutral-800 px-1 rounded">
            Ctrl+D
          </kbd>{" "}
          (or <kbd>Cmd+D</kbd> on Mac).
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BookmarkFeature;
