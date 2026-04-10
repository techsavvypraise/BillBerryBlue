import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';  
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
 
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Billberry Blue - Premium Interior Design and Furniture',
  description: 'Curated interior and furniture solutions engineered to elevate how you live and work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body> 
    </html>
  );
}