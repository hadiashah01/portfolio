import { Suspense } from "react";

import { buildMetadata } from "@/config/metadata";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Spinner } from "@/components/ui/Spinner";
import { LoginForm } from "@/components/forms/LoginForm";

export const metadata = buildMetadata({
  title: "Login",
  description: "Administrator login.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle as="h1" className="text-2xl">
          Admin Login
        </CardTitle>
        <CardDescription>
          Sign in to manage contact submissions and message queries.
        </CardDescription>
      </CardHeader>
      <Suspense
        fallback={
          <div className="flex justify-center p-8">
            <Spinner label="Loading login form" />
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </Card>
  );
}
