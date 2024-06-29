function Dashboard() {
  const img =
    "https://imgs.search.brave.com/qFwzBwGchi2NR2utPmQUSMqDUSpzANUrDmKlCD_oYSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZmFtaWx5LXVzaW5n/LWNvbXB1dGVyLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA";
  return (
    <div className="min-w-fit h-screen flex gap-3 m-5 pt-20">
      {/*---------------- sidebar -----------------------*/}
      <div className="w-1/4 ">
        <div className="shadow-md shadow-slate-400">
          <img
            src={img}
            alt="computer image with people"
            className="w-full h-[200px]"
          />
          <div className="p-2">
            <h1 className="font-bold text-xl m-1">Title Heading</h1>
            <p className="font-semibold text-lg">
              Title Description,{" "}
              <span className="text-gray-400 font-semibold">April 7, 2014</span>
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sequi facilis quisquam omnis, officiis, fugiat non perferendis
              necessitatibus ullam aspernatur quis! Quisquam nemo dolor
              consequuntur ipsa fugiat dignissimos aliquid iusto?
            </p>
            <button className="border-2 border-slate-300 my-2 p-2">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* -------------------------------------main content------------------------*/}
      <div className="w-3/4 min-h-[600px] shadow-xl shadow-slate-400 ">
        <img
          src={img}
          alt="computer image with people"
          className="w-full h-[400px]"
        />
        <div className="p-2">
          <h1 className="font-bold text-2xl m-1">Title Heading</h1>
          <p className="font-semibold text-lg">
            Title Description,{" "}
            <span className="text-gray-400 font-semibold">April 7, 2014</span>
          </p>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi
            facilis quisquam omnis, officiis, fugiat non perferendis
            necessitatibus ullam aspernatur quis! Quisquam nemo dolor
            consequuntur ipsa fugiat dignissimos aliquid iusto? Quasi facere
            suscipit blanditiis quos. At adipisci ducimus rerum debitis deserunt
            placeat nesciunt quaerat quia pariatur ullam? Ab a quibusdam eaque
            animi!
          </p>
          <button className="border-2 border-slate-300 my-2 p-2">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
