import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { POSTS } from '@/data/posts';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-linear-to-r from-primary to-slate-400 bg-clip-text text-transparent py-2 mb-12">
        JavaScript Journey
      </h1>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-label="Liste des articles"
      >
        {POSTS.map((post) => (
          <article key={post.id}>
            <Card className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="tracking-tight">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </div>

                {/* Le numéro entouré à droite */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-sm font-bold text-primary shrink-0">
                  {post.id}
                </div>
              </CardHeader>
              <CardContent className="grow">
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.id}`}>Lire plus</Link>
                </Button>
              </CardFooter>
            </Card>
          </article>
        ))}
      </section>
    </main>
  );
}
