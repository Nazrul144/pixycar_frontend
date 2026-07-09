"use client";

import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "../services/auth.service";
import { useAuthStore } from "@/stores/auth.store";
import type { VerifyOtpRequest, VerifyOtpResponse } from "../types/auth.types";

export function useVerifyOtp() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation<VerifyOtpResponse, Error, VerifyOtpRequest>({
    mutationFn: (data) => verifyOtp(data),
    onSuccess: (data) => {
      if (data.tokens && data.user) {
        setAuth(data.user, data.tokens.access, data.tokens.refresh);
      }
    },
  });
}
