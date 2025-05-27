import './home.css'
import { Inria_Sans } from 'next/font/google';
import MasonryLayout from '@/components/common/Masonry';
import items from '../masonry-data.json'

const inria = Inria_Sans({
  weight: '400'
})

export default function Home() {
  return (
    <div className='w-5/6'>
      <div className='mt-50 flex flex-col items-center text-5xl'>
        <p className={`pb-5 ${inria.className}`}>Shoot, Share and Learn with</p>
        <p className={inria.className}>Every frame</p>
      </div>
      <div className='mt-20 flex justify-center'>
        <form action='' method=''>
          <input type='text' className='w-120 h-10 text-xl border-1 border-transparent border-b-gray-300 indent-2 focus:outline-none' placeholder='Write down your idea' />
        </form>
      </div>
      <div className='w-full my-30'>
        <MasonryLayout items={items} />
      </div>
    </div>
  )
}
