import React from "react";
import {Icon, Input} from 'antd';
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


//create the links to the two different pages

export default function Home() {
  return (
    <Router>
      <div>
        <Col xs={6} md={4}>
          <Image
            src="https://lmulions.com/images/logos/Cal_Poly.png"
            roundedCircle
          />
        </Col>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <p class="text-success">CALPOLYRIDES</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link href="#link">
                <li>
                  <Link to="/main">
                    <p class="text-success">Main Feed</p>
                  </Link>
                </li>
              </Nav.Link>

              <Nav.Link href="#home">
                <li>
                  <Link to="/profile">
                    <p class="text-success">Profile</p>
                  </Link>
                </li>
              </Nav.Link>

              <Nav.Link href="#form">
                <li>
                  <Link to="/driverform">
                    <p class="text-success">Driver Form</p>
                  </Link>
                </li>
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/driverform">
            <DriverForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//this is the profile page information
function ProfilePage() {
  return (
    <div>
      <Card border="success" style={{ width: "100rem" }}>
        <Card.Header> Your Profile</Card.Header>
        <Card.Body>
          <Card.Title>Karson Slocum</Card.Title>
          <Card.Text>
            Year : Senior Major : Comp Sci Rating : 4.5/5
            <br />
            <br />
            <h5>Car Information</h5>
            Make/Model : Mazda 3 Seats : 4
            <br />
            <br />
            <h5>Contact Information</h5>
            Phone Number : 888-888-8888 Email : Kslocum@calpoly.edu
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

//this is the driver form 
function DriverForm() {
  return (
    <div>
   
    <h1 class = "text-success"> Driver Form</h1>
    <Form.Text className="text-muted">
      We'll never share your personal information with anyone else.
    </Form.Text>

  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Input placeholder="Name" className="sizing"></Input>
   
    <Form.Label>Cost</Form.Label>
    <Input placeholder="Cost" className="sizing"></Input>

    <Form.Label>To</Form.Label>
    <Input placeholder="To" className="sizing"></Input>

    <Form.Label>From</Form.Label>
    <Input placeholder="From" className="sizing"></Input>

    <Form.Label>Seats Available</Form.Label>
    <Input placeholder="Seats Available" className="sizing"></Input>

  </Form.Group>


  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Willing to drop off on the way?" />
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
</div>
  );
}

//this is the main page information
function MainPage() {
  return (
    <div>
       
      <Card border="success" style={{ width: "100rem" }}>
        <Card.Header> Offered By : Mahima Choudhary</Card.Header>
        <Card.Body>
          <Card.Text>
            <h5>From/To </h5>
            LA -> SF
            <br />
            <br />
            <h5>Date/Time </h5>
            Friday 3/3 @ 4:00PM
            <br />
            <br />
            <h5>Cost</h5>
            $20
            <br />
            <br />
            <h5>Spots Available</h5>
            4 spots left 
            <Icon type="user" />
             <Icon type="user" /> <Icon type="user" /> <Icon type="user" />
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="success" style={{ width: "100rem" }}>
        <Card.Header> Offered By : Kaitlin Clever</Card.Header>
        <Card.Body>
          <Card.Text>
            <h5>From/To </h5>
            Oregon -> Walnut Creek
            <br />
            <br />
            <h5>Date/Time </h5>
            Friday 3/3 @ 4:00PM
            <br />
            <br />
            <h5>Cost</h5>
            $25
            <br />
            <br />
            <h5>Spots Available</h5>
            1 spot left 
            <Icon type="user" />
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="success" style={{ width: "100rem" }}>
        <Card.Header> Offered By : Garrett Lew</Card.Header>
        <Card.Body>
          <h5>From/To </h5>
          20 -> 21
          <br />
          <br />
          <h5>Date/Time </h5>
          Friday 3/3 @ 4:00PM
          <br />
          <br />
          <h5>Cost</h5>
          $20
          <br />
          <br />
          <h5>Spots Available</h5>
          3 spots left   <Icon type="user" /> <Icon type="user" />{" "}
          <Icon type="user" />
        </Card.Body>
      </Card>
         
    </div>
  );
}

