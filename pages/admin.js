import React from 'react';
import axios from 'axios';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadPromotion from '../components/admin/uploadPromotions.tsx';
import '../styles/globals.css';

const AdminPage = () => {
  const [code, setCode] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

  const generateCode = async () => {
    try {
      const res = await axios.get('/api/sendAccessCode');
      if (res.status === 200) {
        toast.success('Access code sent to your email');
        setCode(res.data.code);
      } else {
        toast.error('Error generating code');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/verifyCode', { code });
    if (res.data.accessGranted){
      setAccessGranted(true);
    } else {
      toast.error('Invalid access code');
      setAccessGranted(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {!accessGranted ? (
        <>
          <div className="w-full bg-black text-white p-2 fixed top-0 left-0 z-50">
            <button
              type="button"
              onClick={generateCode}
              className="text-white p-2 rounded-md hover:text-green-400"
            >
              Generate access code
            </button>
          </div>
          <div className="flex items-center justify-center h-screen">
            <form onSubmit={verifyCode} className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Enter access code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="border-2 border-black p-2"
              />
              <button type="submit" className="bg-black text-white p-2 rounded-md">
                Verify
              </button>
            </form>
          </div>
        </>
      ) : (
        <div>
          <UploadPromotion />
        </div>
      )}
    </>
  );
};

export default AdminPage;
