// InstagramEmbed.js
import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    // Load Instagram script dynamically on the client side
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  const blockquoteStyle = {
    background: '#FFF',
    border: '0',
    borderRadius: '3px',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
    margin: '1px',
    maxWidth: '540px',
    minWidth: '326px',
    padding: '0',
    width: '99.375%',
    width: '-webkit-calc(100% - 2px)',
    width: 'calc(100% - 2px)',
  };

  const containerStyle = {
    display: 'flex', // Set display to flex to make children inline
    overflowX: 'auto', // Enable horizontal scrolling
    whiteSpace: 'nowrap',
    margin: 'auto',
    maxWidth: '100%',
  };

  const embedContainerStyle = {
    margin: '0 10px',
    verticalAlign: 'top',
  };

  return (
    <div style={containerStyle} className='autoflow-x-auto ' data-post-name="Official Univeristy of Dundee African Caribbean Society" >
      <div style={{ ...embedContainerStyle }} data-post-name="Official Univeristy of Dundee African Caribbean Society" >
      <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/Cxi5M3bMhbh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          data-instgrm-version="14"
          style={blockquoteStyle}
        >
          <a href="https://www.instagram.com/p/Cxi5M3bMhbh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" data-post-name="Official Univeristy of Dundee African Caribbean Society " >
          <img src="https://www.example.com/your-image1.jpg" alt="Official University of Dundee African Caribbean Society" style={{ width: '100%' }} loading="lazy" />
          </a>
          <p style={{ color: '#c9c8cd', fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '17px', margin: '8px 0 0' }}>
            <a href="https://www.instagram.com/p/Cxi5M3bMhbh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" style={{ color: '#c9c8cd', textDecoration: 'none' }} target="_blank">
              A post shared by ACS Dundee (@acsdundee)
            </a>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
                {
                "@context": "http://schema.org",
                "@type": "ImageObject",
                "contentUrl": "https://firebasestorage.googleapis.com/v0/b/afrobeatsdundee-22828.appspot.com/o/events%2Fd3230b27-04e2-4afc-9b31-3022667d98f0?alt=media&token=0a808df1-9976-4e4b-9fac-af54c378a6b9",
                "description": "Official University of Dundee African Caribbean Society - Scotland African Caribbean Society, Black lives matter, Dundee African Caribbean Society",
                }
            ` }}
            />
          </p>
        </blockquote>
      </div>

      {/* Instagram Embed 2 */}
      <div style={{ ...embedContainerStyle }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/CxvmHifsAIB/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={blockquoteStyle}
        >
          <a href="https://www.instagram.com/p/CxvmHifsAIB/?utm_source=ig_embed&utm_campaign=loading" target="_blank" data-post-name="Official Univeristy of Dundee African Caribbean Society" >
          <img src="https://www.example.com/your-image1.jpg" alt="Official University of Dundee African Caribbean Society" style={{ width: '100%' }} loading="lazy" />
          </a>
                    <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: `
                {
                "@context": "http://schema.org",
                "@type": "ImageObject",
                "contentUrl": "https://firebasestorage.googleapis.com/v0/b/afrobeatsdundee-22828.appspot.com/o/events%2Fd577fd5e-5de2-433c-a899-a562d4e50320?alt=media&token=ff8f1b6d-6bd8-4a71-8edb-749839aed0e1",
                "description": "Official University of Dundee African Caribbean Society - ACS Dundee Student Society",
                }
            ` }}
            />
          <p style={{ color: '#c9c8cd', fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '17px', margin: '8px 0 0' }}>
            <a href="https://www.instagram.com/p/CxvmHifsAIB/?utm_source=ig_embed&utm_campaign=loading" style={{ color: '#c9c8cd', textDecoration: 'none' }} target="_blank">
              A post shared by ACS Dundee (@acsdundee)
            </a>
          </p>
        </blockquote>

        
      </div>
      <div style={{ ...embedContainerStyle }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/C2snPa9Mao0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          data-instgrm-version="14"
          style={blockquoteStyle}
        >
          <a href="https://www.instagram.com/p/Cxi5M3bMhbh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" data-post-name="Official Univeristy of Dundee African Caribbean Society" >
          <img src="https://www.example.com/your-image1.jpg" alt="Official University of Dundee African Caribbean Society" style={{ width: '100%' }} loading="lazy" />
          </a>
          <p style={{ color: '#c9c8cd', fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '17px', margin: '8px 0 0' }}>
            <a href="https://www.instagram.com/p/Cxi5M3bMhbh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" style={{ color: '#c9c8cd', textDecoration: 'none' }} target="_blank">
              A post shared by ACS Dundee (@acsdundee)
            </a>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
                {
                "@context": "http://schema.org",
                "@type": "ImageObject",
                "contentUrl": "https://firebasestorage.googleapis.com/v0/b/afrobeatsdundee-22828.appspot.com/o/events%2Fe27aaaea-bda9-4d15-88f0-6d13c3679627?alt=media&token=7b5b9062-e08f-420b-967d-37f97b38c5e5",
                "description": "Official University of Dundee African Caribbean Society - Nigerian Independence Day, Kenya Independence Day, Black History Month, Ghana Independence Day",
                }
            ` }}
            />
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default InstagramEmbed;
