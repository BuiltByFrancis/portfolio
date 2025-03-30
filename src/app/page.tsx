/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center lg:flex-row">
      <div className="flex w-full max-w-[1280px] flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="h-auto w-full shrink-0 p-6 lg:sticky lg:top-0 lg:h-screen lg:w-80">
          <h1 className="text-2xl font-bold text-white">Francis Rietveld</h1>
          <p className="text-muted-foreground mt-1 text-sm">Full Stack Engineer</p>
          <p className="text-muted-foreground mt-4 text-sm">
            I build secure, gas-optimized smart contracts and full-stack web3 applications that push
            the boundaries of what&apos;s been done before.
          </p>

          <nav className="text-muted-foreground mt-6 space-y-2 text-sm">
            <a href="#" className="block hover:text-teal-400">
              About
            </a>
            <a href="#" className="block hover:text-teal-400">
              Experience
            </a>
            <a href="#" className="block hover:text-teal-400">
              Projects
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6 p-6">
          <section>
            <h2 className="text-xl font-semibold text-white">About</h2>
            <Separator className="my-4" />
            <p className="text-muted-foreground">
              placeholder placeholder placeholder placeholder placeholder placeholder placeholder
              placeholder placeholder placeholder placeholder placeholder placeholder
            </p>
          </section>

          <Card>
            <CardContent className="text-muted-foreground pt-6">
              <p>placeholder placeholder placeholder placeholder placeholder placeholder</p>
              <div className="mt-4 h-[1000px]">Scroll filler 👇</div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
