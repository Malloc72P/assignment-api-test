import { Card, Text } from "@mantine/core";
import { SearchComponent } from "./SearchComponent";

export const BodyComponent = () => {
  return (
    <Card
      miw={720}
      shadow="sm"
      radius="md"
      withBorder
      p={4}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card.Section inheritPadding bg="gray.2">
        <Text weight={700} px={12} py={16}>
          키워드를 입력해주세요
        </Text>
      </Card.Section>

      <Card.Section inheritPadding px={32} py={16} style={{ flexGrow: 1 }}>
        <SearchComponent />
      </Card.Section>

      <Card.Section px={12} py={16} bg="gray.2">
        <Text weight={700} align="end">
          Powered by malloc72p
        </Text>
      </Card.Section>
    </Card>
  );
};
