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
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiOutlineCheck } from "react-icons/ai";

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

const races = Object.values(RacesEnum).filter(item => typeof item !== 'number')
const stats = Object.values(AbilityTypeEnum).filter(item => typeof item !== 'number')

const abilitiesDefault = {
  Strenght: 0,
  Dexterity: 0,
  Agility: 0,
  Magic: 0,
  Science: 0,
}

export function CharacterCreate() {
  const [race, setRace] = useState(races.at(0))
  const [name, setName] = useState('')
  const [abilities, setAbilities] = useState(abilitiesDefault)
  const navigate = useNavigate()

  const getSelected = (selected: string) => {
    setRace(selected)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const abilitiesMapped = Object.entries(abilities).map(([key, value]) => ({ name: key, total: value }))

    const user_id = localStorage.getItem('@id')

    if (!name) return toast.error('You need to set a name for your character')
    if (!user_id) return toast.error('Error while authenticating, please, login again')

    const createCharacterInput = {
      name,
      race,
      user_id: Number(user_id),
      avatar_url: 'http',
      abilities: abilitiesMapped
    }

    const saveCharacterPromise = api.post('characters', { ...createCharacterInput })

    toast.promise(saveCharacterPromise, {
      loading: 'Saving character...',
      success: <p>Success</p>,
      error: <p>There was an error saving you character 😔</p>
    }).then(() => {
      setTimeout(() => navigate('/characters'), 1000)
    })

  }

  const increaseAbility = (name: keyof typeof abilities) => {
    setAbilities(prev => ({ ...prev, [name]: prev[name] + 1 || 1 }))
  }

  const decreaseAbility = (name: keyof typeof abilities) => {
    setAbilities(prev => ({ ...prev, [name]: prev[name] - 1 }))
  }

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
              <input type="text" title="name" className="w-24" value={name} onChange={(e) => setName(e.target.value)} />
            </HStack>
            {stats.map((item) => (
              <HStack className="justify-between" key={item}>
                <Text>{item}</Text>
                <HStack className="w-24 justify-between items-center">
                  <CgChevronLeft className="text-white" onClick={() => decreaseAbility(item as keyof typeof abilities)} />
                  <p className="text-white" id={item as keyof typeof abilities}>{abilities[item as keyof typeof abilities] || 0}</p>
                  <CgChevronRight className="text-white" onClick={() => increaseAbility(item as keyof typeof abilities)} />
                </HStack>
              </HStack>
            ))}
            <button type="submit" className="text-white bg-vulcal border rounded-sm p-1 border-purple-950 mt-4">Submit</button>
          </VStack>
        </form>
      </div>
    </AnimatedPage>
  );
}
