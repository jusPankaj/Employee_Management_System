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
        <div className="flex h-screen items-center justify-center">
          <div className="bg-[#194C53] h-80 w-80 rounded-xl border border-blue-950">
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
                  className="text-blue-950 h-10 rounded-full border border-blue-950 p-4 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="pl-4 text-teal-500 font-semibold">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                  className="text-blue-950 h-10 rounded-full border border-blue-950 p-4 outline-none"
                />
              </div>
              <button className="flex items-center justify-center w-full bg-green-600 h-10 text-white font-bold rounded-md">
                Sign in
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}

    </div>
  );
};

export default Login;
