import { useParams } from "react-router-dom";
import { FlippedSkillCards } from "../FlippedSkillCards";
import { useCharacterByIdQuery } from "../../hooks/useCharacterByIdQuery";

export function SkillCards() {
  const { id } = useParams()
  const { data } = useCharacterByIdQuery(Number(id))

  return (
    <>
      {data?.abilities.map(item => (
        <FlippedSkillCards key={item.name} item={item}/>
      ))}
    </>
  );
}
