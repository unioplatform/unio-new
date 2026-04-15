import React from "react";
import { Dropdown } from "@unio/ui";

interface UserMenuContentProps {
  header: React.ReactNode;
  statusSwitcher: React.ReactNode;
  sections: React.ReactNode[];
  footer?: React.ReactNode;
}

export const UserMenuContent: React.FC<UserMenuContentProps> = ({
  header,
  statusSwitcher,
  sections,
  footer,
}) => {
  return (
    <Dropdown.Content
      align="end"
      className="w-72 p-0 overflow-hidden shadow-xl bg-background border border-border/40 z-[10000] rounded-2xl"
    >
      {/* 1. Identity Header */}
      <div className="bg-accent-bg/10">{header}</div>
      
      {/* 2. Live Status Selector */}
      <div className="border-y border-border/40">{statusSwitcher}</div>
      
      {/* 3. Action Sections (Community, Account, etc.) */}
      <div className="p-2 flex flex-col gap-1">
        {sections.map((section, idx) => (
          <React.Fragment key={idx}>
            {section}
          </React.Fragment>
        ))}
      </div>

      {footer && <div className="p-2 border-t border-border/40">{footer}</div>}
    </Dropdown.Content>
  );
};