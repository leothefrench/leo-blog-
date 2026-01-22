import { Button } from "@/components/ui/button";
import { POSTS } from "@/data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = POSTS.find((p) => p.id === id)
  if (!post) {
    notFound();
  }

return (
  <main className="container mx-auto py-20 px-4 max-w-2xl">
    {' '}
    {/* max-w-2xl évite les lignes trop longues */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
      {post.title}
    </h1>
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
      <time>{post.date}</time>
      <span className="opacity-50">•</span>
      <span>5 min de lecture</span>
    </div>
    <div className="space-y-6 text-base leading-7 text-slate-300/90 antialiased">
      {post.content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    <div className="mt-16 pt-8 border-t">
      <Button variant="ghost" asChild>
        <Link href="/">← Retour aux articles</Link>
      </Button>
    </div>
  </main>
);
}