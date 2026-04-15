// -----------------------------------------------------------------------------
// 📁 apps/web/src/features/landing/.../EditorHeader.tsx
// Landing wrapper for DS2 Editor Header
// Shows two collaborators with initials + colors, using real DS2 Avatar.
// -----------------------------------------------------------------------------

import React from "react";
import { Share2 } from "lucide-react";
import { Button } from "@unio/ui";
import EditorHeaderBase from "./EditorHeaderBase";

const EditorHeader: React.FC = () => {
  const menus = ["File", "Edit", "View", "Insert", "Format", "Tools"];

  return (
    <div className="relative w-full">
      <EditorHeaderBase
        title="Unio_Playground.doc"
        editable={false}
        status="draft"
        menus={menus}
        onStatusChange={undefined}
        
        collaborators={[
          // USER 1 — Blue avatar (initials only)
          {
            initials: "CA",
            color: "bg-blue-600",
            photo: null,
            className: "js-user1-avatar",
          },

          // USER 2 — Pink avatar, revealed via GSAP
          {
            initials: "EE",
            color: "bg-pink-600",
            photo: null,
            className: `
              js-user2-avatar
              opacity-0 invisible scale-75
              transition-all duration-300
            `,
          },
        ]}

        showInfoButton={false}
        showHistoryButton={false}

        rightActions={
          <Button
            variant="primary"
            size="sm"
            className="
              flex items-center gap-1.5 !px-3 !py-1.5
              text-tiny shadow-sm text-white dark:text-background
            "
          >
            <Share2 className="w-3 h-3" />
            Share
          </Button>
        }
      />
    </div>
  );
};

export default EditorHeader;
