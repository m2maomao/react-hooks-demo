export interface ILetters {
  id: number;
  subject: string;
  isStarred: boolean;
}

export type ToogledId = number;

export interface ILetterProp {
  letter: ILetters;
  onToggle: (id: number) => void;
  isSelected: boolean;
}