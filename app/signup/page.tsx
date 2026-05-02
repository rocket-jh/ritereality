"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type SetupStatus = {
  adminExists: boolean;
  managerCount: number;
};

type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager";
};

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [setup, setSetup] = useState<SetupStatus | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      const [setupRes, meRes] = await Promise.all([
        fetch("/api/auth/setup-status", { cache: "no-store" }),
        fetch("/api/auth/me", { cache: "no-store" }),
      ]);

      const setupData = (await setupRes.json()) as SetupStatus;
      const meData = (await meRes.json()) as { user: SessionUser | null };
      setSetup(setupData);

      if (meData.user) {
        router.replace("/cms");
        return;
      }

      setLoading(false);
    };

    void initialize();
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    const response = await fetch("/api/auth/bootstrap-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = (await response.json()) as { error?: string };
    if (!response.ok) {
      setMessage(data.error ?? "Signup failed.");
      setSubmitting(false);
      return;
    }

    router.replace("/cms");
  }

  if (loading) {
    return (
      <main className="mx-auto w-full max-w-md px-4 py-10">
        <p className="text-sm text-zinc-600">Loading signup...</p>
      </main>
    );
  }

  if (setup?.adminExists) {
    return (
      <main className="mx-auto w-full max-w-md px-4 py-10">
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-zinc-900">Signup disabled</h1>
          <p className="mt-2 text-sm text-zinc-600">
            An admin account already exists. Please login to continue.
          </p>
          <Link
            href="/login"
            className="mt-5 inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Go to Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-md px-4 py-10">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">Create Admin Account</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Use this once to create the first admin account for CMS.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
          <input
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Admin Name"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="Admin Email"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            required
            type="password"
            minLength={8}
            value={form.password}
            onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
            placeholder="Password (min 8)"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            disabled={submitting}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Creating..." : "Create Admin"}
          </button>
        </form>

        {message ? <p className="mt-3 text-sm text-zinc-700">{message}</p> : null}

        <p className="mt-4 text-sm text-zinc-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-zinc-900 underline">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
