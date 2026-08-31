"use client";

import { useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function CheckoutForm({ orderId }: { orderId: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setSubmitting(true);
    setError("");

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success?orderId=${orderId}`,
      },
    });

    if (confirmError) {
      setError(confirmError.message || "Payment failed. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-[18px]">
      <PaymentElement />

      {error && <p className="font-body text-[0.82rem] text-[#A03B3B]">{error}</p>}

      <button
        type="submit"
        disabled={!stripe || submitting}
        className="h-[48px] w-full rounded-[2px] bg-[#4A1521] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13] disabled:opacity-60"
      >
        {submitting ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}