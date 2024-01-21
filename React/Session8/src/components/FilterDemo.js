import React, { useEffect, useState } from 'react';

const array = [
    { key: 1, type: 'regular', value: 'Alex' },
    { key: 2, type: 'regular', value: 'Bob' },
    { key: 3, type: 'silver', value: 'Alex' },
    { key: 4, type: 'silver', value: 'Catty' },
    { key: 5, type: 'silver', value: 'Sonam' },
    { key: 6, type: 'gold', value: 'Sonam' },
    { key: 7, type: 'gold', value: 'beauty' },
    { key: 8, type: 'pletinum', value: 'Anshuman' },
    { key: 9, type: 'pletinum', value: 'chandan' },

]
function FilterDemo() {

    const [filteredArray, setFilteredArray] = useState(array);
    const [type, setType] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        setFilteredArray(
            array.filter(item => item.type === type)
            .filter(item=>item.value===value))
    }, [type,value])
    return (
        <div>
            {
                filteredArray.map((item) => (
                    <h3 key={item.key}>{item.type} = {item.value}</h3>
                ))
            }
            <input type='text' placeholder='Enter type' value={type}
                onChange={(e) => setType(e.target.value)} />

            <input type='text' placeholder='Enter User Name' value={value}
                onChange={(e) => setValue(e.target.value)} />
        </div>
    );
}

export default FilterDemo;