
import { useState } from 'react';
import { useEffect } from 'react';

import Content from './Content';


function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <button onClick={() => { setShowContent(!showContent); }}>Toggle content</button>
      {showContent && <Content />}
    </div>
  );
}
export default App;
