import ApiDashboard from "@/components/ApiDashboard";
import RequestApiKey from "@/components/RequestApiKey";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const page = async () => {
  const user = await getServerSession(authOptions);
  console.log("user", user);

  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? (
        //  @ts-expect-error Server component
        <ApiDashboard />
      ) : (
        <RequestApiKey />
      )}
    </div>
  );
};

export default page;
