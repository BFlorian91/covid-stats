import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  console.warn('WATCH OUT SPAMMING API CALLING')

  return { data, error, isLoading };
}
