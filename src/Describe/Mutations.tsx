import { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ firstName: "Michael", lastName: "Zhang", email: "m2maomao@163.com" });
  const handlePersonChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form>
      <input type="input" name="firstName" value={person.firstName} onInput={e => handlePersonChange(e)} />
      <input type="input" name="lastName" value={person.lastName} onInput={e => handlePersonChange(e)} />
      <input type="input" name="email" value={person.email} onInput={e => handlePersonChange(e)} />
      <p>{person.firstName} {' '} {person.lastName} {person.email}</p>
    </form>
  )
}

export default Form;