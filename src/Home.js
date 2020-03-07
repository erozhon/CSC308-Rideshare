import React, {useState, useEffect} from "react";
import {Icon, Input} from 'antd';
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from 'axios';
//import TimePicker from "antd/lib/time-picker";
//import DatePicker from "antd/lib/date-picker";


//create the links to the two different pages

export default function Home() {
  return (
    <Router>
      <div>
        <Col xs={6} md={4}>
          <Image
            src="https://lmulions.com/images/logos/Cal_Poly.png"
            roundedCircle
          />
        </Col>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <p class="text-success">CALPOLYRIDES</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link href="#link">
                <li>
                  <Link to="/main">
                    <p class="text-success">Main Feed</p>
                  </Link>
                </li>
              </Nav.Link>

              <Nav.Link href="#home">
                <li>
                  <Link to="/profile">
                    <p class="text-success">Profile</p>
                  </Link>
                </li>
              </Nav.Link>

              <Nav.Link href="#form">
                <li>
                  <Link to="/driverform">
                    <p class="text-success">Driver Form</p>
                  </Link>
                </li>
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/driverform">
            <DriverForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//this is the profile page information
function ProfilePage() {
  return (
    <div>
      <Card border="success" style={{ width: "100rem" }}>
        <Card.Header> Your Profile</Card.Header>
        <Card.Body>
          <Card.Title>Karson Slocum</Card.Title>
          <Card.Text>
            Year : Senior Major : Comp Sci Rating : 4.5/5
            <br />
            <br />
            <h5>Car Information</h5>
            Make/Model : Mazda 3 Seats : 4
            <br />
            <br />
            <h5>Contact Information</h5>
            Phone Number : 888-888-8888 Email : Kslocum@calpoly.edu
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

//this is the driver form
function DriverForm() {
  const [name_u, setName] = useState('')
  const [from_u, setFrom] = useState('')
  const [to_u, setTo] = useState('')
  const [when_u, setWhen] = useState('')
  const [cost_u, setCost] = useState('')
  const [seats_u, setSeats] = useState('')
  const [will_drop_u, setWillDrop] = useState(false)
  const [extra_details_u, setExtraDetails] = useState('')
  const submit = e => {
    e.preventDefault()
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/ride_offer/',
        data: {
          "name_u": name_u,
          "from_u": from_u,
          "to_u": to_u,
          "when_u": when_u,
          "seats_u": seats_u,
          "cost_u": cost_u,
          "will_drop_u": will_drop_u,
          "extra_details_u": extra_details_u
        }
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });  
  }


  return (
    <div>

    <h1 class = "text-success"> Driver Form</h1>
    <Form.Text className="text-muted">
      We'll never share your personal information with anyone else.
    </Form.Text>

    <Form onSubmit={submit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <input 
          type="text" 
          placeholder="Name" 
          className="sizing" 
          value={name_u}
          onChange={e => setName(e.target.value)}
        />

        <Form.Label>To</Form.Label>
        <Input 
          type="text" 
          placeholder="To" 
          className="sizing" 
          value={to_u}
          onChange={e => setTo(e.target.value)}
        />

        <Form.Label>From</Form.Label>
        <Input 
          type="text" 
          placeholder="From" 
          className="sizing" 
          value={from_u}
          onChange={e => setFrom(e.target.value)}/>

        <Form.Label>When</Form.Label>
        <input 
          type="datetime-local" 
          placeholder="DateTime" 
          className="sizing" 
          value={when_u}
          onChange={e => setWhen(e.target.value)}
        />

        <Form.Label>Cost</Form.Label>
        <Input 
          placeholder="Cost" 
          className="sizing" 
          value={cost_u}
          onChange={e => setCost(e.target.value)}
        />

        <Form.Label>Seats Available</Form.Label>
        <Input 
          placeholder="Seats Available" 
          className="sizing" 
          value={seats_u}
          onChange={e => setSeats(e.target.value)}
        />

        <textarea 
          value={extra_details_u}
          onChange={e => setExtraDetails(e.target.value)}
        />

      </Form.Group>


      <Form.Group controlId="formBasicCheckbox">
        <Form.Check 
          type="checkbox" 
          label="Willing to drop off on the way?" 
          onChange={e => setWillDrop(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
      Submit
    </Button>
    </Form>
    </div>
  );
  
}

//this is the main page information
function MainPage() {
    const [offer, setOffer] = useState([] );
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8000/api/ride_offer/?format=json',);
            console.log("result.data: ", result.data);
            setOffer(result.data);
            console.log("offer1: ", offer);
            console.log("offer2: ", offer);
        };
    fetchData();
    console.log("offer3: ", offer);
    });

    return (
        <ul>
            {offer.map(offer => (
                <li>
                    <Card title="" extra={<Icon type="user"/>} style = {{marginBottom: 20 + 'px'}}>
                        <h1>{offer.from_u} to {offer.to_u}</h1>
                        <p> {offer.when_u} </p>
                        <p> {offer.cost_u} </p>
                        <p> {offer.seats_u} spots left <Icon type="user"/></p>
                        <Icon type="user"/>
                    </Card>
                </li>
                ))}
        </ul>
    );
}