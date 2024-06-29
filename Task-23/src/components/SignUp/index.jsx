function SignUp() {
  return (
    <div className=" h-screen bg-slate-200 flex justify-center items-center">
      <div className=" w-1/4 h-px-200  bg-white p-10 rounded-md">
        <h1 className="text-center text-4xl font-bold py-6 ">Sign Up</h1>
        <label htmlFor="name" className="w-full p-2">
          Name:
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 border-black w-full p-2 mb-4  border-slate-400 rounded-md "
        />
        <br />
        <label htmlFor="email" className="w-full p-2">
          Email:
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 border-black w-full p-2 mb-4  border-slate-400 rounded-md "
        />
        <br />
        <label htmlFor="password" className="w-full p-2">
          Password:
        </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 border-slate-400 rounded-md w-full p-2 mb-4"
        />
        <br />
        <button className="w-full bg-green-400 p-2 rounded-md text-white">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignUp;
