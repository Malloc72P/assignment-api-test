import { TextInput } from "@mantine/core";
import { RecommenedList } from "./RecommandedList";

import { useAtom } from "jotai";
import { FocusInput, UnFocusInput } from "../lib/InputAtom";
import axios from "axios";
import { Sick, WriteRecommandedData } from "../lib/RecommandedData";

export const SearchComponent = () => {
  const [, focusInput] = useAtom(FocusInput);
  const [, unFocusInput] = useAtom(UnFocusInput);
  const [, writeRecommandedData] = useAtom(WriteRecommandedData);

  const onInputFocus = () => {
    console.log("on focus");
    focusInput();
  };

  const onInputBlur = () => {
    console.log("on blur");
    unFocusInput();
  };

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      return;
    }

    const response = await axios.get<Sick[]>(
      `http://localhost:4000/sick?q=${event.target.value}`
    );
    writeRecommandedData(response.data);
  };

  return (
    <>
      <TextInput
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={onInputChange}
      />
      <RecommenedList />
    </>
  );
};
