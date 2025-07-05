import { useState } from 'react';
import type { EditContactProps } from './types/contact.types';

const EditContact = (props: EditContactProps) => {
  return (
    <EditForm
      {...props}
      key={props.savedContact.id}
    />
  );
}

const EditForm = ({savedContact, onSave}: EditContactProps) => {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <section>
      <label>
        姓名: {' '}
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        邮箱：{' '}
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button onClick={() => {
        const updateData = {
          id: savedContact.id,
          name: name,
          email: email,
        }
        onSave(updateData);
      }}>
        保存
      </button>
      <button onClick={() => {
        setName(savedContact.name);
        setEmail(savedContact.email);
      }}>
        重置
      </button>
    </section>
  )
}

export default EditContact;