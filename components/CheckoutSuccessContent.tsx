"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import api from "@/lib/api";

type Status = "checking" | "paid" | "pending" | "failed";

export default function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const redirectStatus = searchParams.get("redirect_status");
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    if (!orderId) {
      setStatus("failed");
      return;
    }

    if (redirectStatus && redirectStatus !== "succeeded" && redirectStatus !== "processing") {
      setStatus("failed");
      return;
    }

    let cancelled = false;

    api
      .post(`/api/orders/${orderId}/confirm`)
      .then((res) => {
        if (cancelled) return;
        const orderStatus = res.data.data.status;
        if (orderStatus === "paid") setStatus("paid");
        else if (orderStatus === "failed" || orderStatus === "cancelled") setStatus("failed");
        else setStatus("pending");
      })
      .catch(() => {
        if (!cancelled) setStatus("pending");
      });

    return () => {
      cancelled = true;
    };
  }, [orderId, redirectStatus]);

  return (
    <div className="mx-auto max-w-[560px] px-6 py-[80px] text-center sm:px-10">
      {status === "checking" && (
        <p className="font-body text-[0.9rem] text-[#8B7B7E]">Confirming your payment...</p>
      )}

      {status === "paid" && (
        <>
          <h1 className="font-display text-[1.9rem] text-[#3A101A]">Thank you for your order</h1>
          <p className="mt-[10px] font-body text-[0.92rem] text-[#66575A]">
            Your payment went through and your order is confirmed.
          </p>
        </>
      )}

      {status === "pending" && (
        <>
          <h1 className="font-display text-[1.9rem] text-[#3A101A]">Payment received</h1>
          <p className="mt-[10px] font-body text-[0.92rem] text-[#66575A]">
            We&apos;re still confirming this with Stripe — it can take a minute. Refresh this page shortly if it
            doesn&apos;t update.
          </p>
        </>
      )}

      {status === "failed" && (
        <>
          <h1 className="font-display text-[1.9rem] text-[#3A101A]">Payment didn&apos;t go through</h1>
          <p className="mt-[10px] font-body text-[0.92rem] text-[#66575A]">Please try again.</p>
        </>
      )}

      <Link
        href="/shop"
        className="mt-[24px] inline-block rounded-[2px] bg-[#4A1521] px-[26px] py-[13px] font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#FFF9EF] hover:bg-[#310B13]"
      >
        Continue Shopping
      </Link>
    </div>
  );
}