import { HStack } from "../HStack";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: JSX.Element;
  id: string;
}

export function Input({ id, Icon, ...rest }: InputProps) {
  return (
    <HStack className="items-center rounded-full h-10 border-2 border-blue-950">
      {Icon}
      <div className="h-full w-2 border-r-2 text-purple-800 border-blue-950" />
      <input
        {...rest}
        id={id}
        name={id}
        title={id}
        className="rounded-r-full outline-none p-2 h-full w-full bg-transparent placeholder:text-gray-700 caret-white"
      />

    </HStack>
  );
}
