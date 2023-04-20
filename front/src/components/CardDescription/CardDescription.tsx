import { useWindowSize } from "../../hooks/useWindowSize";

export function CardDescription({ description }: { description: string}) {
  const windowSize = useWindowSize()

  return (
    <div className={`flex bg-[#232C35] ${windowSize.width <= 447 ? 'w-40' : 'w-52'} h-40 items-center rounded-xl`}>
      <p className="text-clip text-sm pl-2">{description}</p>
    </div>
  );
}
