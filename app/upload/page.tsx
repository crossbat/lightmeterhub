'use client'

export default function UploadImage() {
  return (
    <div className="w-4/6 h-full grid grid-cols-2 grid-rows-12">
      <div className="flex flex-col row-span-10 justify-center items-end pr-10">
        <div className="w-90 h-90 bg-gray-300 rounded-md"></div>
        <div className="w-90 mt-3">
          <form>
            <div className='rounded-sm h-10 text-center flex items-center font-bold ring ring-gray-300 hover:shadow-lg'>
              <label htmlFor='fileInput' className='w-full'>이미지 추가하기</label>
              <input id='fileInput' type='file' className='w-full hidden' />
            </div>
          </form>
        </div>
      </div>
      <div className=" w-90 flex justify-start items-center pl-10 row-span-10">
        <div className=' w-full'>
          <form className='flex flex-col gap-5'>
            <div>
              <p className='pl-2 text-lg mb-2'>Title</p>
              <input className=' w-full border-1 border-transparent border-b-gray-600 text-lg indent-2 focus:outline-none' />
            </div>
            <div>
              <p className='pl-2 text-lg mb-2'>ISO</p>
              <input className=' w-full border-1 border-transparent border-b-gray-600 text-lg indent-2 focus:outline-none' />
            </div>
            <div>
              <p className='pl-2 text-lg mb-2'>Exposure</p>
              <input className=' w-full border-1 border-transparent border-b-gray-600 text-lg indent-2 focus:outline-none' />
            </div>
            <div>
              <p className='pl-2 text-lg mb-2'>F-Stop</p>
              <input className=' w-full border-1 border-transparent border-b-gray-600 text-lg indent-2 focus:outline-none' />
            </div>
            <div>
              <p className='pl-2 text-lg mb-2'>Tags</p>
              <input className=' w-full border-1 border-transparent border-b-gray-600 text-lg indent-2 focus:outline-none' />
            </div>
          </form>
        </div>
      </div>
      <div className="grid row-span-4 col-span-2 grid-cols-subgrid">
        <div className="w-90 col-start-2 flex justify-end h-full">
          <div className='flex gap-5 h-2/6'>
            <button type='button' className='px-4 py-1 rounded-2xl font-bold bg-[#d9d9d9] hover:shadow-md'>Clear</button>
            <button type='button' className='px-4 py-1 rounded-2xl font-bold bg-[#d9d9d9] hover:shadow-md'>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
