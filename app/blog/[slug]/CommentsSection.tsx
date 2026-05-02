"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

type CommentItem = {
  id: string;
  postSlug: string;
  parentId: string | null;
  authorName: string;
  content: string;
  status: "approved" | "pending" | "spam";
  moderationReason: string;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  slug: string;
};

type FormState = {
  authorName: string;
  authorEmail: string;
  content: string;
  website: string;
};

const emptyForm: FormState = {
  authorName: "",
  authorEmail: "",
  content: "",
  website: "",
};

const prettyDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleString();
};

export default function CommentsSection({ slug }: Props) {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);

  const loadComments = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/blog/comments?slug=${encodeURIComponent(slug)}`);
      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        comments?: CommentItem[];
      };
      if (!res.ok || data.ok === false) {
        throw new Error(data.message || "Failed to load comments.");
      }
      setComments(data.comments || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load comments.");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    void loadComments();
  }, [loadComments]);

  const byParent = useMemo(() => {
    const map = new Map<string | null, CommentItem[]>();
    comments.forEach((item) => {
      const key = item.parentId || null;
      const group = map.get(key) || [];
      group.push(item);
      map.set(key, group);
    });
    map.forEach((group) => {
      group.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    });
    return map;
  }, [comments]);

  const submitComment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPosting(true);
    setError("");
    setNotice("");
    try {
      const res = await fetch("/api/blog/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          parentId: replyTo,
          authorName: form.authorName,
          authorEmail: form.authorEmail,
          content: form.content,
          website: form.website,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        comment?: CommentItem | null;
      };
      if (!res.ok || data.ok === false) {
        throw new Error(data.message || "Failed to post comment.");
      }

      if (data.comment?.status === "approved") {
        setComments((prev) => [...prev, data.comment as CommentItem]);
        setNotice("Comment posted.");
      } else {
        setNotice(data.message || "Comment submitted for moderation.");
      }
      setReplyTo(null);
      setForm((prev) => ({ ...prev, content: "", website: "" }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to post comment.");
    } finally {
      setPosting(false);
    }
  };

  const renderThread = (parentId: string | null, depth = 0) => {
    const nodes = byParent.get(parentId) || [];
    return nodes.map((item) => (
      <div
        key={item.id}
        className="rounded-2xl border border-white/10 bg-white/5 p-4"
        style={{ marginLeft: `${Math.min(depth, 4) * 16}px` }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold text-white">{item.authorName}</p>
          <p className="text-xs text-slate-400">{prettyDate(item.createdAt)}</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-200">{item.content}</p>
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setReplyTo((current) => (current === item.id ? null : item.id))}
            className="text-xs font-semibold text-emerald-300 hover:text-emerald-200"
          >
            {replyTo === item.id ? "Cancel Reply" : "Reply"}
          </button>
        </div>
        <div className="mt-3 space-y-3">{renderThread(item.id, depth + 1)}</div>
      </div>
    ));
  };

  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7">
      <h2 className="text-2xl font-semibold text-white">Comments</h2>
      <p className="mt-1 text-sm text-slate-300">
        Join the discussion. Replies are threaded.
      </p>

      {error ? (
        <p className="mt-4 rounded-lg border border-red-300/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </p>
      ) : null}
      {notice ? (
        <p className="mt-4 rounded-lg border border-emerald-300/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
          {notice}
        </p>
      ) : null}

      <form onSubmit={submitComment} className="mt-5 space-y-3">
        {replyTo ? (
          <p className="text-xs text-slate-300">Replying to selected comment.</p>
        ) : null}
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            required
            value={form.authorName}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, authorName: event.target.value }))
            }
            placeholder="Your name"
            className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
          />
          <input
            type="email"
            required
            value={form.authorEmail}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, authorEmail: event.target.value }))
            }
            placeholder="your@email.com"
            className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
          />
        </div>
        <textarea
          required
          rows={4}
          value={form.content}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, content: event.target.value }))
          }
          placeholder="Write your comment..."
          className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400"
        />
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, website: event.target.value }))
          }
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={posting}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50"
        >
          {posting ? "Posting..." : replyTo ? "Post Reply" : "Post Comment"}
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {loading ? (
          <p className="text-sm text-slate-300">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-slate-300">No comments yet.</p>
        ) : (
          renderThread(null)
        )}
      </div>
    </section>
  );
}
