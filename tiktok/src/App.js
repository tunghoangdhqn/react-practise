
import { useState } from 'react';

const gifts = [
    'gifts 1',
    'gifts 2',
    'gifts 3'
];

const course = [
    {
        id: 1,
        name: 'html'
    },
    {
        id: 2,
        name: 'css'
    },
];

function App() {

    const [gift, setGift] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(1);
    const [checkbox, setCheckbox] = useState([]);

    console.log(checkbox);

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    };

    const handleSubmit = () => {
        console.log({
            name,
            email,
            id: checked,
            checkbox: checkbox
        });
    };
    const handleCheckbox = (id) => {
        setCheckbox((prev) => {
            if (checkbox.includes(id)) {
                return checkbox.filter(value => value !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    return (
        <div>
            <h1>{gift || `No data`}</h1>
            <button onClick={randomGift} >Lay thuong</button>
            <br />
            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleSubmit}>Submit Form</button>

            <div>
                {course.map((course) => {
                    return (
                        <div key={course.id}>
                            <input
                                type="radio"
                                name="course"
                                checked={checked === course.id}
                                onChange={() => { setChecked(course.id); }}
                            />
                            {course.name}
                        </div>
                    );
                })}

            </div>
            <br />
            <div>
                {course.map((course) => {
                    return (
                        <div key={course.id}>
                            <input
                                type="checkbox"
                                name="course"
                                checked={checkbox.includes(course.id)}
                                onChange={() => handleCheckbox(course.id)}
                            />
                            {course.name}
                        </div>
                    );
                })}

            </div>

        </div>
    );
}
export default App;;
