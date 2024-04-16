
import { useState } from 'react';

const gifts = [
  'gifts 1',
  'gifts 2',
  'gifts 3'
];

function App() {

  const [gift, setGift] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  console.log(name);

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  const handleSubmit = () => {
    console.log({
      name,
      email
    });
  };
  return (
    <div>
      <h1>{gift || `Chua co phan thuong`}</h1>
      <button onClick={randomGift} >Lay thuong</button>
      <br />
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit Form</button>

    </div>
  );
}
export default App;
