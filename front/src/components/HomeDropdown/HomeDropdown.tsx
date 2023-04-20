import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Option, useOptionsStore } from "../../store/options";
import { GiBookmarklet, GiMimicChest } from "react-icons/gi";
import { AiOutlineAim } from "react-icons/ai";
import { AnimatedPage } from "../AnimatedPage";

const iconProps = {
  className: "text-2xl text-zinc-400"
}

const icons = {
  INVENTORY: <GiMimicChest {...iconProps} />,
  ABILITIES: <AiOutlineAim {...iconProps} />,
  STORY: <GiBookmarklet {...iconProps} />
}

export function HomeDropdown() {
  const options = ['ABILITIES', 'INVENTORY', 'STORY']
  const { actions: { changeCurrentOption }, currentOption } = useOptionsStore()
  const [active, setActive] = useState(false)

  const handleChangeOption = (index: number) => {
    changeCurrentOption(options[index] as Option)
    setActive(false)
  }

  return (
    <div className='px-7 mt-5 bg-mirage rounded-md py-2 text-zinc-500 space-y-3'>
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setActive(!active)}>
        <p className="select-none text-zinc-300">{currentOption}</p>
        {active ? <FaChevronRight /> : <FaChevronDown />}
      </div>
      {active &&
        (
          <AnimatedPage key={String(active)}>
            {options.map((option, index) => {
              if (option === currentOption) return null

              return (
                <div
                  key={option}
                  onClick={() => handleChangeOption(index)}
                  className="my-3 select-none cursor-pointer flex space-x-3"
                >
                  {icons[option as keyof typeof icons]}
                  <p>
                    {option}
                  </p>
                </div>
              )
            })}
          </AnimatedPage>
        )
      }
    </div>
  );
}
