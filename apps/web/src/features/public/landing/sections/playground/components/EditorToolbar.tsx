// -----------------------------------------------------------------------------
// 📁 EditorToolbar.tsx — Formatting Toolbar
// -----------------------------------------------------------------------------

import React from "react";
import {
  Undo,
  Redo,
  Printer,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Image as ImageIcon,
  ChevronDown,
  MoreHorizontal
} from "lucide-react";

import { IconButton } from "@unio/ui";

const EditorToolbar: React.FC = () => {
  return (
    <div
      className="
        flex items-center gap-1.5 px-3 py-2
        bg-background-secondary border-b border-border
        overflow-x-auto no-scrollbar
        relative z-30
      "
    >
      {/* Undo / Redo / Print */}
      <IconButton size="xs" icon={<Undo />} />
      <IconButton size="xs" icon={<Redo />} />
      <IconButton size="xs" icon={<Printer />} />

      <div className="w-px h-4 bg-border-subtle mx-1"></div>

      {/* Zoom */}
      <button
        className="
          flex items-center gap-1 text-tiny text-foreground-muted
          px-2 py-1 rounded hover:bg-background-secondary/40
        "
      >
        100% <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      <div className="w-px h-4 bg-border-subtle mx-1"></div>

      {/* Normal Text */}
      <button
        className="
          flex items-center gap-1 text-tiny text-foreground-muted
          px-2 py-1 rounded min-w-[70px] justify-between
          hover:bg-background-secondary/40
        "
      >
        Normal <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      <div className="w-px h-4 bg-border-subtle mx-1"></div>

      {/* Font */}
      <button
        className="
          flex items-center gap-1 text-tiny text-foreground-muted
          px-2 py-1 rounded min-w-[70px] justify-between
          hover:bg-background-secondary/40
        "
      >
        Inter <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      <div className="w-px h-4 bg-border-subtle mx-1"></div>

      {/* Bold / Italic / Underline */}
      <button className="js-bold-btn p-1 rounded hover:bg-background-secondary/40 text-foreground-muted hover:text-foreground">
        <Bold className="w-3 h-3" />
      </button>

      <IconButton size="xs" icon={<Italic />} />
      <IconButton size="xs" icon={<Underline />} />

      <div className="w-px h-4 bg-border-subtle mx-1"></div>

      {/* Align */}
      <IconButton size="xs" icon={<AlignLeft />} />
      <IconButton size="xs" icon={<AlignCenter />} />
      <IconButton size="xs" icon={<AlignRight />} />

      <div className="w-px h-4 bg-border-subtle mx-1"></div>

      {/* Lists */}
      <IconButton size="xs" icon={<List />} />
      <IconButton size="xs" icon={<ListOrdered />} />

      <div className="w-px h-4 bg-border-subtle mx-1"></div>

      {/* Image */}
      <IconButton size="xs" icon={<ImageIcon />} />

      <div className="flex-1"></div>

      {/* More */}
      <IconButton size="xs" icon={<MoreHorizontal />} />
    </div>
  );
};

export default EditorToolbar;
