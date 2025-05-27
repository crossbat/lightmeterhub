'use client'

import React from "react";
import { IoMdExit } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import data from '../../../masonry-data.json'
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ImageDetailLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const params = useParams()
  const [filteredData] = data.filter(d => d.id === Number(params.id))

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-6/7 h-5/6 shadow-xl/20 rounded-xl grid grid-rows-12 grid-cols-2 p-10">
        <div className="col-span-2 flex justify-end text-5xl ">
          <Link href={`/`}>
            <IoMdExit />
          </Link>
        </div>
        <div className="row-span-11 flex flex-col items-center gap-3">
          <div className="w-5/6 h-[520px] overflow-hidden rounded-xl">
            <img src={`https://picsum.photos/id/${filteredData.imageId}/700/700`} />
          </div>
          <div className="w-5/6 flex flex-col items-start p-5 gap-4">
            <div className="w-full flex justify-between text-4xl">
              <p className="font-bold">제목</p>
              <IoIosHeartEmpty />
            </div>
            <div className="w-full grid grid-cols-3 text-3xl">
              <div className="flex gap-4">
                <p className="font-semibold">ISO</p>
                <p>3200</p>
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">S.S</p>
                <p>1/320</p>
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">F</p>
                <p>5.6</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-xl text-gray-500">
              <FaEarthAfrica />
              <p>Location</p>
            </div>
          </div>
        </div>
        <div className="row-span-11 overflow-scroll overflow-x-hidden">
          <p className="text-4xl font-bold mb-5">Related</p>
          {children}
        </div>
      </div>
    </div>
  )
}
