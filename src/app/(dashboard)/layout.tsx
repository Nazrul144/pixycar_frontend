import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { DashboardTopbar } from "@/components/layout/dashboard-topbar/dashboard-topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <div>
        <DashboardTopbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
