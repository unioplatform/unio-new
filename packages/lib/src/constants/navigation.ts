import { 
  Home, 
  FileText, 
  Users, 
  Compass, 
  MessageCircle, // Your upgraded version
  Calendar, 
  PanelsTopLeft  // Your upgraded version
} from "lucide-react";
import type { NavItem } from "@unio/types";

export const PRIVATE_NAV_ITEMS: NavItem[] = [
  {
    name: "Dashboard",
    href: "/app/dashboard",
    icon: Home,
  },
  {
    name: "Feed",
    href: "/app/feed",
    icon: FileText,
  },
  {
    name: "Communities",
    href: "/app/communities",
    icon: Users,
  },
  {
    name: "Network",
    href: "/app/networking",
    icon: Compass,
  },
  {
    name: "Messages",
    href: "/app/messages",
    icon: MessageCircle,
  },
  {
    name: "Events",
    href: "/app/events",
    icon: Calendar,
  },
  {
    name: "Playground",
    href: "/app/playground",
    icon: PanelsTopLeft,
  },
];