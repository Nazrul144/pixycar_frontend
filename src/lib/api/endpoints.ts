export const ENDPOINTS = {
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    forgotPassword: "/auth/forgot-password",
    verifyOtp: "/auth/verify-otp",
    resetPassword: "/auth/reset-password",
  },
  listings: {
    base: "/listings",
    byId: (id: string) => `/listings/${id}`,
    myListings: "/listings/my",
  },
  messages: {
    base: "/messages",
    conversation: (id: string) => `/messages/${id}`,
  },
  profile: {
    me: "/profile/me",
    update: "/profile/update",
    changePassword: "/profile/change-password",
  },
  dashboard: {
    stats: "/dashboard/stats",
    recentActivity: "/dashboard/activity",
  },
} as const;
