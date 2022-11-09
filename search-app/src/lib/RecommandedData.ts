import { atom } from "jotai";

export type Sick = {
  sickCd: string;
  sickNm: string;
};

interface RecommandedDataProps {
  keyword: string;
  sicks: Sick[];
}
const RecommandedData = atom<RecommandedDataProps>({
  keyword: "",
  sicks: [],
});

export const ReadRecommandedData = atom((get) => {
  return get(RecommandedData).sicks;
});

export const WriteRecommandedData = atom(null, (get, set, data: Sick[]) => {
  set(RecommandedData, { ...get(RecommandedData), sicks: [...data] });
});

export const ReadKeyword = atom((get) => {
  return get(RecommandedData).keyword;
});

export const WriteKeyword = atom(null, (get, set, keyword: string) => {
  set(RecommandedData, { ...get(RecommandedData), keyword: keyword });
});
