import ReactCardFlip from "react-card-flip";
import { GiBowArrow, GiMagicHat, GiRunningNinja, GiStrongMan } from "react-icons/gi";
import { useState } from "react";
import { Card } from "../Card";
import { CardDescription } from "../CardDescription";
import { MdScience } from "react-icons/md";
import { Ability } from "../../hooks/useCharacterByIdQuery";

const iconProps = {
  className: 'text-4xl'
}

const icon = {
  Strenght: <GiStrongMan {...iconProps} />,
  Dexterity: <GiBowArrow {...iconProps} />,
  Agility: <GiRunningNinja {...iconProps} />,
  Magic: <GiMagicHat {...iconProps} />,
  Science: <MdScience {...iconProps} />
}

export function FlippedSkillCards({ item }: { item: Ability }) {
  const [flipped, setFlipped] = useState(false)
  const serializeBonus = item.bonus > 0 ? `+${item.bonus}` : item.bonus.toString()

  return (
    <ReactCardFlip key={item.name} isFlipped={flipped}>
      <div onClick={() => setFlipped(true)}>
        <Card skill={item.name} bonus={serializeBonus} total={item.total} Icon={icon[item.name as keyof typeof icon]} />
      </div>

      <div onClick={() => setFlipped(false)}>
        <CardDescription description={''} />
      </div>
    </ReactCardFlip>
  );
}
