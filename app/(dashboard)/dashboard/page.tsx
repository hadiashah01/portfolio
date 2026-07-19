import type { ContactMessage } from "@prisma/client";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

export const metadata = {
  title: "Dashboard Overview",
  description: "Admin dashboard overview.",
};

export default async function DashboardPage() {
  await requireAdmin();

  const total = await prisma.contactMessage.count();
  const pending = await prisma.contactMessage.count({
    where: { status: "unread" },
  });
  const resolvedCompleted = await prisma.contactMessage.count({
    where: {
      status: {
        in: ["read", "responded", "archived"],
      },
    },
  });

  const recentMessages: ContactMessage[] = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "unread":
        return "Pending";
      case "read":
        return "Done";
      case "responded":
        return "Completed";
      case "archived":
        return "Resolved";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-warning/10 text-warning border-warning/20";
      case "read":
        return "bg-success/10 text-success border-success/20";
      case "responded":
        return "bg-info/10 text-info border-info/20";
      case "archived":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Overview</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <p className="text-sm font-medium text-muted-foreground">Total Contacts</p>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <p className="text-sm font-medium text-muted-foreground">Pending Queries</p>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-600">{pending}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <p className="text-sm font-medium text-muted-foreground">Resolved / Completed Queries</p>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-emerald-600">{resolvedCompleted}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Recent Contacts</CardTitle>
            <Link
              href="/dashboard/messages"
              className="text-xs text-primary hover:underline font-medium"
            >
              View all queries &rarr;
            </Link>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          {recentMessages.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No contact messages received yet.
            </p>
          ) : (
            <div className="divide-y divide-border">
              {recentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="flex flex-col py-3.5 sm:flex-row sm:items-center sm:justify-between first:pt-0 last:pb-0 gap-2"
                >
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-foreground">{msg.subject}</p>
                    <p className="text-xs text-muted-foreground">
                      From {msg.name} ({msg.email}) • {formatDate(msg.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-pill px-2.5 py-0.5 text-xs font-semibold border ${getStatusColor(
                        msg.status
                      )}`}
                    >
                      {getStatusLabel(msg.status)}
                    </span>
                    <Link
                      href={`/dashboard/messages/${msg.id}`}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
