import React from "react"
import Card from "react-bootstrap/Card"
import MyPic from './self_image.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MyPic} />
        <Card.Body>
            <Card.Title>Manuel Estrada / mestrad2</Card.Title>
            <Card.Text>
            I currently work for Wells Fargo and I enjoy gaming as a hobby.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard