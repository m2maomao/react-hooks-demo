import { useState } from "react";
let nextId = 0;
const Add = () => {
  const [name, setName] = useState('');
  const [articles, setArticles] = useState<Array<{id: number; name: string;}>>([]);
  
  return (
    <>
      <h3>振奋人心的雕塑家们：</h3>
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <button onClick={() => {
        setArticles([
          ...articles,
          { id: nextId++, name: name }
        ]);
        setName('');
      }}>添加</button>
      <ul>
        {
          articles.map(article => (
            <li key={article.id}>{article.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Add;