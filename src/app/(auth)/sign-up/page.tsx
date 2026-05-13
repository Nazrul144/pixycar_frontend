"use client";

import { useCallback, useRef, useState } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { TermsModal } from "@/components/auth/terms-modal";
import { RoleSelection, type SignUpRole } from "@/components/auth/sign-up/role-selection";
import { SellerForm } from "@/components/auth/sign-up/seller-form";
import { DealerForm } from "@/components/auth/sign-up/dealer-form";
import { OtpVerification } from "@/components/auth/sign-up/otp-verification";
import { SuccessDealer } from "@/components/auth/sign-up/success-dealer";
import { SuccessSeller } from "@/components/auth/sign-up/success-seller";

type Step = 1 | 2 | 3 | 4;

export default function SignUpPage() {
  const [step, setStep] = useState<Step>(1);
  const [role, setRole] = useState<SignUpRole | null>(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const setAgreedRef = useRef<(value: boolean) => void>(() => {});
  /** When set, Confirm on the legal modal runs this (e.g. advance to OTP after Sign Up). */
  const pendingAdvanceRef = useRef<(() => void) | null>(null);

  const registerAgreementSetter = useCallback(
    (setter: (value: boolean) => void) => {
      setAgreedRef.current = setter;
    },
    []
  );

  const beginSignUpTermsGate = useCallback(() => {
    pendingAdvanceRef.current = () => setStep(3);
    setShowPrivacyModal(false);
    setShowTermsModal(true);
  }, []);

  const closeLegalModals = () => {
    setShowTermsModal(false);
    setShowPrivacyModal(false);
  };

  const handleLegalCancel = () => {
    pendingAdvanceRef.current = null;
    setAgreedRef.current(false);
    closeLegalModals();
  };

  const handleLegalConfirm = () => {
    setAgreedRef.current(true);
    const run = pendingAdvanceRef.current;
    pendingAdvanceRef.current = null;
    closeLegalModals();
    run?.();
  };

  const legalModalOpen = showTermsModal || showPrivacyModal;
  const legalModalTitle = showPrivacyModal ? "Privacy Policy" : "Terms of Use";

  return (
    <AuthLayout>
      <TermsModal
        open={legalModalOpen}
        title={legalModalTitle}
        onCancel={handleLegalCancel}
        onConfirm={handleLegalConfirm}
      />

      {step === 1 && (
        <RoleSelection
          role={role}
          setRole={setRole}
          onContinue={() => {
            if (role) setStep(2);
          }}
        />
      )}

      {step === 2 && role === "seller" && (
        <SellerForm
          registerAgreementSetter={registerAgreementSetter}
          onOpenTerms={() => {
            pendingAdvanceRef.current = null;
            setShowPrivacyModal(false);
            setShowTermsModal(true);
          }}
          onOpenPrivacy={() => {
            pendingAdvanceRef.current = null;
            setShowTermsModal(false);
            setShowPrivacyModal(true);
          }}
          onRequestTermsBeforeComplete={beginSignUpTermsGate}
        />
      )}

      {step === 2 && role === "dealer" && (
        <DealerForm
          registerAgreementSetter={registerAgreementSetter}
          onOpenTerms={() => {
            pendingAdvanceRef.current = null;
            setShowPrivacyModal(false);
            setShowTermsModal(true);
          }}
          onOpenPrivacy={() => {
            pendingAdvanceRef.current = null;
            setShowTermsModal(false);
            setShowPrivacyModal(true);
          }}
          onRequestTermsBeforeComplete={beginSignUpTermsGate}
        />
      )}

      {step === 3 && (
        <OtpVerification onContinue={() => setStep(4)} />
      )}

      {step === 4 && role === "dealer" && <SuccessDealer />}
      {step === 4 && role === "seller" && <SuccessSeller />}
    </AuthLayout>
  );
}
