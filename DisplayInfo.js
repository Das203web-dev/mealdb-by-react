import React from 'react';
import './DisplayInfo.css'
const DisplayInfo = (props) => {
    // console.log(props)
    // jodi amader ekta object er vitorer onekgula element ke use korar drokar hoy tahole amra evabe destructuring kore nite pari and er jonne code repeat o off hobe 
    const { name, flags, area } = props.country;
    // console.log(name, flags)
    return (
        <div className='bg-primary-subtle'>
            <h1>{name.common}</h1>
            <p>Area : {area}</p>
            <img src={flags.svg} alt="" />
        </div>
    );
};

export default DisplayInfo;