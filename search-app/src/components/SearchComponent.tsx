import { TextInput } from "@mantine/core";
import { RecommenedList } from "./RecommandedList";

import { useAtom } from "jotai";
import { FocusInput, UnFocusInput } from "../lib/InputAtom";
import { WriteKeyword, WriteRecommandedData } from "../lib/RecommandedData";
import { requestAPI } from "../lib/ApiRequester";

export const SearchComponent = () => {
  const [, focusInput] = useAtom(FocusInput);
  const [, unFocusInput] = useAtom(UnFocusInput);
  const [, writeRecommandedData] = useAtom(WriteRecommandedData);
  const [, writeKeyword] = useAtom(WriteKeyword);

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

    const data = await requestAPI(event.target.value);

    writeRecommandedData(data);
    writeKeyword(event.target.value);
  };

  return (
    <>
      <TextInput
        autoComplete="off"
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={onInputChange}
      />
      <RecommenedList />
    </>
  );
};
