'use client'

import { overlayStore } from "@/store/authPageStore"

export default function SignUp() {
  const setOverlayState = overlayStore((state) => state.setOverlayState);

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-6xl ">Create Account</span>
      <form className="flex flex-col mt-20 gap-5 w-110">
        <input type="text" className="indent-2 text-2xl p-7 shadow-lg/15 rounded-2xl focus:outline-gray-200" placeholder="Nickname" />
        <input type="email" className="indent-2 text-2xl p-7 shadow-lg/15 rounded-2xl focus:outline-gray-200" placeholder="Email" />
        <input type="password" className="indent-2 text-2xl p-7 shadow-lg/15 rounded-2xl focus:outline-gray-200" placeholder="Password" />
        <input type="password" className="indent-2 text-2xl p-7 shadow-lg/15 rounded-2xl focus:outline-gray-200" placeholder="Check password" />
      </form>
      <div className="w-110 flex justify-end">
        <button type="button" onClick={setOverlayState} className="cursor-pointer pe-3 text-lg text-black/35 my-3">Already have an account?</button>
      </div>
      <button type="button" className="cursor-pointer bg-[#1e1e1e] text-white p-7 w-110 text-2xl rounded-2xl my-8">Sign up</button>
    </div>
  )
}
