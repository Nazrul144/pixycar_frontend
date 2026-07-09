"use client";

import { useMutation } from "@tanstack/react-query";
import { registerSeller, registerDealer } from "../services/auth.service";
import type { SellerRegisterRequest, DealerRegisterRequest } from "../types/auth.types";

export function useRegisterSeller() {
  return useMutation({
    mutationFn: (data: SellerRegisterRequest) => registerSeller(data),
  });
}

export function useRegisterDealer() {
  return useMutation({
    mutationFn: (data: DealerRegisterRequest) => registerDealer(data),
  });
}

