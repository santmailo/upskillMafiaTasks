import { Loading, Error, PhotosApp } from "./components";
import useFetch from "./hooks/useFetch";

function App() {
  // const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { data, isLoading, error } = useFetch(url);

  return (
    <>
      {error ? <Error /> : isLoading ? <Loading /> : <PhotosApp data={data} />}
    </>
  );
}

export default App;
