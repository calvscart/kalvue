import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kalrex</h1>
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-gray-300 p-4 text-center">
        &copy; {new Date().getFullYear()} Kalrex. All rights reserved.
      </footer>
    </div>
  );
}