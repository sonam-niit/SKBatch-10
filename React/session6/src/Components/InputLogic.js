import React, { useState } from 'react';
function InputLogic() {
    const [name, setName] = useState('');
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h2>Welcome {name}</h2>
        </div>
    );
}

export default InputLogic;