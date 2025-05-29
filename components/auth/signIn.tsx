'use client'

import { overlayStore } from "@/store/authPageStore";

export default function SignIn() {
  const setOverlayState = overlayStore((state) => state.setOverlayState);

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-6xl ">Hello Again!</span>
      <form className="flex flex-col mt-20 gap-10 w-110">
        <input type="email" className="indent-2 text-2xl p-7 shadow-lg/15 rounded-2xl focus:outline-gray-200" placeholder="Email" />
        <input type="password" className="indent-2 text-2xl p-7 shadow-lg/15 rounded-2xl focus:outline-gray-200" placeholder="Password" />
      </form>
      <div className="w-110 flex justify-end">
        <button type="button" className="pe-3 text-lg text-black/35 my-3">Forgot Password</button>
      </div>
      <button type="button" className="cursor-pointer bg-[#1e1e1e] text-white p-7 w-110 text-2xl rounded-2xl my-8">Sign in</button>
      <div className="w-110 flex items-center text-black/35 text-xs my-2">
        <div className="flex-grow h-px bg-black/35 mx-4"></div>
        <span className="text-lg">For New user</span>
        <div className="flex-grow h-px bg-black/35 mx-4"></div>
      </div>
      <button type="button" onClick={setOverlayState} className="cursor-pointer bg-[#575757] text-white p-7 w-110 text-2xl rounded-2xl my-8">Sign up</button>
    </div>
  )
}
