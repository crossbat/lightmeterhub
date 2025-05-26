'use client';

import Link from 'next/link';
import './Masonry.css'
import React from "react";
import { Masonry } from "react-plock";

const items = [
  { height: 600, color: '#D32F2F', id: 1, imageId: 30 }, // Extra Tall - Darker Red
  { height: 200, color: '#00796B', id: 2, imageId: 112 }, // Short - Darker Teal
  { height: 400, color: '#1976D2', id: 3, imageId: 300 }, // Tall - Darker Blue
  { height: 300, color: '#2E7D32', id: 4, imageId: 401 }, // Medium - Darker Green
  { height: 500, color: '#F57F17', id: 5, imageId: 500 }, // Very Tall - Darker Yellow
  { height: 250, color: '#C2185B', id: 6, imageId: 600 }, // Medium-Short - Darker Pink
  { height: 450, color: '#4527A0', id: 7, imageId: 700 }, // Tall - Darker Purple
  { height: 200, color: '#1565C0', id: 8, imageId: 800 }, // Short - Darker Blue
  { height: 350, color: '#D84315', id: 9, imageId: 20 }, // Medium-Tall - Darker Orange
  { height: 550, color: '#1B5E20', id: 10, imageId: 40 }, // Very Tall - Darker Green
  { height: 150, color: '#B71C1C', id: 11, imageId: 60 }, // Very Short - Darker Red
  { height: 400, color: '#311B92', id: 12, imageId: 80 }, // Tall - Darker Purple
  { height: 300, color: '#00695C', id: 13, imageId: 100 }, // Medium - Darker Turquoise
  { height: 250, color: '#E65100', id: 14, imageId: 120 }, // Medium-Short - Darker Orange
  { height: 500, color: '#880E4F', id: 15, imageId: 140 }, // Very Tall - Darker Pink
  { height: 200, color: '#0D47A1', id: 16, imageId: 160 }, // Short - Darker Blue
  { height: 450, color: '#3E2723', id: 17, imageId: 180 }, // Tall - Darker Brown
  { height: 350, color: '#4A148C', id: 18, imageId: 200 }, // Medium-Tall - Darker Purple
  { height: 500, color: '#01579B', id: 19, imageId: 220 }, // Medium - Darker Blue
  { height: 400, color: '#AD1457', id: 20, imageId: 240 }, // Tall - Darker Pink
  { height: 300, color: '#E65100', id: 21, imageId: 260 }, // Medium-Short - Darker Orange
];

export default function MasonryLayout() {
  return (
    <Masonry items={items} config={{
      columns: [1, 2, 3, 4, 5],
      gap: [6, 10, 14, 18, 22],
      media: [640, 1024, 1280, 1300, 1500],
      useBalancedLayout: true
    }}
      render={(item) => (
        <Link key={item.id} href={{ pathname: 'image-detail', query: item }} >
          <div className="flex w-full font-bold text-white rounded-lg transition-shadow duration-500 ease-in-out hover:shadow-xl/30" style={{ height: item.height, backgroundColor: item.color, width: '100%' }}>
            <img className='rounded-lg w-full object-cover' src={`https://picsum.photos/id/${item.imageId}/${item.height}/${item.height}`} />
          </div>
        </Link>
      )} />
  )
}
