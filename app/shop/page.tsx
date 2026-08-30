import { Suspense } from "react";
import ShopPageContent from "@/components/shop/shoppage";

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopPageContent />
    </Suspense>
  );
}