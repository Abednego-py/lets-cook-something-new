import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import Tags from './Tags';
import '../assets/css/card.css'

export default function FoodItems() {
  return (
    <div>
         <Card style={{
            'width': '20%',
            'height' : '60vh',
            'cursor': 'pointer'
         }}
         className='card-style'
         >
             <img alt="Sample" src="https://picsum.photos/300/200" style={{
                'height' : '40%'
             }} />

             <CardBody>
                <CardTitle tag={'h4'} style={{'border': '1px solid black'}} className='card-title'>
                    Fried rice and egusi soup
                </CardTitle>
             </CardBody>

             <div style={{'display': 'flex'}}>
            <Tags></Tags>
             <Tags></Tags>
             <Tags></Tags>
             </div>
        
         </Card>
    </div>
  )
}
