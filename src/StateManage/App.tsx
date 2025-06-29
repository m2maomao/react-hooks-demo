import { useState } from "react";


const Form = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right</h1>
  }

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err instanceof Error ? err : new Error(String(err)));
    }
  }

  const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
        {error && <p className="Error">{error.message}</p>}
      </form>      
    </>
  )
}

const submitForm = (answer: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldError = answer.toLowerCase() !== 'lima';
      if(shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  })
}

export default Form;