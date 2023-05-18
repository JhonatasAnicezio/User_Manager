import { AuthProvider } from '@/context/AuthContext';
import './globals.css'

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'User Manager',
  description: 'Better organize your users',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en" className={inter.className}>
        <body className="bg-gradient-to-b from-blue-900 to-blue-400">
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
