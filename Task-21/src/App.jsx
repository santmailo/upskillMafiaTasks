// import "./App.css";

function App() {
  const img =
    "https://www.shutterstock.com/image-photo/cute-black-labrador-retriever-puppy-600nw-1869893323.jpg";
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center py-20 bg-black text-violet-500">
      <h1 className=" text-4xl my-5 ">All the cards are here.</h1>

      <div className=" w-4/5 h-auto flex flex-wrap justify-around">
        {num.map((num) => {
          return <Card img={img} num={num} key={num} />;
        })}
      </div>
    </div>
  );
}

function Card({ img, num }) {
  return (
    <div className=" w-1/4 p-10 m-5 gradient-border ">
      <img className="" src={img} />
      <p className=" text-xl text-center font-bold m-2">Card {num} </p>
      <p className="text-center">This is Card {num} description</p>
    </div>
  );
}

export default App;
