import { Suspense } from "react";
import { AdminApp } from "@/app/admin/admin-app";
import { adminPasswordConfigured, getAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getAdminSession();

  return (
    <Suspense>
      <AdminApp signedIn={Boolean(session)} passwordConfigured={adminPasswordConfigured()} />
    </Suspense>
  );
}
