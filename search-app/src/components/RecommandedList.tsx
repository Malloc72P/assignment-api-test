import { Card, Button } from "@mantine/core";
import { useAtom } from "jotai";
import { ReadInputAtom } from "../lib/InputAtom";
import { ReadRecommandedData, Sick } from "../lib/RecommandedData";
import { IconSearch } from "@tabler/icons";

interface RecommenedItemProps {
  sick: Sick;
}

const RecommenedItem = ({ sick }: RecommenedItemProps) => {
  return (
    <Button
      variant="subtle"
      fullWidth
      color="dark"
      leftIcon={<IconSearch size="16" />}
      style={{ display: "flex" }}
    >
      {sick.sickNm}
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
      {recommandedData.map((sick) => (
        <RecommenedItem sick={sick}></RecommenedItem>
      ))}
    </Card>
  );
};
