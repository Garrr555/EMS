import type { LucideIcon } from "lucide-react";
import {
  Calendar1Icon,
  DollarSignIcon,
  FileTextIcon,
  LayoutGridIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export type NavItemsType = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const navItems = (role: string): NavItemsType[] => [
  { name: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },
  role === "admin"
    ? { name: "Employees", href: "/employees", icon: UserIcon }
    : { name: "Attendance", href: "/attendance", icon: Calendar1Icon },
  { name: "Leave", href: "/leave", icon: FileTextIcon },
  { name: "Payslips", href: "/payslips", icon: DollarSignIcon },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];
