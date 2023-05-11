import { HeaderMegaMenu } from '@components/Header/Header';
import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <title>Next.js + Mantine</title>
      </head>
      <body>
        <RootStyleRegistry>
            <HeaderMegaMenu />
            {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
