import { Input } from "antd";

import { useState } from "react";

export default function AddFoodForm(props){

    const [formState, setFormState] = useState({})



    function handleSubmit (event) {

        event.preventDefault()
        
        props.parentCb(formState)
        
        setFormState({})
    }

    function handleInput(event) {

            let{ name, value } = event.target

            setFormState(Object.assign({}, formState, { [name]: value })  )
         
    }



    return(

<div className="AddFood">

<h4> Add Food Entry</h4>

<form onSubmit={handleSubmit}>

<label htmlFor="name">Name: </label>
<Input type="text" name="name" placeholder="type name" value={formState.name || ''} onChange={handleInput} />


<label htmlFor="image">Image: </label>
<Input type="text" name="image" placeholder="imageurl" value={formState.image || ''} onChange={handleInput} />
 


<label htmlFor="calories">Calories: </label>
<Input type="number" name="calories" placeholder="calories" value={formState.calories || ''} onChange={handleInput} />
 


<label htmlFor="servings">Servings: </label>
<Input type="number" name="servings" placeholder="type serving size" value={formState.servings || ''} onChange={handleInput} />
 

<br>
</br>
<button type="submit"> Create </button>

</form>
</div>

    )



}