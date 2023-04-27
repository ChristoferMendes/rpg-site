import { AiFillPlusCircle } from "react-icons/ai";
import { CharacterCard } from "../../components/CharacterCard";
import { DiceSeparator } from "../../components/DiceSeparator";
import { HStack } from "../../components/HStack";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../../components/AnimatedPage";

const text = 'YOUR CHARACTERS';

export function Characters() {
  return (
    <AnimatedPage>
    <div className="text-white">
      <div className='flex flex-col items-center relative h-32'>
        <p className='absolute top-12 text-3xl ml-2 z-10 tracking-widest flex w-full justify-center font-bold text-white'>{text}</p>
        <p className='absolute top-10 text-3xl ml-5 -z-10 tracking-widest text-stroke-purple flex w-full justify-center font-bold'>{text}</p>
      </div>
      <DiceSeparator />
      <Link to={'/character/create/'}>
        <HStack className="items-center ml-3 my-5 w-52 select-none">
          <AiFillPlusCircle />
          <p className="ml-3">Create a new character</p>
        </HStack>
      </Link>
      <CharacterCard name="Zach" race="Human" id={1} />
    </div>
    </AnimatedPage>
  );
}
