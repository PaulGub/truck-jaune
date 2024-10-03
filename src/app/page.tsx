"use client";

import Header from '../components/Header';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute z-20 w-full">
            <Header />
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <ReactPlayer
            url="https://youtu.be/9HsIHbbm5-I?list=TLGGTBSTVL5nFqMwMzEwMjAyNA"
            className="react-player transform scale-150"
            width="100%"
            height="100%"
            controls
            playing
            loop
            muted
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-bold text-center z-20 font-BebasNeue">
            La cuisine nomade qui vous fait voyager
          </h1>
        </div>
      )}
    </>
  );
}
