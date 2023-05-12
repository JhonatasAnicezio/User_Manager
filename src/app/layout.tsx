import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
