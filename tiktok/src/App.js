
import { useState } from 'react';
import Content from './Content';

function App() {
  // Get localstorage
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState(() => {
    const storageCountries = JSON.parse(localStorage.getItem('countries'));
    return storageCountries ?? [];
  });

  const [showContent, setShowContent] = useState(false);

  const handleAddCountry = () => {
    setCountries(prevState => {
      const newCountries = [...prevState, country];

      // save localstorage
      const jsonCountries = JSON.stringify(newCountries);
      console.log(jsonCountries);
      localStorage.setItem('countries', jsonCountries);

      return newCountries;
    });
    setCountry('');
  };
  return (
    <div>
      <input
        value={country}
        onChange={(e) => { setCountry(e.target.value); }}
      />

      <button onClick={handleAddCountry}>Add</button>
      <ul>
        {countries.map((country, index) => {
          return (
            <li key={index}>{country}</li>
          );
        })}
      </ul>
      <button onClick={() => { setShowContent(!showContent); }}>Toggle Show</button>
      {showContent && <Content />}
    </div>
  );
}

export default App;
