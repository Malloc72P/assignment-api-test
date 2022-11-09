import { atom } from "jotai";

interface InputAtomProps {
  focus: boolean;
}

const InputAtom = atom<InputAtomProps>({
  focus: false,
});

export const ReadInputAtom = atom((get) => get(InputAtom));

export const ToggleInput = atom(null, (get, set, value) => {
  const prevInput = get(InputAtom);
  set(InputAtom, { ...prevInput, focus: !prevInput.focus });
});

export const FocusInput = atom(null, (get, set, value) => {
  const prevInput = get(InputAtom);
  set(InputAtom, { ...prevInput, focus: true });
});

export const UnFocusInput = atom(null, (get, set, value) => {
  const prevInput = get(InputAtom);
  set(InputAtom, { ...prevInput, focus: false });
});
