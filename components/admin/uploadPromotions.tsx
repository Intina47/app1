import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { app } from '../../utils/firebaseClientConfiguration.ts';

const UploadPromotion = () => {
    const [event, setEvent] = useState({ previewSource: '', eventDate: '', ticketLink: '' });
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

        // Upload File to Firebase Storage
        const uploadFile = (file) => {
          setIsUploading(true);
          const storage = getStorage(app);
          const storageRef = ref(storage, `events/${uuidv4()}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
              'state_changed',
              (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setUploadProgress(progress);
              },
              (error) => {
                  console.error('Failed to upload file:', error);
                  setIsUploading(false);
                  toast.error('Failed to upload image');
              },
              () => {
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                      setEvent((prev) => ({ ...prev, previewSource: downloadURL }));
                      setIsUploading(false);
                      toast.success('Image uploaded successfully!');
                  });
              },
          );
      };

    // Handle File Change
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            uploadFile(file);
        }
    };

    // Handle Date Change
    const handleDateChange = (e) => {
        setEvent((prev) => ({ ...prev, eventDate: e.target.value }));
    };

    // Handle Ticket Link Change
    const handleTicketLinkChange = (e) => {
        setEvent((prev) => ({ ...prev, ticketLink: e.target.value }));
    };

    // Handle Form Submission
    const handleUpload = async () => {
      if (!event.previewSource || !event.eventDate) {
          toast.error('Please fill all fields before uploading');
          return;
      }
      try {
          // Wrap the single event in an array
          const response = await fetch('/api/upload', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify([event]), // Send as an array
          });
          if (!response.ok) {
              toast.error('Failed to upload event');
          }
          toast.success('Event uploaded successfully!');
          setEvent({ previewSource: '', eventDate: '', ticketLink: '' });
          setUploadProgress(0);
          setIsUploading(false);
      } catch (error) {
          console.error('Failed to upload event:', error);
          toast.error('Failed to upload event');
      }
  };

    return (
      <>
        <ToastContainer className="z-50 text-sm" />
        <div className="flex justify-center items-center min-h-screen">
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">Upload Event</h1>
            <div className="max-w-md mx-auto mt-10">
              <div className="flex items-center justify-center w-full">
                <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  {!event.previewSource && (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload Event Image</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, JPEG (Max. 800x400px)</p>
                    </div>
                                )}
                  {isUploading ? (
                    <div className="text-blue-500">{Math.round(uploadProgress)}% Uploaded</div>
                                ) : (
                                    event.previewSource && (
                                    <img src={event.previewSource} alt="Preview" className="object-contain w-full h-full rounded-lg" />
                                    )
                                )}
                  <input
                    accept="image/png, image/jpeg"
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <label htmlFor="eventDate" className="block mt-4 text-sm font-semibold">Event Date</label>
              <input
                type="date"
                value={event.eventDate}
                onChange={handleDateChange}
                className="w-full p-2 mt-2 border rounded"
              />
              <label htmlFor="ticketLink" className="block mt-4 text-sm font-semibold">Tickets Link</label>
              <input
                type="url"
                value={event.ticketLink}
                onChange={handleTicketLinkChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="https://example.com"
              />
              <button
                type="button"
                onClick={handleUpload}
                className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Upload Event
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default UploadPromotion;
