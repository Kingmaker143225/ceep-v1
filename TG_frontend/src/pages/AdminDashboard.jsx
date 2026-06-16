import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  LayoutDashboard,
  Users,
  MapPin,
  Bell,
  BarChart3,
  Settings,
  Search,
  IndianRupee,
  FileCheck,
  Building2,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { branches } from "@/data/branches";
import { recentApplicants } from "@/data/recentApplicants";

const navItems = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "applicants", label: "Applicants", icon: Users },
  { key: "centers", label: "Exam Centers", icon: MapPin },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "settings", label: "Settings", icon: Settings },
];

const mockBranchData = branches
  .map((b) => ({
    name: b.code,
    applications: Math.floor(Math.random() * 5000) + 1000,
  }))
  .filter((b) => b.name !== "MBA" && b.name !== "MCA");

const mockTrendData = Array.from({ length: 14 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (13 - i));

  return {
    date: `${d.getDate()} ${d.toLocaleString("default", { month: "short" })}`,
    applications: Math.floor(Math.random() * 2000) + 500,
  };
});

function StatCard({ title, value, desc, icon: Icon, color, delay }) {
  return (
    <div
      className="rounded-2xl border border-white/60 bg-white/75 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animation: `fadeUp 0.5s ease ${delay}s both` }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <p className="mb-1 text-sm font-medium text-slate-500">{title}</p>
      <h3 className="mb-1 text-2xl font-bold text-[#06254D]">{value}</h3>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${className}`}>
      {children}
    </span>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");

  const filteredApplicants = recentApplicants.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.regno.toLowerCase().includes(search.toLowerCase());

    const matchesBranch = branchFilter === "all" || a.branch === branchFilter;

    return matchesSearch && matchesBranch;
  });

  const renderOverview = () => (
    <div className="space-y-6">
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="rounded-3xl bg-gradient-to-r from-[#06254D] via-[#0B3A75] to-[#06254D] p-6 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
          Admin Control Panel
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          TG PGCET 2026 Dashboard
        </h2>
        <p className="mt-2 text-sm text-white/80">
          Monitor applications, payments, centers, and reports.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Applicants"
          value="24,832"
          desc="+12% from yesterday"
          icon={Users}
          color="bg-blue-100 text-blue-700"
          delay={0.05}
        />
        <StatCard
          title="Fee Collected"
          value="₹2.97 Cr"
          desc="Updated 5 mins ago"
          icon={IndianRupee}
          color="bg-green-100 text-green-700"
          delay={0.15}
        />
        <StatCard
          title="Exam Centers"
          value="48"
          desc="Across 12 districts"
          icon={Building2}
          color="bg-purple-100 text-purple-700"
          delay={0.25}
        />
        <StatCard
          title="Results Published"
          value="22,164"
          desc="92% completion"
          icon={FileCheck}
          color="bg-yellow-100 text-yellow-700"
          delay={0.35}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/60 bg-white/75 shadow-md backdrop-blur-xl">
          <div className="border-b px-6 py-4">
            <h3 className="font-bold text-[#06254D]">
              Applications by Engineering Branch
            </h3>
          </div>

          <div className="h-[300px] p-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockBranchData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="applications" fill="#06254D" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/75 shadow-md backdrop-blur-xl">
          <div className="border-b px-6 py-4">
            <h3 className="font-bold text-[#06254D]">
              Application Trend Last 14 Days
            </h3>
          </div>

          <div className="h-[300px] p-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="#EAB308"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/75 shadow-md backdrop-blur-xl">
        <div className="flex flex-col gap-4 border-b px-6 py-4 md:flex-row md:items-center md:justify-between">
          <h3 className="font-bold text-[#06254D]">Recent Applicants</h3>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Search name or HT no..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400 sm:w-64"
              />
            </div>

            <select
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none"
            >
              <option value="all">All Branches</option>
              {branches.map((b) => (
                <option key={b.code} value={b.code}>
                  {b.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4">Reg No</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Branch</th>
                <th className="px-6 py-4">Center</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredApplicants.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50">
                  <td className="px-6 py-3 font-bold text-[#06254D]">{app.regno}</td>
                  <td className="px-6 py-3">{app.name}</td>
                  <td className="px-6 py-3">
                    <Badge className="border-slate-300 text-slate-700">{app.branch}</Badge>
                  </td>
                  <td className="px-6 py-3 text-slate-500">{app.center}</td>
                  <td className="px-6 py-3 text-slate-500">{app.appliedOn}</td>
                  <td className="px-6 py-3 text-right">
                    <Badge
                      className={
                        app.status === "Submitted"
                          ? "border-green-200 bg-green-100 text-green-800"
                          : app.status === "Draft"
                            ? "border-gray-200 bg-gray-100 text-gray-800"
                            : "border-yellow-200 bg-yellow-100 text-yellow-800"
                      }
                    >
                      {app.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title) => (
    <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border bg-white/75 p-6 text-center shadow-md backdrop-blur-xl">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-[#06254D]">
        <Settings className="h-8 w-8" />
      </div>

      <h2 className="mb-2 text-2xl font-bold text-[#06254D]">
        {title} Management
      </h2>

      <p className="max-w-md text-slate-500">
        Administrative module for managing {title.toLowerCase()}.
      </p>
    </div>
  );

  return (
    <DashboardLayout
      title="Admin Control Panel"
      role="admin"
      navItems={navItems}
      active={activeTab}
      onSelect={setActiveTab}
    >
      {activeTab === "overview"
        ? renderOverview()
        : renderPlaceholder(
          navItems.find((n) => n.key === activeTab)?.label || "Module"
        )}
    </DashboardLayout>
  );
}