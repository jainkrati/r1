"use client";

import React, { useState } from 'react';
import {
  Search, Euro, Receipt, BarChart3, Calendar,
  Users, User, HelpCircle, Settings, LogOut,
  TrendingUp, TrendingDown, Wallet, Briefcase,
  Landmark, ExternalLink, ChevronUp, ChevronDown,
  PlusCircle, X, FileText, Trash2, ChevronRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export default function UnifiedDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const chartData = [
    { name: 'Jan', income: 5000, expenses: 2400 },
    { name: 'Feb', income: 3000, expenses: 1398 },
    { name: 'Mar', income: 2000, expenses: 8000 },
    { name: 'Apr', income: 2780, expenses: 3908 },
    { name: 'May', income: 1890, expenses: 4800 },
    { name: 'Jun', income: 2390, expenses: 3800 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9F7] font-sans text-zinc-900">

      {/* --- HEADER --- */}
      <header className="flex h-16 items-center justify-between bg-[#D9E4C9] px-6 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-black">
            <Search className="h-4 w-4 text-white" strokeWidth={3} />
          </div>
          <span className="text-lg font-bold tracking-tight">Rome</span>
        </div>
        <div className="flex items-center gap-6">
          <User className="w-5 h-5 cursor-pointer" />
          <HelpCircle className="w-5 h-5 cursor-pointer" />
          <Settings className="w-5 h-5 cursor-pointer" />
          <LogOut className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      <div className="flex flex-1">
        {/* --- SIDEBAR --- */}
        <aside className="w-64 border-r border-zinc-200 bg-white p-6 hidden md:flex flex-col justify-between">
          <nav className="space-y-2">
            <NavItem icon={<BarChart3 size={20} />} label="All Plans" isActive />

            <div className="pt-4 mt-4 border-t border-zinc-100">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-4 w-full p-3 rounded-lg text-[#5F6A54] hover:bg-[#D9E4C9]/20 font-bold transition-all group"
              >
                <PlusCircle size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-sm">Plan vacation</span>
              </button>
            </div>
          </nav>
          <div className="pt-8 border-t border-zinc-100">
            <p className="text-xs text-zinc-400 font-medium uppercase">Total Balance</p>
            <p className="text-3xl font-bold mt-1">€35.927</p>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

          {/* Horizontal Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Tab label="Overview" isActive={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
            <Tab label="Accounts" isActive={activeTab === 'Accounts'} onClick={() => setActiveTab('Accounts')} />
            <Tab label="History" isActive={activeTab === 'History'} onClick={() => setActiveTab('History')} />
            <Tab label="Forecast" isActive={activeTab === 'Forecast'} onClick={() => setActiveTab('Forecast')} />
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard title="Bank Account" value="€23.826" trend="up" icon={<Landmark size={18} />} />
            <MetricCard title="Monthly Inflow" value="+€4.210" trend="up" icon={<TrendingUp size={18} />} />
            <MetricCard title="Pending Invoices" value="€1.432" trend="down" icon={<Receipt size={18} />} />
          </div>

          {/* Middle Row: Chart & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-zinc-100 shadow-sm">
              <h2 className="text-xl font-bold mb-8">Financial Overview</h2>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ left: -20 }}>
                    <CartesianGrid vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
                    <Tooltip cursor={{ fill: '#f8f9f7' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                    <Bar dataKey="income" stackId="a" fill="#5F6A54" barSize={14} />
                    <Bar dataKey="expenses" stackId="a" fill="#D9E4C9" radius={[4, 4, 0, 0]} barSize={14} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity Panel */}
            <div className="bg-[#5F6A54] text-white p-8 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-8">Recent Activity</h2>
              <div className="space-y-8">
                <ActivityItem time="10:40 AM, Sept. 10" title="Invoice #938117" desc="Payment received from Acme" />
                <ActivityItem time="09:15 AM, Sept. 09" title="Vault Transfer" desc="Moved €500 to Savings" />
                <ActivityItem time="04:30 PM, Sept. 08" title="New Expense" desc="Subscription: Streamio" />
              </div>
              <button className="mt-10 flex items-center gap-2 text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">
                View all history <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Bottom Row Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard title="Vaults" value="€34.109" icon={<Wallet size={18} />} />
            <MetricCard title="Cash on Hand" value="€10.320" icon={<Euro size={18} />} />
            <MetricCard title="Projected Growth" value="12%" trend="up" icon={<TrendingUp size={18} />} />
          </div>
        </main>
      </div>

      {/* --- INVOICE MODAL --- */}
      {isModalOpen && <InvoiceModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// --- REUSABLE COMPONENTS ---

function NavItem({ icon, label, isActive = false }: any) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-[#E8EDE0] text-black font-bold' : 'text-zinc-500 hover:text-black font-semibold'}`}>
      {icon} <span className="text-sm">{label}</span>
    </div>
  );
}

function Tab({ label, isActive, onClick }: any) {
  return (
    <button onClick={onClick} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${isActive ? 'bg-[#E8EDE0] text-zinc-900' : 'bg-[#E8EDE0]/40 text-zinc-600 hover:bg-[#E8EDE0]'}`}>
      {label}
    </button>
  );
}

function MetricCard({ title, value, trend, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <p className="text-zinc-500 font-medium text-sm">{title}</p>
        <div className="text-zinc-400">{icon}</div>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        {trend === 'up' && <ChevronUp className="text-green-600" size={20} />}
        {trend === 'down' && <ChevronDown className="text-red-500" size={20} />}
      </div>
      <p className="text-[10px] text-zinc-400 mt-2 font-medium uppercase tracking-wider">vs. last month</p>
    </div>
  );
}

function ActivityItem({ time, title, desc }: any) {
  return (
    <div className="relative pl-4 border-l border-white/20">
      <p className="text-[10px] text-white/60 mb-1 font-mono uppercase">{time}</p>
      <h4 className="font-bold text-sm mb-1">{title}</h4>
      <p className="text-xs text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function InvoiceModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">New invoice</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-black"><X size={28} /></button>
        </div>
        {/* Invoice form items here (shortened for brevity) */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="space-y-4"><input className="w-full border p-3 rounded-lg outline-none" placeholder="Invoice #" /></div>
          <div className="space-y-4"><input className="w-full border p-3 rounded-lg outline-none" placeholder="Company Name" /></div>
        </div>
        <button className="bg-[#D9E4C9] text-zinc-900 px-10 py-3 rounded-lg font-bold">Save invoice</button>
      </div>
    </div>
  );
}