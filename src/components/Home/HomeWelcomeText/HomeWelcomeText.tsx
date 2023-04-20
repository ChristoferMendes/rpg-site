export function HomeWelcomeText() {
  const text = 'WELCOME HUMAN';

  return (
    <div className='flex flex-col items-center relative h-32'>
      <p className='absolute top-4 text-4xl z-10 tracking-widest flex w-full justify-center font-bold text-white'>{text}</p>
      <p className='absolute top-7 text-4xl ml-3 -z-10 tracking-widest text-stroke-purple flex w-full justify-center font-bold'>{text}</p>
    </div>
  );
}
