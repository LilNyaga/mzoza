import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-display font-bold mb-4">404 — Page Not Found</h1>
        <p className="text-zinc-500 mb-8">The page you requested doesn't exist or has moved.</p>
        <Link to="/" className="inline-block bg-zinc-950 text-white px-6 py-3 rounded-none font-bold uppercase tracking-widest">Return Home</Link>
      </div>
    </div>
  );
}
