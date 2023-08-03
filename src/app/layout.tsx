import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import { Nav } from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Pokédex',
  description:
    'Welcome to My Pokédex, the ultimate destination for Pokémon Trainers and enthusiasts! Embark on an exciting journey through the captivating world of Pokémon, where you can explore a comprehensive database of Pokémon species, uncover their unique abilities and evolution paths.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="flex min-h-screen items-center flex-col max-w-5xl mx-auto px-16">
          {children}
        </div>
      </body>
    </html>
  );
}
