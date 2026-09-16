"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import api from "@/lib/api";

type AdminUser = {
  name?: string;
  email: string;
  role: string;
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    api
      .get("/api/auth/me")
      .then((res) => {
        const fetchedUser = res.data?.data;

        if (!fetchedUser) {
          router.replace("/login");
          return;
        }

        if (fetchedUser.mustChangePassword) {
          router.replace("/change-password");
          return;
        }

        if (fetchedUser.role !== "admin") {
          router.replace("/");
          return;
        }

        setUser(fetchedUser);
        setChecking(false);
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  const handleLogout = async () => {
    try {
      await api.post("/api/auth/logout");
    } catch {}
    router.replace("/login");
  };

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F3EA]">
        <p className="font-body text-sm text-[#66575A]">Checking access...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F8F3EA]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} user={user} onLogout={handleLogout} />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar user={user} onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} />
        <main className="flex-1 px-5 py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}