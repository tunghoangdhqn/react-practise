
import { useState } from 'react';

const order = [100, 200, 300];
function App() {

    const [counter, setCounter] = useState(() => {
        const total = order.reduce((total, current) => { return total + current; });
        return total;
    });

    const [info, setInfo] = useState(
        {
            name: 'Nguyen van a',
            age: 18,
            address: 'Ha noi'
        }
    );

    const handleIncreate = () => {

        // function trả về của useState, gọi lại hàm App khi chạy (bỏ giá trị khởi tại)
        //setCounter(counter + 1);

        //prevState: giá trị trước của state
        setCounter(prevState => prevState + 1);
    };
    const handleUpdateInfo = () => {
        setInfo({
            ...info,
            bio: 'nam'
        });

    };

    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncreate}>Increate</button>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdateInfo}>Update Info</button>
        </div>
    );
}

export default App;
