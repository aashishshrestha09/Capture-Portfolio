import React, {useState} from 'react'

export default function Toogle({children}) {
    const [toogle, setToogle] = useState(true);
    return (
        <div onClick={() => setToogle(!toogle)}>
            {toogle ? children : ""}
        </div>
    )
}
