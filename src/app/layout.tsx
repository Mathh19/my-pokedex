import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Nav } from '@/components/Nav';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'My Pokédex',
  description:
    'Welcome to My pokédex, a site where you can search for information about pokémons, their evolutions, which type each pokémon is related to and the status of their attributes and skills'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className="flex min-h-screen items-center flex-col max-w-7xl mx-auto px-4">
          <Nav />
          <main className="w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
