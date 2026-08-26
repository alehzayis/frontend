"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import api from "@/lib/api";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    api
      .get("/api/auth/me")
      .then((res) => {
        const user = res.data?.data;

        if (!user) {
          router.replace("/login");
          return;
        }

        if (user.mustChangePassword) {
          router.replace("/change-password");
          return;
        }

        if (user.role !== "admin") {
          router.replace("/");
          return;
        }

        setChecking(false);
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F3EA]">
        <p className="font-body text-sm text-[#66575A]">Checking access...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F8F3EA]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 px-5 py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}