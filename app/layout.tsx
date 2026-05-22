import './globals.css';
import Link from 'next/link';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><header className="bg-brand-navy text-white p-4 flex gap-4 text-sm"><Link href="/">Faltantes Colombia</Link><Link href="/album">Mi álbum</Link><Link href="/matches">Matches</Link><Link href="/admin">Admin</Link></header><main className="max-w-5xl mx-auto p-4">{children}</main></body></html>;
}
