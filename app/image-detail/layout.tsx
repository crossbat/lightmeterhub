'use client'

import { useSearchParams } from "next/navigation";
import React from "react";
import { IoMdExit } from "react-icons/io";

export default function ImageDetailLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const searchParams = useSearchParams();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-5/6 h-5/6 shadow-xl/20 rounded-xl grid grid-rows-12 grid-cols-2 p-10">
        <div className="col-span-2 flex justify-end text-5xl ">
          <IoMdExit />
        </div>
        <div className="row-span-11">
        </div>
        <div className="row-span-11">
          {children}
        </div>
      </div>
    </div>
  )
}
