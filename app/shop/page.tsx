import { Suspense } from "react";
export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopPage/>
    </Suspense>
  );
}
