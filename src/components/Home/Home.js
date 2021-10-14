import React from "react";
import { Button, Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user, logOut } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        borderRadius: "25px",
      }}
    >
      <Card
        style={{
          width: "18rem",
        }}
      >
        <Card.Img variant="top" src={user?.photoURL} />
        <Card.Body>
          <Card.Title>{user?.displayName}</Card.Title>
          <Card.Text>Thank You </Card.Text>
          <Button onClick={logOut} variant="primary">
            Logout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
