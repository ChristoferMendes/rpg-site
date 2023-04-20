import { useEffect, useState } from "react";
import { GiHalfHeart, GiHearts, GiHeartBottle } from "react-icons/gi";

export function Life() {
  const [damaged, setDamaged] = useState<null | boolean>(null)
  const total = 14;
  const [life, setLife] = useState(total)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDamaged(null)
    }, 2000)

    return () => clearTimeout(timer)
  }, [damaged])

  const handleDamage = () => {
    
    if (life === 0) return;
    setDamaged(true)
    setLife(life - 1)
  }
  const handleIncreaseLife = () => {
    
    if (life === total) return;
    setDamaged(false)
    setLife(life + 1)
  }

  const handleHeartRender = () => {
    if (damaged === true) return <GiHalfHeart className='text-red-700 animate-pulse' />

    if (damaged === false) return <GiHearts className='text-red-700 animate-pulse' />

    return <GiHeartBottle className="text-red-900" />
  }

  return (
    <div>
      <p className="text-[22px] text-center">{life}/{total}</p>
      <div className='flex justify-center items-center text-3xl flex-col'>
        <div className='flex space-x-4 items-center'>
          <button type='button' title='minus' onClick={handleDamage}>-</button>
          {handleHeartRender()}
          <button type='button' title='plus' onClick={handleIncreaseLife}>+</button>
        </div>
        <div>
          {/* <p className='text-zinc-300 text-md'>{life}/{total}</p> */}
        </div>
      </div>
    </div>
  );
}
