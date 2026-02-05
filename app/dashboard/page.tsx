"use client";

import React from 'react';
import {
    Search, Euro, Receipt, BarChart3, Calendar,
    Users, User, HelpCircle, Settings, LogOut,
    TrendingUp, TrendingDown, RotateCcw, Wallet,
    Briefcase, Archive, Landmark, ExternalLink,
    ChevronUp, ChevronDown, DollarSign
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function ReportingPage() {
    const chartData = [
        { name: 'HR', income: 5.5, expenses: 2.5 },
        { name: 'Sales', income: 3.8, expenses: 3.0 },
        { name: 'Supplier', income: 5.5, expenses: 1.0 },
        { name: 'Admin', income: 2.5, expenses: 4.5 },
        { name: 'Finance', income: 7.0, expenses: 1.0 },
        { name: 'IT', income: 4.8, expenses: 2.0 },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9F7] font-sans text-zinc-900">

            {/* HEADER (Same as Dashboard) */}
            <header className="flex h-16 items-center justify-between bg-[#D9E4C9] px-6">
                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-black">
                        <Search className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-lg font-bold tracking-tight">Rome</span>
                </div>
                <div className="flex items-center gap-6">
                    <User className="w-6 h-6" />
                    <HelpCircle className="w-6 h-6" />
                    <Settings className="w-6 h-6" />
                    <LogOut className="w-6 h-6" />
                </div>
            </header>

            <div className="flex flex-1">
                {/* SIDEBAR (With 'Reports' Active) */}
                <aside className="w-64 border-r border-zinc-200 bg-white p-6 hidden md:flex flex-col justify-between">
                    <nav className="space-y-4">
                        <NavItem icon={<Calendar size={20} />} label="Invest a Vacation" />
                        <NavItem icon={<BarChart3 size={20} />} label="Jars" isActive />
                    </nav>
                    <div className="pt-8 border-t border-zinc-100">
                        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Total on your accounts</p>
                        <p className="text-3xl font-bold mt-1">€35.927</p>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <h1 className="text-4xl font-bold mb-8">Reporting</h1>

                    {/* Horizontal Tabs */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <Tab icon={<Wallet size={16} />} label="Cashflow" isActive />
                        <Tab icon={<TrendingUp size={16} />} label="Profit & Loss" />
                        <Tab icon={<Receipt size={16} />} label="Statements" />
                        <Tab icon={<RotateCcw size={16} />} label="Receivables" />
                        <Tab icon={<Briefcase size={16} />} label="Project" />
                        <Tab icon={<Archive size={16} />} label="Archive" />
                    </div>

                    {/* Top Row: Metric Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <MetricCard title="Invoicing Rate" value="9%" trend="up" icon={<TrendingUp size={18} />} />
                        <MetricCard title="Forecasted Revenue" value="$1.432" trend="down" icon={<RotateCcw size={18} />} />
                        <MetricCard title="Projected Profits" value="$2.971" trend="up" icon={<Landmark size={18} />} />
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
                                        <Bar dataKey="income" stackId="a" fill="#5F6A54" barSize={14} />
                                        <Bar dataKey="expenses" stackId="a" fill="#D9E4C9" radius={[4, 4, 0, 0]} barSize={14} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Recent Activity (Dark Card) */}
                        <div className="bg-[#5F6A54] text-white p-8 rounded-xl shadow-sm">
                            <h2 className="text-xl font-bold mb-8">Recent Activity</h2>
                            <div className="space-y-10">
                                <ActivityItem time="10:40 AM, Fri., Sept. 10, 2021" title="New Invoice Created" />
                                <ActivityItem time="10:40 AM, Fri., Sept. 10, 2021" title="New Invoice Created" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Metric Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <MetricCard title="Total Expenses" value="$34.566" trend="up" icon={<Briefcase size={18} />} />
                        <MetricCard title="Forecasted Expenses" value="$11.290" icon={<RotateCcw size={18} />} />
                        <MetricCard title="Projected Expenses" value="$9.870" trend="down" icon={<Landmark size={18} />} />
                    </div>
                </main>
            </div>
        </div>
    );
}

// --- SUB-COMPONENTS ---

function NavItem({ icon, label, isActive = false }: any) {
    return (
        <div className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-[#E8EDE0] text-black font-bold' : 'text-zinc-500 hover:text-black font-semibold'}`}>
            {icon}
            <span className="text-sm">{label}</span>
        </div>
    );
}

function Tab({ icon, label, isActive = false }: any) {
    return (
        <button className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isActive ? 'bg-[#E8EDE0] text-zinc-900 shadow-sm' : 'bg-[#E8EDE0]/40 text-zinc-600 hover:bg-[#E8EDE0]'}`}>
            {icon} {label}
        </button>
    );
}

function MetricCard({ title, value, trend, icon }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
                <p className="text-zinc-500 font-medium text-sm">{title}</p>
                <div className="text-zinc-400">{icon}</div>
            </div>
            <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold">{value}</h3>
                {trend === 'up' && <ChevronUp className="text-green-600" size={24} />}
                {trend === 'down' && <ChevronDown className="text-red-500" size={24} />}
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-medium">vs. previous month</p>
        </div>
    );
}

function ActivityItem({ time, title }: any) {
    return (
        <div className="relative pl-4 border-l border-white/20">
            <p className="text-[10px] text-zinc-300 mb-1">{time}</p>
            <div className="flex items-center justify-between group cursor-pointer">
                <h4 className="font-bold text-sm">{title}</h4>
                <ExternalLink size={14} className="opacity-60 group-hover:opacity-100" />
            </div>
            <p className="text-[10px] text-zinc-300 mt-1">Check the invoice details and ensure accuracy.</p>
        </div>
    );
}