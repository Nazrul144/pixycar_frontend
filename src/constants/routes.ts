export const ROUTES = {
  home: "/",
  browse: "/browse",
  auth: {
    signIn: "/sign-in",
    signUp: "/sign-up",
    forgotPassword: "/forgot-password",
    verifyOtp: "/verify-otp",
    resetPassword: "/reset-password",
  },
  dashboard: {
    home: "/dashboard",
    listCar: "/list-car",
    myListings: "/my-listings",
    messages: "/messages",
    profile: "/profile",
  },
} as const;
