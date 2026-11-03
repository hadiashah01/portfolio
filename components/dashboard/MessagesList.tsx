"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "responded" | "archived";
  createdAt: Date;
};

type MessagesListProps = {
  initialMessages: ContactMessage[];
};

export function MessagesList({ initialMessages }: MessagesListProps) {
  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    setErrorMessage(null);
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const updated = await response.json();
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, status: updated.status } : msg))
      );
    } catch (err) {
      console.error(err);
      setErrorMessage("Error updating status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "unread" && msg.status === "unread") ||
      (statusFilter === "read" && msg.status === "read") ||
      (statusFilter === "responded" && msg.status === "responded") ||
      (statusFilter === "archived" && msg.status === "archived");

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      msg.name.toLowerCase().includes(query) ||
      msg.email.toLowerCase().includes(query) ||
      msg.subject.toLowerCase().includes(query) ||
      msg.message.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-4">
      {errorMessage && (
        <div
          role="alert"
          className="rounded-md bg-error/10 border border-error/20 p-3 text-sm text-error"
        >
          {errorMessage}
        </div>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-surface p-4 rounded-lg border border-border shadow-sm">
        <input
          type="text"
          placeholder="Search by name, email, query..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex h-10 w-full max-w-sm rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        />

        <div className="flex items-center gap-2">
          <label htmlFor="filter" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Status:
          </label>
          <select
            id="filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-10 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer font-medium"
          >
            <option value="all">All Submissions</option>
            <option value="unread">Pending</option>
            <option value="read">Done</option>
            <option value="responded">Completed</option>
            <option value="archived">Resolved</option>
          </select>
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-border shadow-sm overflow-x-auto">
        {filteredMessages.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center">
            No queries found matching the criteria.
          </p>
        ) : (
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="p-4">Sender</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredMessages.map((msg) => (
                <tr key={msg.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4 max-w-[200px] truncate">
                    <p className="font-semibold text-sm text-foreground leading-none">{msg.name}</p>
                    <a href={`mailto:${msg.email}`} className="text-xs text-muted-foreground hover:underline mt-1 block">
                      {msg.email}
                    </a>
                  </td>
                  <td className="p-4 max-w-[300px] truncate">
                    <p className="text-sm text-foreground font-medium">{msg.subject}</p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{msg.message}</p>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground whitespace-nowrap">
                    {formatDate(msg.createdAt)}
                  </td>
                  <td className="p-4">
                    {updatingId === msg.id ? (
                      <span className="text-xs text-muted-foreground animate-pulse">Updating...</span>
                    ) : (
                      <select
                        value={msg.status}
                        onChange={(e) => handleStatusChange(msg.id, e.target.value)}
                        className={`h-8 rounded-md border text-xs font-semibold px-2 py-0.5 focus-visible:outline-none cursor-pointer ${getStatusColor(msg.status)}`}
                      >
                        <option value="unread" className="text-foreground bg-surface">Pending</option>
                        <option value="read" className="text-foreground bg-surface">Done</option>
                        <option value="responded" className="text-foreground bg-surface">Completed</option>
                        <option value="archived" className="text-foreground bg-surface">Resolved</option>
                      </select>
                    )}
                  </td>
                  <td className="p-4 text-right whitespace-nowrap">
                    <Link
                      href={`/dashboard/messages/${msg.id}`}
                      className="inline-flex items-center justify-center rounded-md text-xs font-semibold h-8 px-3 border border-border hover:bg-muted transition-colors text-foreground"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
