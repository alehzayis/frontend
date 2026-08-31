"use client";

import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/shop/Breadcrumb";
import CheckoutForm from "@/components/CheckoutForm";
import { getStripe } from "@/lib/stripe";
import { useCartSubtotal } from "@/lib/store/cartStore";
export default function CheckoutPage() {
  const subtotal = useCartSubtotal();
  const [clientSecret, setClientSecret] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .post("/api/orders/checkout")
      .then((res) => {
        setClientSecret(res.data.data.clientSecret);
        setOrderId(res.data.data.orderId);
      })
      .catch((err) => {
        const message = err?.response?.data?.message || "Unable to start checkout";
        setError(message);
        toast.error(message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBF7EF]">
        <div className="mx-auto max-w-[560px] px-6 py-[40px] sm:px-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]}
          />

          <h1 className="mt-[10px] font-display text-[2rem] text-[#3A101A]">Checkout</h1>

          <div className="mt-[10px] font-body text-[0.9rem] text-[#66575A]">
            Total: {new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(subtotal)}
          </div>

          <div className="mt-[24px] rounded-[14px] border border-[#4A1521]/10 bg-white p-[22px]">
            {error ? (
              <p className="font-body text-[0.88rem] text-[#A03B3B]">{error}</p>
            ) : !clientSecret ? (
              <p className="font-body text-[0.88rem] text-[#8B7B7E]">Preparing checkout...</p>
            ) : (
              <Elements stripe={getStripe()} options={{ clientSecret }}>
                <CheckoutForm orderId={orderId} />
              </Elements>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}