import { NextResponse } from "next/server";
import { getBlogCollections, isPublicPost, toPublicPost } from "@/lib/blog-db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const { posts } = await getBlogCollections();
    const post = await posts.findOne({ slug });

    if (!post || !isPublicPost(post)) {
      return NextResponse.json(
        { ok: false, message: "Post not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({ ok: true, post: toPublicPost(post) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load post by slug.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

