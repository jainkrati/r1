"use client";

import React from 'react';
import {
    Search, Euro, Receipt, BarChart3, Calendar,
    Users, User, HelpCircle, Settings, LogOut,
    ExternalLink, UserPlus, Folder, Zap
} from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9F7] font-sans text-zinc-900">

            {/* --- HEADER --- */}
            <header className="flex h-16 items-center justify-between bg-[#D9E4C9] px-6">
                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-black">
                        <Search className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-lg font-bold tracking-tight">FinPlanner</span>
                </div>

                <div className="flex items-center gap-6">
                    <User className="w-6 h-6 cursor-pointer" />
                    <HelpCircle className="w-6 h-6 cursor-pointer" />
                    <Settings className="w-6 h-6 cursor-pointer" />
                    <LogOut className="w-6 h-6 cursor-pointer" />
                </div>
            </header>

            <div className="flex flex-1">
                {/* --- SIDEBAR --- */}
                <aside className="w-64 border-r border-zinc-200 bg-white p-6 hidden md:flex flex-col justify-between">
                    <nav className="space-y-8">
                        <NavItem icon={<Euro size={20} />} label="Transactions" />
                        <NavItem icon={<Receipt size={20} />} label="Invoices" />
                        <NavItem icon={<BarChart3 size={20} />} label="Reports" />
                        <NavItem icon={<Calendar size={20} />} label="Calendar" />
                        <NavItem icon={<Users size={20} />} label="Company and users" />
                    </nav>

                    <div className="pt-8 border-t border-zinc-100">
                        <p className="text-xs text-zinc-400 font-medium">Total on your accounts</p>
                        <p className="text-3xl font-bold mt-1">€35.927</p>
                    </div>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-8">Welcome!</h1>

                    {/* Top Row Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                        {/* My Accounts Card */}
                        <div className="bg-white p-8 rounded-xl border border-zinc-100 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">My accounts</h2>
                            <div className="space-y-4">
                                <AccountRow label="Bank Account" amount="€23.826" />
                                <AccountRow label="Vaults" amount="€34.109" />
                                <AccountRow label="Cash" amount="€10.320" />
                                <div className="pt-4 border-t border-zinc-100">
                                    <AccountRow label="Total" amount="€68.255" isBold />
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Transactions Card */}
                        <div className="bg-white p-8 rounded-xl border border-zinc-100 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Upcoming transactions</h2>
                            <div className="space-y-4">
                                <TransactionRow date="14/11/23" amount="+€2.011" company="Company Co." tag="Stocks" isPositive />
                                <TransactionRow date="14/11/23" amount="+€198" company="Acme" tag="Subscription" isPositive />
                                <TransactionRow date="15/11/23" amount="-€690" company="Streamio" tag="Supplier" />
                                <TransactionRow date="15/11/23" amount="+€1.380" company="Company Co." tag="Supplier" isPositive />
                                <TransactionRow date="15/11/23" amount="-€8.900" company="Company Co." tag="Investment" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Inflow & Income Chart Area */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-zinc-100 shadow-sm">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-bold">Inflow & Income</h2>
                                <div className="flex gap-4 text-xs font-medium text-zinc-500">
                                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#5F6A54]"></span> Income</div>
                                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#D9E4C9]"></span> Expenses</div>
                                </div>
                            </div>
                            {/* Simplified CSS Bar Chart Representation */}
                            <div className="flex items-end justify-between h-48 gap-2 px-2">
                                {[40, 60, 80, 50, 90, 65, 55, 75, 85, 45, 95, 70, 75].map((h, i) => (
                                    <div key={i} className="flex flex-col gap-1 w-full">
                                        <div style={{ height: `${h}%` }} className="w-full bg-[#D9E4C9] rounded-t-sm" />
                                        <div style={{ height: `${h / 2}%` }} className="w-full bg-[#5F6A54]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Access Card */}
                        <div className="bg-white p-8 rounded-xl border border-zinc-100 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Quick access</h2>
                            <div className="space-y-4">
                                <QuickAccessItem icon={<UserPlus size={18} />} label="Account" />
                                <QuickAccessItem icon={<Folder size={18} />} label="Projects" />
                                <QuickAccessItem icon={<Zap size={18} />} label="Forecast" />
                                <QuickAccessItem icon={<Euro size={18} />} label="Money & Cashflow" />
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

// --- SUB-COMPONENTS FOR CLEANER CODE ---

const NavItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center gap-4 text-zinc-500 hover:text-black cursor-pointer transition-colors group">
        <span className="group-hover:scale-110 transition-transform">{icon}</span>
        <span className="font-semibold text-sm">{label}</span>
    </div>
);

const AccountRow = ({ label, amount, isBold = false }: { label: string, amount: string, isBold?: boolean }) => (
    <div className={`flex justify-between items-center ${isBold ? 'text-2xl font-bold' : 'text-zinc-600 font-medium'}`}>
        <span>{label}</span>
        <span>{amount}</span>
    </div>
);

const TransactionRow = ({ date, amount, company, tag, isPositive = false }: any) => (
    <div className="flex items-center justify-between text-sm py-1">
        <span className="text-zinc-400 w-16">{date}</span>
        <span className={`w-20 font-bold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>{amount}</span>
        <span className="flex-1 font-semibold">{company}</span>
        <span className="px-3 py-1 bg-[#E8EDE0] text-[#5F6A54] text-[10px] font-bold rounded uppercase tracking-wider">
            {tag}
        </span>
    </div>
);

const QuickAccessItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex items-center justify-between p-3 border border-zinc-100 rounded-lg hover:bg-zinc-50 cursor-pointer transition-all">
        <div className="flex items-center gap-4">
            <div className="p-2 border border-zinc-200 rounded-md">{icon}</div>
            <span className="font-semibold text-sm">{label}</span>
        </div>
        <ExternalLink size={14} className="text-zinc-400" />
    </div>
);