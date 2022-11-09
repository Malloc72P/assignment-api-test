import { Card, createStyles, Text } from "@mantine/core";
import { SearchComponent } from "./SearchComponent";

const useStyle = createStyles((theme) => ({
  bodyCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      width: "45vw",
    },
  },
}));

export const BodyComponent = () => {
  const { classes } = useStyle();

  return (
    <Card shadow="sm" radius="md" withBorder p={4} className={classes.bodyCard}>
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
