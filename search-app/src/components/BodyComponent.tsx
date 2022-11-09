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
          Search
        </Text>
      </Card.Section>

      <Card.Section inheritPadding px={32} py={16} style={{ flexGrow: 1 }}>
        <TextInput></TextInput>
      </Card.Section>

      <Card.Section px={12} py={16} bg="gray.2">
        <Text weight={700} align="end">
          Footer
        </Text>
      </Card.Section>
    </Card>
  );
};
