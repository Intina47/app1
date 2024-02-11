import React, { useEffect } from 'react';
import axios from 'axios';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadPromotion from '../components/admin/uploadPromotions.tsx';
import '../styles/globals.css';

const AdminPage = () => {
  const [code, setCode] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

    useEffect(() => {
      axios.get('/api/sendAccessCode')
        .then((res) => {
          if (res.status === 200) {
            toast.success('Access code sent to your email');
          } else {
            toast.error('Error generating code');
          }
        })
        .catch((error) => {
          toast.error('Something went wrong. Please refresh the page and try again.');
          console.log(error);
        });
    }, []);

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

  if (!accessGranted) {
    return (
      <>
        <ToastContainer />
        <div className="flex items-center justify-center h-screen">
          <form onSubmit={verifyCode} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter access code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border-2 border-black p-2"
            />
            <button type="submit" className="bg-black text-white p-2 rounded-md">Verify</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <div>
      <UploadPromotion />
    </div>
  );
};

export default AdminPage;
