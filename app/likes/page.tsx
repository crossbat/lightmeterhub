'use client'

import MasonryLayout from "@/components/common/Masonry";
import items from '../../masonry-data.json';

export default function Likes() {
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <div className="w-2/6 mb-20">
        <form>
          <input type="text" placeholder="ISO, Exposure, F-Stop, Tags, etc" className="text-xl indent-2 w-full border-1 border-transparent border-b-gray-500 focus: outline-none" />
        </form>
      </div>
      <div className="w-5/6">
        <MasonryLayout items={items} />
      </div>
    </div>
  )
}
