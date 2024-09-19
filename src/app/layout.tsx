import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Nextjs POC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
