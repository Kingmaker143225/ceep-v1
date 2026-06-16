

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Ticket,
  Award,
  User,
  Bell,
  CheckCircle,
  ArrowLeft,
  CalendarDays,
  MapPin,
  TrendingUp,
} from "lucide-react";

const navItems = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "application", label: "Application", icon: FileText },
  { key: "payment", label: "Payment", icon: CreditCard },
  { key: "hallticket", label: "Hall Ticket", icon: Ticket },
  { key: "results", label: "Results", icon: Award },
  { key: "profile", label: "Profile", icon: User },
  { key: "notifications", label: "Notifications", icon: Bell },
];

function StatusBadge({ children, type = "success" }) {
  const styles =
    type === "success"
      ? "bg-green-100 text-green-800 border-green-200"
      : type === "warning"
      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
      : "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${styles}`}>
      {children}
    </span>
  );
}

function ActionButton({ children, onClick, variant = "default", className = "" }) {
  const styles =
    variant === "outline"
      ? "border border-[#06254D]/20 bg-white/70 text-[#06254D] hover:bg-[#06254D] hover:text-white"
      : "bg-[#06254D] text-white hover:opacity-90";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

function StatCard({ title, value, status, icon: Icon, color, delay }) {
  return (
    <div
      className="group rounded-2xl border border-white/60 bg-white/70 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animation: `fadeUp 0.5s ease ${delay}s both` }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
        {status}
      </div>

      <p className="mb-1 text-sm font-medium text-slate-500">{title}</p>
      <h3 className="text-xl font-bold text-[#06254D]">{value}</h3>
    </div>
  );
}

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const savedUser = sessionStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;
  const studentDetails = user?.details || {};
  const studentName = user?.name || "Rahul Sharma";
  const registrationNo = user?.username || "PGCET2026001";
  const entranceBranchName = studentDetails.branch_entrance || "CSE";
  const paymentAmount = studentDetails.ph_status === "YES" ? "0" : (studentDetails.category === "SC_I" || studentDetails.category === "SC_II" || studentDetails.category === "SC_III" || studentDetails.category === "ST" ? "500" : "900");

  const activities = [
    { title: "Hall Ticket Generated", date: "10 May 2026, 10:30 AM" },
    { title: "Application Approved", date: "15 Mar 2026, 04:15 PM" },
    { title: "Payment Received", date: "01 Mar 2026, 11:20 AM" },
    { title: "Application Submitted", date: "01 Mar 2026, 11:15 AM" },
    { title: "Registration Completed", date: "01 Mar 2026, 10:45 AM" },
  ];

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

      {/* Welcome Glass Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#06254D] via-[#0B3A75] to-[#06254D] p-6 text-white shadow-xl md:p-8">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 right-10 h-28 w-28 rounded-full bg-yellow-400/20 blur-xl" />

        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-300">
              Student Portal
            </p>
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Welcome, {studentName}
            </h2>
            <p className="text-sm text-white/80 md:text-base">
              Application No: {registrationNo} | Branch: {entranceBranchName}
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
            <p className="text-xs text-white/70">Overall Progress</p>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-2 w-32 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[78%] rounded-full bg-yellow-400" />
              </div>
              <span className="text-sm font-bold">78%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Application"
          value="Submitted"
          icon={FileText}
          color="bg-green-100 text-green-700"
          status={<StatusBadge>Done</StatusBadge>}
          delay={0.05}
        />

        <StatCard
          title="Payment"
          value={`Paid ₹${paymentAmount}`}
          icon={CreditCard}
          color="bg-emerald-100 text-emerald-700"
          status={<StatusBadge>Done</StatusBadge>}
          delay={0.15}
        />

        <StatCard
          title="Hall Ticket"
          value="Available"
          icon={Ticket}
          color="bg-yellow-100 text-yellow-700"
          status={
            <ActionButton
              variant="outline"
              className="h-7 px-3 text-xs"
              onClick={() => setActiveTab("hallticket")}
            >
              View
            </ActionButton>
          }
          delay={0.25}
        />

        <StatCard
          title="Result"
          value="Pending"
          icon={Award}
          color="bg-slate-100 text-slate-600"
          status={<StatusBadge type="muted">Awaited</StatusBadge>}
          delay={0.35}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Activity Timeline */}
        <div className="rounded-2xl border border-white/60 bg-white/75 shadow-md backdrop-blur-xl lg:col-span-2">
          <div className="border-b border-slate-200/70 px-6 py-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#06254D]">
              <TrendingUp className="h-5 w-5 text-yellow-600" />
              Recent Activity
            </h3>
          </div>

          <div className="p-6">
            <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-20px)] before:w-0.5 before:bg-slate-200">
              {activities.map((item, i) => (
                <div
                  key={i}
                  className="relative flex gap-4"
                  style={{ animation: `fadeUp 0.45s ease ${i * 0.1}s both` }}
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-green-100 text-green-700 shadow">
                    <CheckCircle className="h-5 w-5" />
                  </div>

                  <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                    <p className="font-bold text-[#06254D]">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Slot Card */}
        <div className="rounded-2xl border border-yellow-200 bg-white/80 shadow-md backdrop-blur-xl">
          <div className="rounded-t-2xl border-b border-yellow-200 bg-yellow-50 px-6 py-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#06254D]">
              <Ticket className="h-5 w-5 text-yellow-600" />
              Exam Slot Details
            </h3>
          </div>

          <div className="space-y-5 p-6">
            <div className="flex gap-3">
              <CalendarDays className="mt-1 h-5 w-5 text-[#06254D]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Date & Time
                </p>
                <p className="mt-1 text-lg font-bold text-[#06254D]">
                  15 May 2026
                </p>
                <p className="text-sm font-medium text-slate-700">
                  10:00 AM - 1:00 PM
                </p>
              </div>
            </div>

            <div className="border-t pt-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#06254D]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Test Center
                  </p>
                  <p className="mt-1 font-bold text-[#06254D]">
                    JNTU Hyderabad - Block A
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Kukatpally, Hyderabad, Telangana 500085
                  </p>
                </div>
              </div>
            </div>

            <ActionButton
              variant="outline"
              className="mt-2 w-full"
              onClick={() => setActiveTab("hallticket")}
            >
              View Hall Ticket
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title) => (
    <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/75 p-6 text-center shadow-md backdrop-blur-xl">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-[#06254D]">
        <FileText className="h-8 w-8" />
      </div>

      <h2 className="mb-2 text-2xl font-bold text-[#06254D]">{title}</h2>

      <p className="max-w-md text-slate-500">
        This section is fully wired in the architecture. It will display the
        specific module data when connected to the backend API.
      </p>

      <ActionButton
        className="mt-6 gap-2"
        variant="outline"
        onClick={() => setActiveTab("overview")}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </ActionButton>
    </div>
  );

  return (
    <DashboardLayout
      title="Student Portal"
      role="student"
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