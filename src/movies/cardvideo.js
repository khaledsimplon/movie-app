import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import './cardvideo.css'
import { Link } from 'react-router-dom';
import Edit from './edit';
const Cardvideo = (props) => {
  const key=props.state.i
  
  return (
    
      <Card className="moviecard" >
        <CardImg  top width="100%" src={props.state.moviepicture} />
        <CardBody class="card-body" >
          <CardTitle class="card-contenu" ><span id="cardfilm-title">{props.state.moviename}</span></CardTitle>
          <CardSubtitle  ><span class="card-rate">{props.state.moviestar}</span></CardSubtitle>
          <div className="video-bouton">
          <Link to="/description"><Button  onClick={()=>props.showDescription(key)} >watch</Button></Link>
          
          <Button onClick={()=>props.deleting(key)}  >X</Button>
          <Button id="plusbtn" onClick={()=>props.addFavorite(key)} >+</Button>
         <Edit state={props.state} handlechangename={props.handlechangename} edit={props.edit} />
         </div>
        </CardBody>
      </Card>
    
  );
};

export default Cardvideo;
//onClick={()=>props.deleting(key)}