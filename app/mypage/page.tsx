'use client'

import Image from "next/image";

export default function Mypage() {
  return (
    <div className="flex gap-20 w-full">
      <div className="w-75 h-75 flex justify-center items-center">
        <img className="rounded-full" src='https://picsum.photos/id/1/400/400' />
      </div>
      <div className="w-75 h-75 flex flex-col gap-2 items-start justify-center">
        <p className="text-4xl font-semibold">Name</p>
        <p className="text-2xl">Nickname</p>
        <a href="#" className="flex items-center">
          <Image src='/mypageImage/instagram_icon.svg' alt="instagram_icon" width={25} height={25} />
          <p className="text-xl pl-1">Instagram URL</p>
        </a>
        <a href="#" className="flex items-center">
          <Image src='/mypageImage/threads.svg' alt="instagram_icon" width={25} height={25} />
          <p className="text-xl pl-1">Threads URL</p>
        </a>
        <div className="flex gap-5 mt-5">
          <div className="rounded-2xl py-2 px-5 bg-gray-200 focus:outline-gray-300 hover:bg-gray-300 transition-bg duration-300 ease-in-out">
            <p className="text-lg font-semibold">Share</p>
          </div>
          <div className="rounded-2xl py-2 px-5 bg-gray-200 focus:outline-gray-300 hover:bg-gray-300 transition-bg duration-300 ease-in-out">
            <p className="text-lg font-semibold">Edit</p>
          </div>
        </div>
      </div>
    </div>
  )
}
