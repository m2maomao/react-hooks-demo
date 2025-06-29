import type { ILetterProp } from "./types";

export default function Letter({
  letter,
  onToggle,
  isSelected,
}: ILetterProp) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}
