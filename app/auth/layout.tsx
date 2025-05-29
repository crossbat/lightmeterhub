'use client'

import { overlayStore } from "@/store/authPageStore";
import React from "react";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const overlayState = overlayStore((state) => state.overlayState)
  return (
    <div className="w-full h-full relative grid grid-cols-2">
      {children}
      <div className={`transition-transform duration-700 ease-in-out bg-transparent flex justify-center items-center absolute ${overlayState ? 'translate-x-[0]' : 'translate-x-[100%]'} w-[50%] h-[100%]`}>
        <div className="w-[90%] h-[90%] rounded-4xl bg-gray-400 flex flex-col justify-center items-center bg-[url(/authImage/overlayImage.JPG)] bg-cover text-[8rem] font-extrabold text-white gap-15">
          <span>LIGHT</span>
          <span>METER</span>
          <span>HUB</span>
        </div>
      </div>
    </div>
  )
}
