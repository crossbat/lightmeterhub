import Image from 'next/image';
import './globals.css';
import Navigation from '@/components/main/navigation';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="w-screen">
        <div className='flex'>
          <nav className="w-25 h-screen flex flex-col justify-between py-6 fixed">
            <div className='flex'>
              <Image src='/navigationImage/Logo.svg' width={200} height={200} alt='Logo' />
            </div>
            <div className='flex flex-col gap-4 items-center'>
              <Navigation />
              <hr className='w-5/6 border-gray-300' />
              <div className='p-5 hover:bg-gray-300 rounded-lg'>
                <Image src='/navigationImage/lightMode.svg' width={30} height={30} alt='lightMode' />
              </div>
            </div>
          </nav>
          <div className='flex flex-1 justify-center h-screen pl-25'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
} 
