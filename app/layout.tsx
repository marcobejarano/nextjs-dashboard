import '@/app/ui/global.css';

const RootLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="eng">
      <body>{ children }</body>
    </html>
  );
};

export default RootLayout;
