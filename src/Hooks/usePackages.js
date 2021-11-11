import axios from 'axios';
import { useState, useEffect } from 'react';

export const usePackages = () => {
    const [packages, setPackages] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        let url = "http://localhost:4000/packages";
        axios.get(url)
            .then(result => {
                setPackages(result.data)
                setLoader(false)
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [])
    return [packages, setPackages]
}
