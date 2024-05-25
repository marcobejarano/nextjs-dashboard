import { ReactNode } from 'react';
import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

const RootLayout = ({
  children
}: {
  children: ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={ `${ inter.className } antialiased` }>
        { children }
      </body>
    </html>
  );
};

export default RootLayout;
