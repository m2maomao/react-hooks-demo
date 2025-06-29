import { useState } from 'react';
import type { OnAddTaskFn } from './type';

export default function AddTask({ onAddTask }: { onAddTask: OnAddTaskFn}) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="添加任务"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        添加
      </button>
    </>
  );
}
