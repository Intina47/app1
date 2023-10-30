import '../styles/globals.css';
//eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);
export default RootLayout;
