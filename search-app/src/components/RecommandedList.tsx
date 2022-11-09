import { Card, Button } from "@mantine/core";
import { useAtom } from "jotai";
import { ReadInputAtom } from "../lib/InputAtom";

const RecommenedItem = () => {
  return (
    <Button
      variant="subtle"
      fullWidth
      color="dark"
      style={{ textAlign: "left" }}
    >
      강아지
    </Button>
  );
};

export type RecommenedListProps = {};

export const RecommenedList = () => {
  const [InputAtom] = useAtom(ReadInputAtom);

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      mt="md"
      mah={400}
      style={{ display: InputAtom.focus ? "block" : "none", overflow: "auto" }}
    >
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
      <RecommenedItem></RecommenedItem>
    </Card>
  );
};
