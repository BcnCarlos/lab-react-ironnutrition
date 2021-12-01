import { Input } from "antd";

import { useState } from "react";

export default function Search( props) {

const[letter, setLetter] = useState('')

function handlechange(event){

setLetter(event.target.value)

props.parentCb(letter)

}


return (
    <div className="search">


<form>

<label htmlFor="name">Search: </label>
<Input type="text" name="name" placeholder="Enter Search Query"  value={letter} onChange={handlechange} />

<br>
</br>


</form>


    </div>
)

}
