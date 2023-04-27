import { CgChevronDown } from "react-icons/cg";
import { HStack } from "../HStack";
import { Text } from "../Text";
import { useState } from "react";
import { motion } from "framer-motion";

export function DropDown({ options, getSelected, icons }: { options: string[], getSelected: (selected: string) => void, icons: Record<string, JSX.Element> }) {
  const [selected, setSelected] = useState(options[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleSelected = (option: string) => {
    setSelected(option)
    getSelected(option)
  }

  return (
    <div className="bg-purple-950 text-white cursor-pointersm:mt-3 mt-16 rounded-xl p-2" onClick={() => setIsOpen(!isOpen)}>
      <HStack className="items-center justify-between px-3">
        <Text className="select-none">{selected.replace('_', ' ')}</Text>
        <CgChevronDown />
      </HStack>
      {isOpen && options.map((option) => {
        if (option === selected) return null;
        return (
          <motion.div key={option} className="flex items-center">
            {icons[option]}
            <p
              className="ml-3 cursor-pointer my-2"
              onClick={() => handleSelected(option)}
            >
              {option.replace('_', ' ')}
            </p>
          </motion.div>
        )
      })}
    </div>
  );
}
