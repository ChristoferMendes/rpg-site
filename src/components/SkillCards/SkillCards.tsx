import { FlippedSkillCards } from "../FlippedSkillCards";

export const skills = [
  {
    skill: 'Strenght',
    bonus: '+2',
    total: 2,
    description: 'Determines the power of physical or large weapon attacks. It also determines your stamina and hit points.'
  },
  {
    skill: 'Dexterity',
    bonus: '+5',
    total: 10,
    description: 'Ranged attacks, small weapons, stealth and sleight of hand. Critical hits with dexterity are also brutal'
  },
  {
    skill: 'Agility',
    bonus: '+6',
    total: 9,
    description: 'Determines the power of physical or large weapon attacks. It also determines your stamina and hit points.'
  },
  {
    skill: 'Magic',
    bonus: '+3',
    total: 6,
    description: 'Determines the power of physical or large weapon attacks. It also determines your stamina and hit points.'
  },
  {
    skill: 'Science',
    bonus: '+3',
    total: 6,
    description: 'Determines the power of physical or large weapon attacks. It also determines your stamina and hit points.'
  },
]



export function SkillCards() {

  return (
    <>
      {skills.map(item => (
        <FlippedSkillCards key={item.skill} item={item}/>
      ))}
    </>
  );
}
