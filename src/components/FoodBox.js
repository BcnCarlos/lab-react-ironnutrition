import { Card, Col, Button } from "antd";
//import { useState } from "react";
import React from "react";

export default function FoodBox(props){

return (

<Col>
  <Card 

    title={props.foodlist.name}
    style={{ width: 230, height: 300, margin: 10 }}
  >
    <img src={props.foodlist.image} height={60} alt={props.foodlist.name} />

    <p>Calories: {props.foodlist.calories} </p>
    <p>Servings: {props.foodlist.servings} </p>
    <p>
      <b>Total Calories:  {props.foodlist.calories * props.foodlist.servings}   </b> kcal
    </p>
    <Button type="primary" onClick={ ()=> props.handledelete(props.thekey)}> Delete </Button>
  </Card>
</Col>



)


}
