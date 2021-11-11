import axios from 'axios';
import { useState, useEffect } from 'react';

export const useTours = () => {
    const [allTours, setAllTours] = useState([]);
    useEffect(() => {
        let url = "http://localhost:4000/tours";
        axios.get(url)
            .then(result => setAllTours(result.data))
    }, [])
    return [allTours, setAllTours]
}
