import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="content-stack">
      <p className="eyebrow">404</p>
      <h1>That page does not exist.</h1>
      <p>
        <Link href="/">Return home</Link>
      </p>
    </section>
  );
}
