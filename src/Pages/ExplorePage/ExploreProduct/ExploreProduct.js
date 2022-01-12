// import React from "react";
// import { Card, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// const ExploreProduct = (props) => {
//   const { name, price, img, description, _id } = props.product;
//   return (
//     <div>
//       <Col sm={12} className="mb-5 mt-5">
//         <Card style={{  height: "650px" }}>
//           <Card.Img variant="top" src={img} style={{ height: "300px" }} />
//           <Card.Body>
//             <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
//               {name}
//             </Card.Title>
//             <Card.Text> {description}</Card.Text>
//             <Card.Text
//               className="logo"
//               style={{ fontWeight: "bolder", color: "red" }}
//             >
//               Price: ${price}
//             </Card.Text>
//             <Link to={`/products/${_id}`}>
//               <button className="btn btn-danger">Buy now</button>
//             </Link>
//           </Card.Body>
//         </Card>
//       </Col>
//     </div>
//   );
// };

// export default ExploreProduct;