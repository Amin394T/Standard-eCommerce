import { useState, useEffect } from "react";

type FetchStatus = "loading" | "complete" | "error";
type returnType<Type> = { data: Type | null, status: FetchStatus }


const cache: Record<string, any> = {};

function useFetch<Type>(url: string, cacheData = true): returnType<Type> {
  const [data, setData] = useState<Type | null>(null);
  const [status, setStatus] = useState<FetchStatus>("loading");

  useEffect(() => {
    if (cache[url] && cacheData) {
      setData(cache[url]);
      setStatus("complete");
    }
    else {
      let fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          if (response.headers.get("content-type") == "application/json") throw new Error("Content format error!");

          const data = await response.json();
          if(cacheData) cache[url] = data;
          setData(data);
          setStatus("complete");
        }
        catch (error) {
          console.error(error);
          setStatus("error");
        }
      };
      fetchData();
    }
  }, [url, cacheData]);

  return { data, status };
}

export default useFetch;
