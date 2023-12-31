import React from 'react';

function Userlist() {

    const users = [
        { id: 1, name: 'Alex', email: 'alex@gmail.com', country: 'UK' },
        { id: 2, name: 'Bob', email: 'bob@gmail.com', country: 'US' },
        { id: 3, name: 'Catty', email: 'cat@gmail.com', country: 'Indonesia' },
        { id: 4, name: 'Devid', email: 'devud@gmail.com', country: 'Australia' },
        { id: 5, name: 'Sonam', email: 'sonam@gmail.com', country: 'India' }
    ]
    return (<div className=''>
        <table>
            <thead>
                <tr><th>Id</th><th>Name</th><th>Email</th><th>Country</th></tr>
            </thead>
            <tbody>
                {
                    users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>);
}

export default Userlist;