'use client'
import { AuthProvider } from '@/context/AuthContext';
import './globals.css'

import { Inter } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import { PrivateRoute } from '@/components/PrivateRoute';
import { checkIsPublicRoute } from '@/utils/checkRoutes';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import { getUser } from '@/services/UserServices/userApi';
import { User } from '../interfaces/IAuthContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname();

  const {'nextAuth.token': token} = parseCookies();

  const { push } = useRouter();

  const isPublicPage = checkIsPublicRoute(pathName);

  useEffect(() => {
    if(token) {
      getUser(token).then(({role}: User) => {
        switch (role) {
          case 'admin':
            push('/admin');
            break
          case 'user' || 'moderator':
            push('/user');
            break
          default:
            push('/');
          }
      });
    }
  }, []);

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
