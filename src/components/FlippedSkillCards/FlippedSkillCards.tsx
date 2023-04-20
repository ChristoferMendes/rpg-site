import ReactCardFlip from "react-card-flip";
import { GiBowArrow, GiMagicHat, GiRunningNinja, GiStrongMan } from "react-icons/gi";
import { skills } from "../SkillCards/SkillCards";
import { useState } from "react";
import { Card } from "../Card";
import { CardDescription } from "../CardDescription";
import { MdScience } from "react-icons/md";

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

export function FlippedSkillCards({ item }: { item: typeof skills[0] }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <ReactCardFlip key={item.skill} isFlipped={flipped}>
      <div onClick={() => setFlipped(true)}>
        <Card skill={item.skill} bonus={item.bonus} total={item.total} Icon={icon[item.skill as keyof typeof icon]} />
      </div>

      <div onClick={() => setFlipped(false)}>
        <CardDescription description={item.description} />
      </div>
    </ReactCardFlip>
  );
}
