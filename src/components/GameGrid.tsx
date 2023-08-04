import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <ul key={game.id}>{game.name}</ul>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
