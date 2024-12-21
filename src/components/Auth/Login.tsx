import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Form Submitted with email : ${email} `);
  };

  return (
    <div className="grid grid-cols-2">
      {/* <div className=""> */}
        <div className="flex h-screen items-center justify-center ">
          <div className="bg-[#0A0B10] h-80 w-80 rounded-xl border border-teal-950 p-16">
            <form
              onSubmit={(event) => handleSubmit(event)}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              <div className="flex flex-col">
                <label className="pl-4 text-teal-500 font-semibold">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                  className="text-teal-700 h-10 font-semibold rounded-full border border-teal-950 p-4 outline-none bg-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label className="pl-4 text-teal-500 font-semibold">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                  className="text-teal-700 h-10 p-4 rounded-full border border-teal-950 outline-none bg-transparent"
                />
              </div>
              <button className="flex items-center justify-center w-full h-10 p-2 bg-teal-600 text-white font-bold rounded-full">
                Sign in
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}
      <div className="text-teal-500 px-32 flex flex-col justify-center">
        <h1 className="font-extrabold text-3xl">“To handle yourself, use your head. To handle others, use your heart.”</h1>
        <p className=" text-sm p-4">Eleanor Roosevelt</p>
      </div>
    </div>
  );
};

export default Login;
