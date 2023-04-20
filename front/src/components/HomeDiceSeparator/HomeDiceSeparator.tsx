import { GiDiceFire } from "react-icons/gi";

export function HomeDiceSeparator() {
  return (
    <div className='flex justify-between items-center mx-2'>
      <div className='w-40 h-[1px] bg-purple-900' />
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#5146b9" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
      </svg>
      <GiDiceFire style={{ fill: "url(#blue-gradient)" }} className='text-5xl' />
      <div className='w-40 h-[1px] bg-purple-900' />
    </div>
  );
}
