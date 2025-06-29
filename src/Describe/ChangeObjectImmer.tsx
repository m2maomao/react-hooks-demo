import { useImmer } from "use-immer";

const Form = () => {
  const [person, updatePerson] = useImmer({
    name: "Nancy",
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
        <br />
        <img
          src={person.artwork.image}
          alt={person.artwork.title}
        />
      </p>
    </>
  );
}

export default Form;