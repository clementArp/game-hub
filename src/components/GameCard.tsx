import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlateformIconList from "./PlateformIconList";
import { Game } from "../Hooks/useGames";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} overflow="hidden" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlateformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlateformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
