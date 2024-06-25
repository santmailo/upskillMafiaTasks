import { useCallback, useEffect, useState } from "react";
// export default function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//   }, [currency]);

//   return data;
// }

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback((url) => {
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, isLoading, error };
}

export default useFetch;
