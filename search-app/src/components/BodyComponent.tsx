import { Card, Text, TextInput } from "@mantine/core";

export const BodyComponent = () => {
  return (
    <Card
      miw={600}
      shadow="sm"
      radius="md"
      withBorder
      p={4}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card.Section inheritPadding bg="gray.2">
        <Text weight={700} px={12} py={16}>
          한국 임상 정보
        </Text>
      </Card.Section>

      <Card.Section inheritPadding px={32} py={16} style={{ flexGrow: 1 }}>
        <TextInput></TextInput>
        <RecommendeList></RecommendeList>
      </Card.Section>

      <Card.Section px={12} py={16} bg="gray.2">
        <Text weight={700} align="end">
          Powered by malloc72p
        </Text>
      </Card.Section>
    </Card>
  );
};
