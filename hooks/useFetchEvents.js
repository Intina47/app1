// path: hooks/useFetchEvents.js
import { useState, useEffect } from 'react';

const useFetchEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                fetch('/api/events')
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log('data', data);
                        setEvents(data);
                        setLoading(false);
                    })
                    .catch((error) => console.error('Error:', error));
            },[]);

    return { events, loading };
};

export default useFetchEvents;
