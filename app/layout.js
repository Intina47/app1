// layout.js
import '../styles/globals.css';
//eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      {/* SEO for this night club website */}
      <title>Afrobeats Dundee Basement Night Club | Private Events</title>
      <meta name="description" content="Welcome to Afrobeats Dundee Basement Night Club in Dundee, Scotland. We offer the best nightlife experience with top DJs and live music." />
      <meta name="author" content="Afro beats Dundee" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph for this night club website */}
      <meta property="og:title" content="Afrobeats Dundee Basement Night Club" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://afrobeatsdundee.co.uk" />
      <meta property="og:description" content="Welcome to Afrobeats Dundee Basement Night Club in Dundee, Scotland. We offer the best nightlife experience with top DJs and live music." />
      <meta property="og:site_name" content="Afrobeats Dundee Basement Night Club" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://afrobeatsdundee.co.uk/" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Afrobeats Dundee Basement Night Club" />
      <meta property="og:description" content="Welcome to Afrobeats Dundee Basement Night Club in Dundee, Scotland. We offer the best nightlife experience with top DJs and live music." />
      <meta property="og:url" content="https://afrobeatsdundee.co.uk/" />
      <meta property="og:site_name" content="Afrobeats Dundee Basement Night Club" />
      <meta name="google-site-verification" content="RnKKePD0sQjxnouuLaqu_nNvyo5K7JZt6U3btvdqi2Y" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Afrobeats Dundee Basement Night Club',
        alternateName: 'Afrobeats Dundee',
        url: 'https://afrobeatsdundee.co.uk',
        logo: 'https://afrobeatsdundee.co.uk/afrobeats-logo2.png',
        sameAs: [
          'https://www.facebook.com/afrobreatsdundee',
          'https://www.instagram.com/afrobeatsdundee/',
          'https://www.snapchat.com/add/afrobeatsdundee',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+441 382 782 663',
          contactType: 'customer service',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3 Session Street',
          addressLocality: 'Dundee',
          postalCode: 'DD15',
          addressCountry: 'UK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 56.460455599999996,
          longitude: -2.9801999,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Tuesday',
            'Friday',
            'Saturday',
          ],
          opens: '20:00',
          closes: '02:30',
        },
      }) }}
      />
    </head>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);
export default RootLayout;
