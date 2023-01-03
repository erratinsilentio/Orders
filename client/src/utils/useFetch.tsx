import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("loading...");
    // setData((data) => null);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json as T);
        console.log("loading complete!");
        // console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log("error!");
      });
  }, []);

  return { data, loading, error };
}
