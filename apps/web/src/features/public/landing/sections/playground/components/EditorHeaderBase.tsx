// 📁 apps/web/src/features/editor/components/EditorHeaderBase.tsx
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import {
  Pencil,
  Eye,
  RefreshCcw,
  Check,
  Info,
  History,
  ChevronDown,
} from "lucide-react";

import { Text, Avatar } from "@unio/ui";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
export type EditorStatusKey = "draft" | "review" | "changes" | "final";

export interface Collaborator {
  initials: string;
  color: string;        
  photo?: string | null;
  className?: string;
}

export interface EditorHeaderBaseProps {
  title: string;
  editable?: boolean;
  onTitleChange?: (v: string) => void;
  status?: EditorStatusKey;
  onStatusChange?: (v: EditorStatusKey) => void;
  menus?: string[];
  collaborators?: Collaborator[];
  showInfoButton?: boolean;
  showHistoryButton?: boolean;
  rightActions?: React.ReactNode;
  className?: string;
}

// -----------------------------------------------------------------------------
// Status Config - Using Accent colors to match the "Unio Glow"
// -----------------------------------------------------------------------------
const STATUS_CONFIG: Record<
  EditorStatusKey,
  { label: string; icon: any; colorClass: string }
> = {
  draft: { label: "Draft", icon: Pencil, colorClass: "text-text-tertiary" },
  review: { label: "In Review", icon: Eye, colorClass: "text-accent" },
  changes: { label: "Changes", icon: RefreshCcw, colorClass: "text-orange-400" },
  final: { label: "Approved", icon: Check, colorClass: "text-green-500" },
};

const EditorHeaderBase: React.FC<EditorHeaderBaseProps> = ({
  title,
  editable = true,
  onTitleChange,
  status = "draft",
  onStatusChange,
  menus = ["File", "Edit", "View", "Insert", "Format", "Tools", "Help"],
  collaborators = [],
  showInfoButton = true,
  showHistoryButton = true,
  rightActions,
  className = "",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setValue(title), [title]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const commit = () => {
    setIsEditing(false);
    if (value !== title && onTitleChange) onTitleChange(value);
  };

  const [openStatus, setOpenStatus] = useState(false);
  const statusCfg = STATUS_CONFIG[status];
  const StatusIcon = statusCfg.icon;

  return (
    <header
      className={clsx(
        "relative z-20 flex items-center justify-between",
        "px-4 h-[52px] shrink-0 select-none",
        "bg-background/95 backdrop-blur-md border-b border-border/60",
        className
      )}
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          {editable ? (
            isEditing ? (
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={commit}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commit();
                  if (e.key === "Escape") {
                    setValue(title);
                    setIsEditing(false);
                  }
                }}
                /* 🚀 Match Text component size/weight */
                className="bg-accent/5 text-text-primary border border-accent/20 px-2 py-0.5 rounded-sm text-sm font-semibold outline-none ring-1 ring-accent/30"
              />
            ) : (
              <h1 className="cursor-text flex items-center" onClick={() => setIsEditing(true)}>
                <Text size="small" weight="semibold">
                  {title}
                </Text>
              </h1>
            )
          ) : (
            <h1>
              <Text size="small" weight="semibold">
                {title}
              </Text>
            </h1>
          )}

          {/* STATUS SELECTOR */}
          <div className="relative">
            <button
              disabled={!onStatusChange}
              onClick={() => onStatusChange && setOpenStatus((o) => !o)}
              className={clsx(
                "flex items-center gap-1.5 px-2 py-1 rounded-md",
                "bg-accent/5 border border-accent/10",
                "hover:bg-accent/10 transition-colors",
                !onStatusChange && "opacity-80 cursor-default"
              )}
            >
              <StatusIcon className={clsx("w-3 h-3", statusCfg.colorClass)} />
              <Text size="tiny" weight="semibold" tone="secondary">
                {statusCfg.label}
              </Text>
              <ChevronDown className="w-3 h-3 opacity-40 text-text-secondary" />
            </button>

            {openStatus && onStatusChange && (
              <div className="absolute mt-2 left-0 z-50 bg-background border border-border rounded-lg shadow-xl py-1 min-w-[180px]">
                {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                  <button
                    key={key}
                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-accent/5 transition-colors"
                    onClick={() => {
                      onStatusChange(key as EditorStatusKey);
                      setOpenStatus(false);
                    }}
                  >
                    <cfg.icon className={clsx("w-4 h-4", cfg.colorClass)} />
                    <Text size="small" tone="secondary">{cfg.label}</Text>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MENU BAR */}
        <nav className="hidden lg:flex items-center gap-1">
          {menus.map((menu) => (
            <button
              key={menu}
              className="px-2 py-1 rounded-md hover:bg-accent/5 group transition-all"
            >
              <Text size="tiny" weight="semibold" tone="muted" className="group-hover:text-text-primary transition-colors">
                {menu}
              </Text>
            </button>
          ))}
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 border-r border-border pr-4">
          {showInfoButton && (
            <button className="p-2 rounded-md hover:bg-accent/5 transition">
              <Info className="w-4 h-4 text-text-tertiary hover:text-accent transition-colors" />
            </button>
          )}
          {showHistoryButton && (
            <button className="p-2 rounded-md hover:bg-accent/5 transition">
              <History className="w-4 h-4 text-text-tertiary hover:text-accent transition-colors" />
            </button>
          )}
        </div>

        {/* COLLABORATORS */}
        {collaborators.length > 0 && (
          <div className="flex -space-x-2 mr-2">
            {collaborators.map((c, idx) => (
              <div 
                key={idx} 
                className="rounded-full ring-2 ring-background hover:z-30 transition-all"
              >
                <Avatar
                  initials={c.initials}
                  color={c.color}
                  photo={c.photo}
                  size="sm"
                />
              </div>
            ))}
          </div>
        )}

        {rightActions && <div className="flex items-center">{rightActions}</div>}
      </div>
    </header>
  );
};

export default React.memo(EditorHeaderBase);