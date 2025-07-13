import { useChangeName } from "./useChangeName";

const Form = () => {
  const firstNameProps = useChangeName('Michael');
  const lastNameProps = useChangeName('Zhang');

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  )
}

export default Form;