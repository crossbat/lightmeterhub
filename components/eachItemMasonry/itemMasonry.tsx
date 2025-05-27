'use client';

import Link from 'next/link';
import React, { useState } from "react";
import { Masonry } from "react-plock";
import { Iitems } from '../common/Masonry';

export interface IEachItems {
  eachItems: Iitems[]
}

export default function ItemMasonryLayout({ eachItems }: IEachItems) {
  return (
    <Masonry items={eachItems} config={{
      columns: [3],
      gap: [18],
      useBalancedLayout: true
    }}
      render={(item, idx) => (
        <Link key={item.id} href={{ pathname: `/image-detail/${item.id}` }} >
          <div className="flex w-full font-bold text-white rounded-lg transition-shadow duration-500 ease-in-out hover:shadow-xl/30" style={{ height: item.height, width: '100%' }}>
            <img className='rounded-lg w-full object-cover' src={`https://picsum.photos/id/${item.imageId}/${item.height}/${item.height}`} />
          </div>
        </Link>
      )} />
  )
}
