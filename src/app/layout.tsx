'use client'
import { AuthProvider } from '@/context/AuthContext';
import './globals.css'

import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { PrivateRoute } from '@/components/PrivateRoute';
import { checkIsPublicRoute } from '@/utils/checkRoutes';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname();

  const isPublicPage = checkIsPublicRoute(pathName);

  return (
    <AuthProvider>
      <html lang="en" className={inter.className}>
        <body className="bg-gradient-to-b from-blue-900 to-blue-400">
          {isPublicPage && children}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        </body>
      </html>
    </AuthProvider>
  );
}
