"use client";

import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const inputId = useId();
  const msgId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're in. Check your inbox to confirm.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="text-[#FFC703] text-sm font-light leading-relaxed"
      >
        {message}
      </p>
    );
  }

  const isLoading = status === "loading";

  return (
    <div>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={onSubmit} noValidate>
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          aria-invalid={status === "error"}
          aria-describedby={msgId}
          className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-6 py-3.5 text-sm text-white placeholder:text-[#444] focus:outline-none focus:border-[#FFC703] transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#FFC703] text-black rounded-full px-7 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Joining…" : "Subscribe"}
        </button>
      </form>
      <p
        id={msgId}
        role={status === "error" ? "alert" : undefined}
        className={`text-[10px] uppercase tracking-widest mt-3 ${
          status === "error" ? "text-red-400" : "text-[#2e2e2e]"
        }`}
      >
        {status === "error" ? message : "No spam. Unsubscribe anytime."}
      </p>
    </div>
  );
}
