import React, { useState } from 'react';
import { toast , ToastContainer } from 'react-toastify';
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
    const [events, setEvents] = useState([{ previewSource: '', eventDate: '' }]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleDateChange = (date: string, index: number) => {
        const newEvents = [...events];
        newEvents[index].eventDate = date;
        setEvents(newEvents);
    };

    const handleUpload = async () => {
        const allFieldsFilled = events.every((event) => event.previewSource && event.eventDate);
        if (!allFieldsFilled) {
            toast.error('Please fill all fields before uploading');
            return;
        }
        try {
            console.log('events', events);
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(events),
            });

            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            setEvents([{ previewSource: '', eventDate: '' }]);
            toast.success('Events uploaded successfully!');
        } catch (error) {
            toast.error('Failed to upload events please try again');
        }
    };

    const addEvent = () => {
        const allFieldsFilled = events.every((event) => event.previewSource && event.eventDate);
        if (!allFieldsFilled) {
            toast.error('Please fill all the fields before adding another event');
            return;
        }
        setEvents([...events, { previewSource: '', eventDate: '' }]);
    };

    const previewFile = (file, index) => {
        setIsUploading(true);
        // upload file to firebase storage and get the download URL
        const storage = getStorage(app);
        // log to console to see if the storage is working
        if (storage) {
            console.log('storage', storage);
        } else {
            console.log('storage not working');
        }
        const storageRef = ref(storage, `events/${uuidv4()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
                console.log(`Upload is ${progress}% done`);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log('Upload is done');
                }
            },
            (error) => {
                console.error('Failed to upload file:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newEvents = [...events];
                    newEvents[index].previewSource = downloadURL;
                    setEvents(newEvents);
                    setIsUploading(false);
                });
            },
        );
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (event.target.files) {
            const file = event.target.files[0];
            previewFile(file, index);
        }
    };

        return (
          <>
            <ToastContainer className="z-50 text-sm" />
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-blue-200 to-gray-200" />
              <div className="container z-10 mx-auto p-4">
                <h1 className="text-3xl font-bold text-center text-white">Upload Events </h1>
                {events.map((event, index) => (
                  <div key={index} className="max-w-md mx-auto mt-10">
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor={`dropzone-file-${index}`} className={`flex flex-col items-center justify-center w-full h-64 border-2 ${!event.previewSource ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                        {!event.previewSource && (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload Event Image</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                                    )}
                        {isUploading ? (
                          <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ '--value': uploadProgress } as React.CSSProperties} role="progressbar">{Math.round(uploadProgress)}%</div>
                                    ) : (
                                        event.previewSource && (
                                        <>
                                          <div className="relative w-100% h-32 flex-shrink-0 mr-2 rounded-lg">
                                            <img src={event.previewSource} alt="Preview" className="object-contain w-full h-full rounded-lg" />
                                          </div>
                                          <p className="mt-2 text-center text-sm text-green-500 ">
                                            Click anywhere in the box to change the image
                                          </p>
                                        </>
                                        )
                                    )}
                        <input type="file" id={`dropzone-file-${index}`} className="hidden" onChange={(e) => handleFileChange(e, index)} />
                      </label>
                    </div>
                    <label htmlFor="eventDate" className="block mt-4 text-sm font-semibold">Event Date</label>
                    <input required type="date" value={event.eventDate} onChange={(e) => handleDateChange(e.target.value, index)} className="w-full p-2 mt-2 border rounded" />
                  </div>
                    ))}
                <div className="flex justify-center mt-4">
                  <button type="button" onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Upload</button>
                  <button type="button" onClick={addEvent} className="px-4 py-2 ml-2 bg-green-500 text-white rounded hover:bg-green-600">Add Another Event</button>
                </div>
              </div>
            </div>
          </>
        );
    };

    export default React.memo(UploadPromotion);
