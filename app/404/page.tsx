import Link from "next/link";

import NotFoundTitle from "@/app/404/title";
import Head from "@/app/components/head";

export default function NotFound() {
  return (
    <main className="page">
      <Head title="404!!" description="404 - page not found" />

      <NotFoundTitle />
      <section className="subtitle">page not found</section>
      <nav className="navigation">
        <Link href="/">home</Link>
      </nav>
    </main>
  );
}
