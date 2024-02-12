import { useState, useEffect } from 'react';

const useFetchEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(
() => {
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
            })
            .catch((error) => console.error('Error:', error));
    },
     [],
);

    return events;
};

export default useFetchEvents;
