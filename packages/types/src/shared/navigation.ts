import type { ElementType } from "react";

export interface NavItem {
  name: string;
  href: string;
  icon: ElementType; 
  requiresAuth?: boolean;
}