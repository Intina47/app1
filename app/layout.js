// layout.js
import '../styles/globals.css';
//eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      {/* SEO for this night club website */}
      <title>Afrobeats Dundee Basement Night Club</title>
      <meta name="description" content="Welcome to Afrobeats Dundee Basement Night Club in Dundee, Scotland. We offer the best nightlife experience with top DJs and live music." />
      <meta name="keywords" content="
      afrobeatsdundee.co.uk, afrobeatsdundee.com, Afrobeats, Dundee, Night Club, Nightlife, DJ, Music, Live Music, Night Club Dundee, Night Club Scotland, Night Club UK, Night Club Europe, Night Club World,
       Night life,Night life Dundee, Night life Scotland, Night life UK, visit scotland, visit dundee, visit edinbrugh, visit glasgow, most hidden places in dundee, underground"
      />
      <meta name="author" content="Afro beats Dundee" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph for this night club website */}
      <meta property="og:title" content="Afrobeats Dundee Basement Night Club" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://afrobeatsdundee.co.uk" />
      <meta property="og:description" content="Welcome to Afrobeats Dundee Basement Night Club in Dundee, Scotland. We offer the best nightlife experience with top DJs and live music." />
      <meta property="og:site_name" content="Afrobeats Dundee Basement Night Club" />

      {/* Twitter for this night club website */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Afrobeats Dundee Basement Night Club" />
      <meta name="twitter:description" content="Welcome to Afrobeats Dundee Basement Night Club in Dundee, Scotland. We offer the best nightlife experience with top DJs and live music." />
      <meta name="twitter:site" content="@afrobeatsdundee" />
      <meta name="twitter:creator" content="@afrobeatsdundee" />

      {/* Favicon for this night club website */}
      <link rel="icon" href="public/afrobeats-logo2.png" />
      <link rel="apple-touch-icon" href="public/afrobeats-logo2.png" />
      {/* Fonts for this night club website */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />

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
