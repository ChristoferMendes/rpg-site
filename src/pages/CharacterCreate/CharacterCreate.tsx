import { useState } from "react";
import { AnimatedPage } from "../../components/AnimatedPage"
import { DropDown } from "../../components/DropDown";
import { HomeBackground } from "../../components/Home/HomeBackground"
import { HomeUserImage } from "../../components/Home/HomeUserImage";
import { api } from "../../services/api";
import { GiDwarfFace, GiLion, GiSpikedDragonHead, GiWomanElfFace, GiPerson } from "react-icons/gi";
import { Text } from "../../components/Text";
import { HStack } from "../../components/HStack";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { VStack } from "../../components/VStack";

enum AbilityTypeEnum {
  Strenght,
  Dexterity,
  Agility,
  Magic,
  Science,
}

enum RacesEnum {
  Human,
  Half_Elf,
  Dwarf,
  Dragonborn,
  Beastfolk,
}

const racesIconStyles = {
  className: 'text-3xl'
}
const racesIcon = {
  Human: <GiPerson {...racesIconStyles} />,
  Half_Elf: <GiWomanElfFace {...racesIconStyles} />,
  Dwarf: <GiDwarfFace {...racesIconStyles} />,
  Dragonborn: <GiSpikedDragonHead {...racesIconStyles} />,
  Beastfolk: <GiLion {...racesIconStyles} />,
}

type Abilities = {
  [key: string]: number;
};

const races = Object.values(RacesEnum).filter(item => typeof item !== 'number')
const stats = Object.values(AbilityTypeEnum).filter(item => typeof item !== 'number')

export function CharacterCreate() {
  const [race, setRace] = useState(races.at(0))
  const [abilities, setAbilities] = useState({} as Abilities)

  const getSelected = (selected: string) => {
    setRace(selected)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const abilitiesMapped = Object.entries(abilities).map(([key, value]) => ({ name: key, total: value }))

    const createCharacterInput = {
      name: 'Zachary 2',
      race: 'Human',
      user_id: 1,
      avatar_url: 'http',
      abilities: abilitiesMapped
    }
    console.log(abilitiesMapped)
    const res = await api.post('characters', { ...createCharacterInput })

    console.log('RESPONSE:::::', res.data)
  }

  const increaseAbility = (name: string) => {
    setAbilities(prev => ({ ...prev, [name]: prev[name] + 1 || 1 }))
  }

  const decreaseAbility = (name: string) => {
    setAbilities(prev => ({ ...prev, [name]: prev[name] - 1 || 1 }))
  }

  console.log(abilities)

  return (
    <AnimatedPage>
      <div>
        <HomeBackground />
        <HomeUserImage />
      </div>
      <div className="mx-12">
        <form onSubmit={handleSubmit}>
          <DropDown options={races as string[]} getSelected={getSelected} icons={racesIcon} />
          <VStack className="mx-10 mt-6">
            <HStack className="justify-between mb-4">
              <Text>Name:</Text>
              <input type="text" name="" id="" title="name" className="w-24" />
            </HStack>
            {stats.map((item) => (
              <HStack className="justify-between" key={item}>
                <Text>{item}</Text>
                <HStack className="w-24 justify-between items-center">
                  <CgChevronLeft className="text-white" onClick={() => decreaseAbility(item as string)} />
                  <p className="text-white" id={item as string}>{abilities[item] || 1}</p>
                  <CgChevronRight className="text-white" onClick={() => increaseAbility(item as string)} />
                </HStack>
              </HStack>
            ))}
            <button className="text-white bg-red-900 mt-4">Submit</button>
          </VStack>
        </form>
      </div>
    </AnimatedPage>
  );
}
