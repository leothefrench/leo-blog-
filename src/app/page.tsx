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
      {/* Correction Titre : text-3xl sur mobile, text-5xl sur PC */}
      <h1 className="text-3xl md:text-5xl font-black tracking-tighter bg-linear-to-r from-primary to-slate-400 bg-clip-text text-transparent py-2 mb-12 text-center md:text-left">
        JavaScript Journey
      </h1>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-label="Liste des articles"
      >
        {POSTS.map((post) => (
          <article key={post.id} className="h-full">
            <Card className="flex flex-col h-full border-slate-800 bg-card">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="space-y-1 pr-2">
                  {/* Correction : text-lg sur mobile pour éviter que ça prenne trop de place */}
                  <CardTitle className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    {post.date}
                  </CardDescription>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary shrink-0">
                  {post.id}
                </div>
              </CardHeader>

              <CardContent className="grow">
                {/* Correction : On utilise text-foreground pour être sûr que ce soit blanc/clair en dark mode */}
                {/* <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p> */}
                <p className="text-sm text-[#FF0000]">
                  {' '}
                  {/* On force le ROUGE vif */}
                  {post.description}
                </p>
              </CardContent>

              <CardFooter className="flex justify-end pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
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
