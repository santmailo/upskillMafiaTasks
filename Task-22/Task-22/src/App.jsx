import { useEffect, useState } from "react";
import { Loading, Error, PhotosApp } from "./components";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      {error ? <Error /> : isLoading ? <Loading /> : <PhotosApp data={data} />}
    </>
  );
}

export default App;
