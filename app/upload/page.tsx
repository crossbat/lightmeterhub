'use client'

import EXIF from "exif-js";
import React, { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegFileImage } from "react-icons/fa6";

interface IInputs {
  title: string;
  iso: string;
  shutterSpeed: string;
  aperture: string;
  location: string;
  tags: string[];
}

export default function UploadImage() {
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState('')
  const [imageURL, setImageURL] = useState<string | null>(null)

  const { register, reset, handleSubmit, setValue, getValues, formState: { errors } } = useForm<IInputs>({
    defaultValues: {
      iso: '',
      shutterSpeed: '',
      aperture: '',
      tags: []
    }
  });

  useEffect(() => {
    setValue('tags', tags);
  }, [tags, setValue])

  const onSubmit: SubmitHandler<IInputs> = (data) => console.log(data);

  const onReset = () => {
    const { iso, shutterSpeed, aperture } = getValues()
    reset({
      title: '',
      location: '',
      tags: [],
      iso,
      shutterSpeed,
      aperture
    });
    setTags([]);
  }

  const createTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tag.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(tag)) {
        setTags([...tags, tag]);
      }
      setTag('');
    }
  }

  const deleteTag = (text: string) => {
    setTags(prev => prev.filter(t => t !== text));
  }

  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setImageURL(previewURL);

    const reader = new FileReader();
    reader.onload = () => {
      const img: HTMLImageElement = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        EXIF.getData(img as any, function () {
          const iso = EXIF.getTag(this, 'ISOSpeedRatings');
          const shutterSpeed = EXIF.getTag(this, 'ExposureTime');
          const aperture = EXIF.getTag(this, 'FNumber');

          const shutterSpeedValue =
            shutterSpeed?.numerator && shutterSpeed?.denominator
              ? `1/${shutterSpeed.denominator / shutterSpeed.numerator}`
              : shutterSpeed?.valueOf()

          const apertureValue = aperture?.valueOf?.() ?? aperture;

          setValue('iso', iso);
          setValue('shutterSpeed', shutterSpeedValue);
          setValue('aperture', apertureValue);
        });
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="w-4/6 h-full grid grid-cols-2 grid-rows-12 mt-50">
      <div className="flex flex-col row-span-10 justify-start items-end pr-10">
        <div className="size-140 outline-5 outline-gray-300 rounded-lg flex justify-center items-center">
          {
            imageURL ? (
              <img src={imageURL} alt="preview" className="w-[90%] h-[90%] object-contain rounded-lg" />
            ) : (
              <>
                <div className="w-full h-full flex flex-col items-center justify-center gap-7 text-gray-300">
                  <FaRegFileImage className="text-[10rem]" />
                  <p className="text-xl font-semibold">이미지를 추가해주세요</p>
                </div>
              </>
            )
          }
        </div>
        <div className="w-140 mt-3">
          <form>
            <div className='rounded-sm h-15 text-center flex items-center font-bold ring ring-gray-300 hover:shadow-lg'>
              <label htmlFor='fileInput' className='w-full text-2xl'>이미지 추가하기</label>
              <input id='fileInput' type='file' className='w-full hidden' onChange={setImage} />
            </div>
          </form>
        </div>
      </div>
      <div className=" w-160 flex justify-start items-start pl-10 row-span-10">
        <div className=' w-full'>
          <form className='flex flex-col gap-7'>
            <div className="border-3 border-gray-400 rounded-3xl p-3">
              <p className='pl-2 text-lg mb-3'>Title</p>
              <input type="text" className='w-full text-xl indent-2 focus:outline-none' {...register('title')} placeholder="Title" />
            </div>
            <div className="border-3 border-gray-400 rounded-3xl p-3">
              <p className='pl-2 text-lg mb-3'>ISO</p>
              <input type="text" className=' w-full text-xl indent-2 focus:outline-none' {...register('iso')} placeholder="ISO" />
            </div>
            <div className="border-3 border-gray-400 rounded-3xl p-3">
              <p className='pl-2 text-lg mb-3'>Shutter Speed</p>
              <input type="text" className=' w-full text-xl indent-2 focus:outline-none' {...register('shutterSpeed')} placeholder="Shutter Speed" />
            </div>
            <div className="border-3 border-gray-400 rounded-3xl p-3">
              <p className='pl-2 text-lg mb-3'>Aperture</p>
              <input type="text" className=' w-full text-xl indent-2 focus:outline-none' {...register('aperture')} placeholder="Aperture - F" />
            </div>
            <div className="border-3 border-gray-400 rounded-3xl p-3">
              <p className='pl-2 text-lg mb-3'>Location</p>
              <input type="text" className=' w-full text-xl indent-2 focus:outline-none' {...register('location')} placeholder="Location" />
            </div>
            <div className="border-3 border-gray-400 rounded-3xl p-3">
              <p className='pl-2 text-lg mb-3'>Tags</p>
              <input className=' w-full text-xl indent-2 focus:outline-none' placeholder="Tags" value={tag} type="text" onChange={(e) => setTag(e.target.value)} onKeyDown={createTag} />
            </div>
            <div className="flex flex-row gap-5">
              {tags.map((t, i) => (
                <span key={i} className="bg-black px-5 py-3 align-middle text-xl font-bold text-white rounded-full" onClick={() => deleteTag(t)}>{t}</span>
              ))}
            </div>
          </form>
        </div>
      </div>
      <div className="grid row-span-4 col-span-2 grid-cols-subgrid">
        <div className="w-160 col-start-2 flex justify-end h-full">
          <div className='flex gap-10 h-2/6 text-2xl'>
            <button type='button' onClick={onReset} className='px-6 py-1 rounded-2xl font-bold bg-[#d9d9d9] hover:shadow-md'>Clear</button>
            <button type='submit' onClick={handleSubmit(onSubmit)} className='px-6 py-1 rounded-2xl font-bold bg-[#d9d9d9] hover:shadow-md'>Upload</button>
          </div>
        </div>
      </div>
    </div>
  )
}
