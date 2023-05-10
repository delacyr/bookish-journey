import { HeaderMegaMenu } from '@components/Layout/Header';
import RootStyleRegistry from './emotion';
// These styles apply to every route in the application
import './global.css';

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
