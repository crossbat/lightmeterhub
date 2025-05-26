'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuData = [
  { id: 'home', name: 'Home', path: '/', imagePath: '/navigationImage/search.svg' },
  { id: 'uploadImage', name: 'addImage', path: '/upload', imagePath: '/navigationImage/addImage.svg' },
  { id: 'likes', name: 'Likes', path: '/likes', imagePath: '/navigationImage/likes.svg' },
  { id: 'userpage', name: 'MyPage', path: '/mypage', imagePath: '/navigationImage/myPage.svg' },
]

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      {menuData.map((menu) => (
        <Link key={menu.id} href={menu.path} className={`p-4 hover:bg-gray-300 rounded-lg ${menu.path === pathname ? 'bg-gray-300' : 'bg-transparent hover:bg-gray-300'}`}>
          <Image src={menu.imagePath} width={25} height={25} alt='search' />
        </Link>
      ))}
    </>
  )

}
