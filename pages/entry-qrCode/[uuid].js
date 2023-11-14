//path: /api/entry-qrCode/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import QRCodeGenerator from '../../components/EntryQrCodeGenerator';
import '../../styles/globals.css';

const isValidUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(uuid)) {
    console.log('Invalid UUID');
  } else {
    console.log('Valid UUID');
  }
  return uuidRegex.test(uuid);
};

const entryqrcode = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const [isValid, setIsValidUUID] = React.useState(false);

  React.useEffect(() => {
    const checkUUIDValidity = async () => {
      if (isValidUUID(uuid)) {
        const res = await fetch(`/api/checkUUIDValidity?uuid=${uuid}`);
        const data = await res.json();
        setIsValidUUID(data.isValid);
      }
    };
    checkUUIDValidity();
  }, [uuid]);

  if (!isValid) {
    return (
      <div>
        <h1>AFROBEATS DUNDEE ENTRY QR CODE</h1>
        <p>!! QR Code not found</p>
      </div>
    );
  }

return (
  <div>
    <QRCodeGenerator uuid={uuid} />
  </div>
  );
};

export default entryqrcode;
