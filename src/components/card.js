import React from "react";
import { Card, Button, Badge, ListGroup } from "react-bootstrap";
const RecipeCard = (props) => {
  return (
    <Card
      style={{
        height: "500px",
        width: "90%",
        margin: "20px",
      }}
    >
      <Card.Img variant="top" src={props.image} style={{ height: "200px" }} />
      <Card.Body style={{ overflow: "auto" }}>
        <Card.Title>{props.title}</Card.Title>
        {props.labels.map((label) => (
          <Badge variant="secondary">{label}</Badge>
        ))}
        <div style={{ overflow: "auto" }}>
          <Card.Text>
            <h3>Ingredients</h3>

            <ListGroup variant="flush">
              {props.ingredients.map((ingredirent) => (
                <ListGroup.Item>{ingredirent}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Text>
          <Button variant="primary" href={props.recipeurl} target="blank">
            Recipe
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
