import { useState } from "react";
import { letters } from "./data.tsx";
import Letter from "./Letter.tsx";
import type { ToogledId } from "./types.ts";

export default function MailClient() {
  const [selectedId, setSelectedId] = useState<ToogledId[]>([]);

  const selectedCount = selectedId.length;

  function handleToggle(toggledId: ToogledId) {
    const nextSelectedId = selectedId.includes(toggledId)
      ? selectedId.filter((id) => id !== toggledId)
      : [...selectedId, toggledId];
    setSelectedId(nextSelectedId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: 支持多选
              selectedId.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
