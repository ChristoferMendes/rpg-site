import { useParams } from "react-router-dom";
import { useCharacterByIdQuery } from "../../hooks/useCharacterByIdQuery";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SkillCards } from "../SkillCards";

export function Abilities() {
  const windowSize = useWindowSize()
  const breakpoint = 447

  return (
    <div className={`flex flex-wrap ${windowSize.width <= breakpoint ? 'justify-evenly h-[550px]' : 'justify-between h-96'}`}>
      <SkillCards />
    </div>
  );
}
