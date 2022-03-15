import { useEffect, useState } from "react";
import axios from "axios";

const useFetching = (url) => {
  const [freqs, setFreqs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/frequencies')
      .then(res => {
        setFreqs(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [url]);

  return { freqs }
}

export default useFetching
