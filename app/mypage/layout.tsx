import MasonryLayout from "@/components/common/Masonry";
import React from "react";
import items from '../../masonry-data.json'

export default function MypageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-40">
        {children}
      </div>
      <div className="border-1 border-transparent border-b-black w-30 flex justify-center my-15">
        <p className="text-3xl font-semibold pb-3 pt-15">Posts</p>
      </div>
      <div className="w-5/6">
        <MasonryLayout items={items} />
      </div>
    </div>
  )
}
