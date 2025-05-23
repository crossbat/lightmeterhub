'use client'

import React from "react"

export default function uploadImageLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="w-4/6 h-full grid grid-cols-2 grid-rows-12">
      <div className="flex flex-col row-span-10 justify-center items-end">
        <div className="w-130 h-130 bg-gray-300 rounded-lg"></div>
        <div className="w-130 mt-10">
          <form>
            <input type="file" className="h-20 w-full border rounded-lg" />
          </form>
        </div>
      </div>
      <div className="row-span-9">
        <h1>2</h1>
      </div>
      <div className="h-1/6 grid row-span-4 col-span-2 grid-cols-subgrid">
        <div className="col-start-2">
          {children}
        </div>
      </div>
    </div>
  )
}
