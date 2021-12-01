//import logo from './logo.svg';
import './App.css';
import {useState} from "react"; 

import foods from "./foods.json"

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'


function App() {

const [food, setFood] = useState( foods )

const [filterfood, setFilter] = useState(foods)

  function addfood (body){

  const storedfood = food.concat([body]) 

  setFood(storedfood)

  }


  function filterfoods(input){
    
  const results = food.filter(food => food.name.toLowerCase().includes(input.toLowerCase() ))
  
   setFilter(results)
  
  }

  function deletethis(index){

    const clonearr =[...filterfood]

    clonearr.splice(index, 1)
    
    setFilter(clonearr)

  }

  return (
<>
    <h1> Food List </h1>
    
    <div className="App">

      <AddFoodForm parentCb={ addfood } />

      <Search parentCb={ filterfoods }/>

      { filterfood.map((foods2, index ) => {

              return(

              <>
                

                <FoodBox thekey={index} foodlist={foods2} handledelete={deletethis} />

        
              </>

              )
        
          }
        )
      }       
    </div>
</>    
  );
}

export default App;
