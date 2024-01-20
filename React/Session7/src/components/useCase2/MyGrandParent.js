import React from 'react';
import MyParent from './MyParent';
import MyContextProvider from './MyContext';
function MyGrandParent() {
    return (
        <MyContextProvider>
            <div>
                <h1>MyGrandParent</h1>
                <MyParent />
            </div>
        </MyContextProvider>

    );
}

export default MyGrandParent;