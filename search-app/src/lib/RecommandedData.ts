import { atom } from "jotai";

export type Sick = {
  sickCd: string;
  sickNm: string;
};

interface RecommandedDataProps {
  sicks: Sick[];
}
const RecommandedData = atom<RecommandedDataProps>({
  sicks: [],
});

export const ReadRecommandedData = atom((get) => {
  return get(RecommandedData).sicks;
});

export const WriteRecommandedData = atom(null, (get, set, data: Sick[]) => {
  set(RecommandedData, { ...get(ReadRecommandedData), sicks: [...data] });
});
