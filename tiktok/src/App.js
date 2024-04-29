import { useState, memo, useCallback, useMemo, useRef } from 'react';
import Content from './Content';
function App() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handlSubmit = () => {
    setProducts([...products, {
      name,
      price: Number(price)
    }]);
    setName('');
    setPrice('');
    nameRef.current.focus();
  };
  /*
    const total = products.reduce((result, product) => {
      console.log("run total funcion");
      return result + product.price;
    }, 0);
  */
  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log("run total funcion");
      return result + product.price;
    }, 0);

    return result;
  }, [products]);


  console.log(products);

  //console.log(name);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder='name...'
        onChange={e => { setName(e.target.value); }}
      />
      <br />
      <input
        value={price}
        placeholder='price...'
        onChange={e => { setPrice(e.target.value); }}
      />
      <br />
      <button onClick={handlSubmit}>Add</button>
      <br />
      Total: {total}

    </div>
  );
};

export default App;
