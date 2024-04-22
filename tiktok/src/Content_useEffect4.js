import { useEffect, useState } from "react";

const countries = [
  {
    id: 1,
    name: 'AB'
  },
  {
    id: 2,
    name: 'CF'
  },
  {
    id: 3,
    name: 'KR'
  }
];

function Content() {
  const [countryID, setCountryID] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`country-${countryID}`, handleComment);

    return (
      () => {
        window.removeEventListener(`country-${countryID}`, handleComment);
      }
    );
  }, [countryID]);

  return (
    <div>
      <ul>
        {countries.map((country) => {
          return (
            <li
              key={country.id}
              style={{ color: country.id === countryID ? 'red' : '#333' }}
              onClick={() => { setCountryID(country.id); }}
            >{country.name}</li>
          );
        })}

      </ul>
    </div >
  );
}

export default Content;