"use client";
import { useState } from "react";
import CommonPage from "./components/CommonPage";
import Navbar from "./components/Navbar";
import NoDefinations from "./components/NoDefinations";
import localFont from 'next/font/local';
import RootLayout from "./layout";

const LoraFont = localFont({
  src: '../../public/fonts/Lora-Bold.ttf'
})
const InterFont = localFont({
  src: '../../public/fonts/Inter-Bold.ttf',
});

const InconsolataFont = localFont({
  src: '../../public/fonts/Inconsolata-Bold.ttf',
});

const fonts = [
  LoraFont.className,
  InterFont.className,
  InconsolataFont.className
];

export default function Home() {
  const [selectedFont, setSelectedFont] = useState('');

  const handleFontChange = (event:React.SyntheticEvent) =>{
    const target = event.target as HTMLInputElement;
    const indexOfFont = target.value;
    const selecedValue = fonts[indexOfFont as unknown as number];    
    setSelectedFont(selecedValue);
  }

  return (
    <RootLayout>
      <main className={`lg:px-20, md:px-10 px-4 ${selectedFont}`}> 
        <Navbar onChangeFont={handleFontChange}/>
        <CommonPage />
        <NoDefinations/>
      </main>
    </RootLayout>
  )
}
