import { useState, useEffect } from "react";
import axios from "axios";

/* quando realizzo un custm hooks è molto importante che sia il file 
sia la funzione inizino cn 'use'*/

const useFetch = (url) => {

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
