import { useState, useEffect } from 'react'
import { fetchDataFromApi } from '../utils/appApi';


const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint])

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }

    return { data };
}

export default useFetch;