import React from 'react'; // nạp thư viện react
import ReactDOM from 'react-dom/client'; // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>acdc</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// Render component App vào #root element
// react 2017
//ReactDOM.render(<App />, document.getElementById('root'));