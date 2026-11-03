"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="text-error text-sm font-medium">Error</p>
      <h1 className="text-foreground text-display-sm mt-4 font-black tracking-[-0.06em]">
        Something went wrong
      </h1>
      <p className="text-muted-foreground mt-6 max-w-md text-lg leading-8">
        An unexpected error occurred. You can try again or return to the home
        page.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
          Return home
        </Link>
      </div>
    </Container>
  );
}
