export type TenantWalletData = {
  balance: number
  lastTopUp: string
  autoPayEnabled: boolean
}

export type TenantPaymentScheduleItem = {
  month: string
  amount: number
  status: "upcoming" | "pending"
  dueDate: string
}

export type TenantPastPaymentItem = {
  month: string
  amount: number
  status: "paid"
  paidDate: string
  method: string
}

export const tenantWalletData: TenantWalletData = {
  balance: 150000,
  lastTopUp: "Dec 28, 2024",
  autoPayEnabled: true,
}

export const tenantPaymentSchedule: TenantPaymentScheduleItem[] = [
  { month: "Jan 2025", amount: 215000, status: "upcoming", dueDate: "Jan 15" },
  { month: "Feb 2025", amount: 215000, status: "pending", dueDate: "Feb 15" },
  { month: "Mar 2025", amount: 215000, status: "pending", dueDate: "Mar 15" },
  { month: "Apr 2025", amount: 215000, status: "pending", dueDate: "Apr 15" },
  { month: "May 2025", amount: 215000, status: "pending", dueDate: "May 15" },
  { month: "Jun 2025", amount: 215000, status: "pending", dueDate: "Jun 15" },
]

export const tenantPastPayments: TenantPastPaymentItem[] = [
  {
    month: "Dec 2024",
    amount: 215000,
    status: "paid",
    paidDate: "Dec 12",
    method: "Auto-debit",
  },
  {
    month: "Nov 2024",
    amount: 215000,
    status: "paid",
    paidDate: "Nov 14",
    method: "Wallet",
  },
  {
    month: "Oct 2024",
    amount: 215000,
    status: "paid",
    paidDate: "Oct 13",
    method: "Manual",
  },
  {
    month: "Sep 2024",
    amount: 215000,
    status: "paid",
    paidDate: "Sep 15",
    method: "Auto-debit",
  },
  {
    month: "Aug 2024",
    amount: 215000,
    status: "paid",
    paidDate: "Aug 12",
    method: "Wallet",
  },
  {
    month: "Jul 2024",
    amount: 215000,
    status: "paid",
    paidDate: "Jul 14",
    method: "Manual",
  },
]

export type TenantDashboardPaymentItem =
  | {
      month: string
      amount: number
      status: "upcoming" | "pending"
      dueDate: string
    }
  | {
      month: string
      amount: number
      status: "paid"
      paidDate: string
    }

export const tenantCurrentLease = {
  property: "Modern 3 Bedroom Flat",
  location: "Lekki Phase 1, Lagos",
  monthlyPayment: 215000,
  nextPaymentDate: "Jan 15, 2025",
  leaseEnd: "Dec 31, 2025",
  totalPaid: 1290000,
  totalOwed: 2580000,
  progress: 33,
  agent: { name: "Adebayo Johnson", avatar: "AJ" },
}

export const tenantDashboardPaymentSchedule: TenantDashboardPaymentItem[] = [
  { month: "Jan 2025", amount: 215000, status: "upcoming", dueDate: "Jan 15" },
  { month: "Feb 2025", amount: 215000, status: "pending", dueDate: "Feb 15" },
  { month: "Mar 2025", amount: 215000, status: "pending", dueDate: "Mar 15" },
  { month: "Apr 2025", amount: 215000, status: "pending", dueDate: "Apr 15" },
]

export const tenantDashboardPastPayments: TenantDashboardPaymentItem[] = [
  { month: "Dec 2024", amount: 215000, status: "paid", paidDate: "Dec 12" },
  { month: "Nov 2024", amount: 215000, status: "paid", paidDate: "Nov 14" },
  { month: "Oct 2024", amount: 215000, status: "paid", paidDate: "Oct 13" },
]

export const tenantSavedProperties = [
  {
    id: 1,
    title: "Luxury 2BR in VI",
    location: "Victoria Island",
    price: 2800000,
  },
  { id: 2, title: "Spacious Studio", location: "Ikeja GRA", price: 1500000 },
]
