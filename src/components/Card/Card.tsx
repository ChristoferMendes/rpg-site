import { useWindowSize } from "../../hooks/useWindowSize";

export function Card({ skill, bonus, total, Icon }: { skill: string, bonus: string, total: number, Icon: JSX.Element }) {
  const windowSize = useWindowSize()
  
  return (
    <div className={`flex flex-col bg-[#232C35] ${windowSize.width <= 447 ? 'w-40' : 'w-52'} h-40 justify-evenly items-center rounded-xl`}>
      <div className='flex w-full justify-evenly items-center'>
        {Icon}
        <p className='text-xl'>{skill}</p>
      </div>
      <div className='border border-dashed border-yellow-500 w-20 h-8 flex justify-center items-center'>
        <p>{bonus}</p>
      </div>
      <div className='bg-vulcal w-10 h-10 flex items-center justify-center rounded-full'>
        <p>{total}</p>
      </div>
    </div>
  );
}
