import React, { useState } from "react";


function Counter() {
    const [total, setTotal] = useState(0)
    return(
        <div>
            <p>{total}</p>

            <button onClick={setTotal(total + 1)}></button>
            <button onClick={setTotal(total -1)}></button>


        </div>
    )
}

export default Counter