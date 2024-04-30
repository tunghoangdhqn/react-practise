
import { useState } from 'react';
import { useEffect } from 'react';

import Content from '../Content';

function App() {
  const [showContent, setShowContent] = useState(() => {
    console.log('mounted');
    return false;
  });

  return (
    <div>
      <button onClick={() => { setShowContent(!showContent); }}>Toggle content</button>
      {showContent && <Content />}
    </div>
  );
}
export default App;
