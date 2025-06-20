'use client';

import Link from 'next/link';
import './Masonry.css'
import React from "react";
import { Masonry } from "react-plock";

export interface Iitems {
  height: number;
  id: number;
  imageId: number;
}

interface MasonryLayoutProps {
  items: Iitems[]
}

export default function MasonryLayout({ items }: MasonryLayoutProps) {
  return (
    <Masonry items={items} config={{
      columns: [1, 2, 3, 4, 5],
      gap: [6, 10, 14, 18, 22],
      media: [640, 1024, 1280, 1300, 1500],
      useBalancedLayout: true
    }}
      render={(item) => (
        <Link key={item.id} href={{ pathname: `/image-detail/${item.id}` }} >
          <div className="flex w-full font-bold text-white rounded-lg transition-shadow duration-500 ease-in-out hover:shadow-xl/30" style={{ height: item.height, width: '100%' }}>
            <img className='rounded-lg w-full object-cover' src={`https://picsum.photos/id/${item.imageId}/${item.height}/${item.height}`} />
          </div>
        </Link>
      )} />
  )
}
