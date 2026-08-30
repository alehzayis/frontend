import { LayoutDashboard, Library, Users, Settings, FileText, DollarSign } from "lucide-react";

export const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Submissions", href: "/admin/submissions", icon: FileText },
  { label: "Pricing", href: "/admin/pricing", icon: DollarSign },
  { label: "products", href: "/admin/products", icon: Library },
  // { label: "Users", href: "/admin/users", icon: Users },
  // { label: "Settings", href: "/admin/settings", icon: Settings },
];