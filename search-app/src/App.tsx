import React from "react";
import { BodyComponent } from "./components/BodyComponent";
import { HeaderLink, HeaderResponsive } from "./components/Header";
import { createStyles, Flex } from "@mantine/core";

const links: HeaderLink[] = [
  { link: "", label: "link1" },
  { link: "", label: "link2" },
  { link: "", label: "link3" },
];

const useStyles = createStyles(() => ({
  appWrapper: {
    height: "100vh",
  },
  articleWrapper: {
    flexGrow: 1,
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <Flex className={classes.appWrapper} direction="column">
      <HeaderResponsive links={links}></HeaderResponsive>
      <Flex className={classes.articleWrapper} justify="center" pt={140}>
        <BodyComponent></BodyComponent>
      </Flex>
      <div style={{ height: "60px" }}></div>
    </Flex>
  );
}

export default App;
