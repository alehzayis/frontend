import ShopPageContent from "@/components/shop/ShopPageContent";
import { Suspense } from "react";


export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
     <ShopPageContent/>
    </Suspense>
  );
}