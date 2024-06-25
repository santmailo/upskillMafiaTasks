import { useEffect, useState } from "react";

// api link
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}
