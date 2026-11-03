"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type MessageDetailFormProps = {
  messageId: string;
  initialStatus: "unread" | "read" | "responded" | "archived";
};

export function MessageDetailForm({ messageId, initialStatus }: MessageDetailFormProps) {
  const [status, setStatus] = useState(initialStatus);
  const [updating, setUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleStatusChange = async (newStatus: string) => {
    setUpdating(true);
    setErrorMessage(null);
    try {
      const response = await fetch(`/api/contact/${messageId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setStatus(newStatus as "unread" | "read" | "responded" | "archived");
      router.refresh();
    } catch (err) {
      console.error(err);
      setErrorMessage("Error updating status. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (s: string) => {
    switch (s) {
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
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Query Status:
      </span>
      <div className="flex items-center gap-3">
        {updating ? (
          <span className="text-xs text-muted-foreground animate-pulse">Updating...</span>
        ) : (
          <select
            value={status}
            aria-label="Query status"
            onChange={(e) => handleStatusChange(e.target.value)}
            className={`h-9 rounded-md border text-sm font-semibold px-3 py-1 focus-visible:outline-none cursor-pointer ${getStatusColor(status)}`}
          >
            <option value="unread" className="text-foreground bg-surface">Pending</option>
            <option value="read" className="text-foreground bg-surface">Done</option>
            <option value="responded" className="text-foreground bg-surface">Completed</option>
            <option value="archived" className="text-foreground bg-surface">Resolved</option>
          </select>
        )}
      </div>
      {errorMessage && (
        <p role="alert" className="text-xs text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
