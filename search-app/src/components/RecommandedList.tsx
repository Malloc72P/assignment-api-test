import { Card, Button, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { ReadInputAtom } from "../lib/InputAtom";
import { ReadKeyword, ReadRecommandedData, Sick } from "../lib/RecommandedData";
import { IconSearch } from "@tabler/icons";

interface RecommenedItemProps {
  sick: Sick;
}

const RecommenedItem = ({ sick }: RecommenedItemProps) => {
  const [keyword] = useAtom(ReadKeyword);
  const name = sick.sickNm;

  const matchText = name.split(new RegExp(`(${keyword})`, "gi"));

  return (
    <Button
      variant="subtle"
      fullWidth
      color="dark"
      leftIcon={<IconSearch size="16" />}
      style={{ display: "flex" }}
    >
      {matchText.map((splitedText, index) => {
        return splitedText === keyword ? (
          <Text key={sick.sickCd + "bt" + index} weight={700}>
            {splitedText}
          </Text>
        ) : (
          <Text key={sick.sickCd + "t" + index} weight={400}>
            {splitedText}
          </Text>
        );
      })}
    </Button>
  );
};

export type RecommenedListProps = {};

export const RecommenedList = () => {
  const [InputAtom] = useAtom(ReadInputAtom);
  const [recommandedData] = useAtom(ReadRecommandedData);

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      mt="md"
      mah={400}
      style={{
        display: InputAtom.focus ? "block" : "none",
        overflow: "scroll",
      }}
    >
      {recommandedData.length > 0 ? (
        recommandedData.map((sick) => (
          <RecommenedItem key={sick.sickCd} sick={sick}></RecommenedItem>
        ))
      ) : (
        <Text>검색어 없음</Text>
      )}
    </Card>
  );
};
