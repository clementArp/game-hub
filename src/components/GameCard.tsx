import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlateformIconList from "./PlateformIconList";
import { Game } from "../Hooks/useGames";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        overflow="hidden"
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlateformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlateformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
