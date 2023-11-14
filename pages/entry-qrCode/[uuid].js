import React from 'react';
import { useRouter } from 'next/router';
import { FaSpinner } from 'react-icons/fa';
import QRCodeGenerator from '../../components/EntryQrCodeGenerator';
import '../../styles/globals.css';

const isValidUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

const entryqrcode = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const [isValid, setIsValidUUID] = React.useState(null);

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

  if (isValid === null) {
    // Loading state, show a loading spinner
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-primary" />
        <p className="text-sm font-thin text-primary">Just a moment, our QR Code detective is on the case!</p>
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center animate-zoomInOut">
          <h1 className="text-3xl font-bold mb-4 text-primary">AFROBEATS DUNDEE ENTRY QR CODE</h1>
          <div className="relative">
            <div className="absolute bg-white border border-gray-300 h-4 w-4 rotate-45 -top-2 -left-2" />
            <p className="text-xl mb-4">
              <span className="text-red-500">Oops!! Gotcha,</span> <br />
              <span className="text-yellow-500">You almost got me there, That was close.</span> <br />
              <span className="text-blue-500">Looks like the <span className="text-green-500"> QR Code url </span> is feeling a bit shy today.</span><br />
              <span className="text-green-500">Double-check it or consider</span>
            </p>
          </div>
          <button
            type="button"
            className="text-green-500 bg-black-500 border-2 border-primary hover:bg-primary-dark px-6 py-3 rounded-full transition duration-300 focus:outline-none"
            onClick={() => {
              window.location.href = 'https://afrobeatsdundee.co.uk/membership';
            }}
          >
            signing up for membership
          </button>
        </div>
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
