// 📁 navigation.ts

import {
  Home,
  FileText,
  Users,
  Compass,
  MessageCircle,
  Calendar,
  PanelsTopLeft,
} from "lucide-react";

import type { NavItem } from "@unio/types";
import { ROUTES } from "./sites";

export const PRIVATE_NAV_ITEMS: NavItem[] = [
  {
    name: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: Home,
  },
  {
    name: "Feed",
    href: ROUTES.FEED,
    icon: FileText,
  },
  {
    name: "Communities",
    href: ROUTES.COMMUNITY,
    icon: Users,
  },
  {
    name: "Network",
    href: ROUTES.NETWORKING,
    icon: Compass,
  },
  {
    name: "Messages",
    href: ROUTES.MESSAGES,
    icon: MessageCircle,
  },
  {
    name: "Events",
    href: ROUTES.EVENTS,
    icon: Calendar,
  },
  {
    name: "Playground",
    href: ROUTES.PLAYGROUND,
    icon: PanelsTopLeft,
  },
];