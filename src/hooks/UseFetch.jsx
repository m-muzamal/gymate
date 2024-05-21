import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [url]);

  return data;
};

export default UseFetch;
