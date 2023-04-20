import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

import { GiElfHelmet } from "react-icons/gi";
import { VStack } from "../../VStack";
import { HStack } from "../../HStack";
import { Text } from "../../Text";


export function HomeCharacters() {
  return (
    <HStack className="justify-center mt-10">
      <Link to={'/characters'}>
        <Tilt>
          <VStack className="bg-purple-950 w-32 h-32 rounded-xl items-center justify-center space-y-3">
            <Text className="font-medium">CHARACTERS</Text>
            <GiElfHelmet className="text-6xl text-white" />
          </VStack>
        </Tilt>
      </Link>
    </HStack>
  );
}
