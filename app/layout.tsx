import { ReactNode } from 'react';
import '@/app/ui/global.css';
import { inter } from './ui/fonts';

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
