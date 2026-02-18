// Re-export all mock data from this file for easy imports

// Homepage
export { homePageStats, homePageBenefits } from "./homepage";

// Properties
export { allProperties, propertyFilters } from "./properties";

// Messages
export { conversations, messageThreads } from "./messagesData";

// Landlords Page
export {
  landlordBenefits,
  landlordStats,
  landlordTestimonials,
} from "./landlordsPage";

// Lease
export { leaseDetails } from "./leaseData";

// Documents
export {
  leaseAgreement,
  propertyInspectionReport,
  paymentSchedule,
  houseRules,
} from "./documents";

// Tenant dashboard & payments
export {
  tenantWalletData,
  tenantPaymentSchedule,
  tenantPastPayments,
  tenantCurrentLease,
  tenantDashboardPaymentSchedule,
  tenantDashboardPastPayments,
  tenantSavedProperties,
} from "./tenant";

// Agent dashboard & applications
export {
  agentManagedProperties,
  agentManagedPropertiesWithMetrics,
  agentAvailableProperties,
  agentMyApplications,
  agentDashboardStats,
  agentApplications,
} from "./agent";

// Landlord dashboard & agents
export {
  landlordMyProperties,
  landlordDashboardStats,
  landlordMyAgents,
  landlordAgentsStats,
  landlordProperties,
} from "./landlord";

// Whistleblower
export {
  whistleblowerData,
  whistleblowerListings,
  whistleblowerEarnings,
} from "./whistleblower";

// Admin
export { whistleblowerApplications } from "./admin";
