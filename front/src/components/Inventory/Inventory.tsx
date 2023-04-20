import { GiBroadsword } from "react-icons/gi";

const items = [
  { name: 'Vangeance', damage: 18, type: 'Sword', quantity: 1 },
  { name: 'Vangeance 2', damage: 18, type: 'Sword', quantity: 6 },
]

export function Inventory() {
  return (
    <div className="bg-slate-950 pt-4 rounded-lg">
      <div className="flex justify-between pl-7 mb-4">
        <p className="w-40">NAME</p>
        <p className="w-12">QTY</p>
        <p className="w-12">DMG</p>
      </div>
      <div>
        {items.map(item => (
          <div className="flex justify-between pl-7 border-b my-4 pb-4 border-b-zinc-700" key={item.name}>
            <div className="space-y-1 flex space-x-3">
              <div className="h-full w-fit flex items-end pb-1">
                <GiBroadsword />
              </div>
              <div>
                <p className="w-40">{item.name}</p>
                <p className="text-gray-500">{item.type}</p>
              </div>
            </div>
            <p className="mt-auto w-12">{item.quantity}</p>
            <p className="mt-auto w-12">{item.damage}</p>
          </div>
        ))}
      </div>
    </div>
  );

}
