export type DashboardStats = {
  totalBooks: number;
  publishedBooks: number;
  activeUsers: number;
  manuscripts: number;
  pendingManuscripts: number;
  revenue: number;
  revenueThisMonth: number;
  revenueLastMonth: number;
  revenueChangePct: number;
  ordersThisMonth: number;
};

export type DashboardData = {
  stats: DashboardStats;
  revenueByDay: { date: string; revenue: number; orders: number }[];
  newUsersByDay: { date: string; count: number }[];
  orderStatusBreakdown: { status: string; count: number }[];
  submissionStatusBreakdown: { status: string; count: number }[];
  topProducts: { productId: string; title: string; unitsSold: number; revenue: number }[];
  lowStock: { productId: string; title: string; stock: number }[];
  recentOrders: {
    _id: string;
    customer: string;
    subtotal: number;
    status: string;
    fulfillmentStatus: string;
    createdAt: string;
  }[];
};

export const ORDER_STATUS_META: Record<string, { label: string; color: string }> = {
  paid: { label: "Paid", color: "#3F7D4B" },
  pending: { label: "Pending", color: "#C59B27" },
  failed: { label: "Failed", color: "#A03B3B" },
  cancelled: { label: "Cancelled", color: "#C1652E" },
  refunded: { label: "Refunded", color: "#8B7B7E" },
};

export const SUBMISSION_STATUS_META: Record<string, { label: string; color: string }> = {
  new: { label: "New", color: "#E4C673" },
  reviewed: { label: "Reviewed", color: "#C59B27" },
  sent: { label: "Sent", color: "#8B6816" },
};

export const SUBMISSION_ORDER = ["new", "reviewed", "sent"];

export const formatDateShort = (dateStr?: string) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

export const formatCurrency = (n: number) => `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
export const formatNumber = (n: number) => n.toLocaleString();
