import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="text-primary text-sm font-medium">404</p>
      <h1 className="text-foreground text-display-sm mt-4 font-black tracking-[-0.06em]">
        Page not found
      </h1>
      <p className="text-muted-foreground mt-6 max-w-md text-lg leading-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "primary" }), "mt-8")}
      >
        <span className="relative z-[1]">Return home</span>
      </Link>
    </Container>
  );
}
