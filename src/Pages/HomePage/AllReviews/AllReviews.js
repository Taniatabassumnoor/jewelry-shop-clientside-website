import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';

const AllReviews = () => {
    const [allReview,setAllReview] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`https://shielded-caverns-45156.herokuapp.com/allreviews`)
        .then(res=>res.json())
        .then(data=>setAllReview(data))
    },[])
    return (
        <Container>
             <h1 style={{textAlign:"center",color:"#000"}}>All reviews</h1>
        
             <Row md={4} lg={3} sm={1}>
             {
    allReview.map(review=>(
        <>
<div>
<Col sm={12} md={4} className="mb-5 mt-5 ">
<Card style={{ width: "18rem" }}>
<Card.Img variant="top" src={user.imgUrl} />
<Card.Body>
<Card.Title className="logo" style={{ fontWeight: "bolder" }}>
  {review.customerName}
</Card.Title>
<Card.Text> {review.customerReview}</Card.Text>
<Rating
  readonly
  emptySymbol="fa fa-star-o "
  fullSymbol="fa fa-star "
  fractions={2}
  initialRating={review.customerRating}
></Rating>
</Card.Body>
</Card>
</Col>
</div>
</>
 
        
    ))
}
        </Row>

    
        </Container>
    );
};

export default AllReviews;

