
import { AiFillSetting } from 'react-icons/ai';
import { useState } from 'react';
import { useOptionsStore } from '../../store/options';
import { Abilities } from '../../components/Abilities';
import { Inventory } from '../../components/Inventory';
import { Story } from '../../components/Story';
import { AnimatedPage } from '../../components/AnimatedPage';
import { HomeDropdown } from '../../components/HomeDropdown';
import SettingModal from '../../components/SettingModal/SettingModal';
import { useCharacterByIdQuery } from '../../hooks/useCharacterByIdQuery';
import { useParams } from 'react-router-dom';


export function Character() {
  const { currentOption } = useOptionsStore()
  const { id } = useParams()
  const { data } = useCharacterByIdQuery(Number(id))
  const [isModalOpen, setIsModalOpen] = useState(false)
  const race = data?.race

  const renderBasedOnCurrentOption = () => {
    if (currentOption === 'ABILITIES') return <Abilities />

    return currentOption === 'INVENTORY' ? <Inventory /> : <Story />
  }

  const onToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onClose = () => {
    if (isModalOpen) setIsModalOpen(false)
  }

  return (
    <AnimatedPage>
      <div className="bg-[#11091a] overflow-hidden text-white" onClick={onClose}>
        <div className='bg-vulcal'>
          <div className='flex justify-end pr-5 pt-3 cursor-pointer' onClick={onToggle}>
            <AiFillSetting className='' />
          </div>
          <div className='flex justify-center'>
            <h1 className='text-2xl'>{data?.name}</h1>
          </div>
          <div className='flex justify-center py-5 relative'>
            <img
              src="https://cdn.discordapp.com/attachments/1084811025070686209/1096138704218763294/Artie_Cahill_bloodborne_style_ultra_detailed_the_character_Link_4f29993e-0ecf-4176-bd73-59ebc5a64acc.png"
              alt=""
              className='w-28 rounded-full z-20 opacity-90'
            />
            <p className='absolute top-10 text-6xl ml-3 z-10 tracking-widest text-stroke flex w-full justify-center'>{race}</p>
            <p className='absolute top-3 text-6xl z-10 tracking-widest flex w-full justify-center'>{race}</p>
          </div>
          {/* <Life /> */}
        </div>
        <div className='mx-4 space-y-5'>
          <HomeDropdown />
          {renderBasedOnCurrentOption()}
        </div>
        <SettingModal isOpen={isModalOpen} onToggle={onToggle} />
      </div>
    </AnimatedPage>
  )
}
