import { useState, useEffect, useCallback } from "react"
import axios from "axios"

const useFetchDetails = (endpoint)=>{
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(endpoint);
            setData(response.data);
        } catch (error) {
            // handle error
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => {
      fetchData();
    }, [fetchData]);
    
    return {data,loading}
}

export default useFetchDetails