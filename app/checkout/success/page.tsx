import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutSuccessContent from "@/app/checkout/success/page";

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBF7EF]">
        <Suspense fallback={<div className="py-[80px] text-center">Loading...</div>}>
          <CheckoutSuccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}