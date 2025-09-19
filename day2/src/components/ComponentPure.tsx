import React from 'react'

let guest = 0;

function Cup() {
  guest = guest + 1;
  return <p>Tea cup for guest #{guest}</p>;
}
const ComponentPure = () => {

        return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    );
}

export default ComponentPure;