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
                  <Link to="/ride_offers">
                    <p class="text-success">View Ride Offers</p>
                  </Link>
                </li>
              </Nav.Link>

              <Nav.Link href="#form">
                <li>
                  <Link to="/ride_offer_form">
                    <p class="text-success">Create Ride Offer</p>
                  </Link>
                </li>
              </Nav.Link> 
              
              <Nav.Link href="#link">
                <li>
                  <Link to="/ride_seeks">
                    <p class="text-success">View Ride Requests</p>
                  </Link>
                </li>
              </Nav.Link>   

              <Nav.Link href="#form">
                <li>
                  <Link to="/ride_seek_form">
                    <p class="text-success">Create Ride Request</p>
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
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/ride_offers">
            <RideOfferPage />
          </Route>
          <Route path="/ride_offer_form">
            <RideOfferForm />
          </Route>
          <Route path="/ride_seeks">
            <RideSeekPage />
          </Route>   
          <Route path="/ride_seek_form">
            <RideSeekForm />
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

//this is the ride offer form
function RideOfferForm() {
  const [name_u, setName] = useState('')
  const [from_u, setFrom] = useState('')
  const [to_u, setTo] = useState('')
  const [when_u, setWhen] = useState('')
  const [cost_u, setCost] = useState('')
  const [seats_u, setSeats] = useState('')
  const [will_drop_u, setWillDrop] = useState(false)
  const [extra_details_u, setExtraDetails] = useState('')

  const [isSent, setIsSent] = useState(false)
  const submit = e => {
    e.preventDefault();
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
      setIsSent(true);
    }, (error) => {
      console.log(error);
    });
  }

  const successMessage = 
                          <div>
                            <p>Ride offer post completed successfully!</p>                   
                            <Link to="/ride_offers">
                              <p class="text-success">View ride offers</p>
                            </Link>
                            <Link to="/ride_offer_form" onClick={refreshPage}>
                              <p class="text-success">Create another ride offer</p>
                            </Link>                            
                          </div>
  // check for successful submit
  return (
    isSent ?

    successMessage

    :

    <div>

    <h1 class = "text-success"> Create Ride Offer</h1>
    <Form.Text className="text-muted">
      We'll never share your personal information with anyone else.
    </Form.Text>
    <br />

    <Form onSubmit={submit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label> </Form.Label>
        <Input
          type="text" 
          placeholder="Name" 
          className="sizing" 
          value={name_u}
          onChange={e => setName(e.target.value)}
        />

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          type="text" 
          placeholder="From" 
          className="sizing" 
          value={from_u}
          onChange={e => setFrom(e.target.value)}/>

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          type="text" 
          placeholder="To" 
          className="sizing" 
          value={to_u}
          onChange={e => setTo(e.target.value)}
        />

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          type="datetime-local" 
          placeholder="DateTime" 
          className="sizing" 
          value={when_u}
          onChange={e => setWhen(e.target.value)}
        />

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          placeholder="Cost" 
          className="sizing" 
          value={cost_u}
          onChange={e => setCost(e.target.value)}
        />

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          placeholder="Seats Available" 
          className="sizing" 
          value={seats_u}
          onChange={e => setSeats(e.target.value)}
        />

        <br />
        <br />

        <textarea 
          placeholder="Extra Details"
          rows="3"
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

//this is the ride offer page information
function RideOfferPage() {
    const [offer, setOffer] = useState([]);
    const [from_u, setFrom] = useState('');
    const [to_u, setTo] = useState('');
    const [when_u_lte, setWhenLTE] = useState('');
    const [when_u_gte, setWhenGTE] = useState('');
    const [cost_u, setCost] = useState('');
    const [link, setLink] = useState("http://localhost:8000/api/ride_offer/?format=json");
    var options = {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: 'numeric', 
                    minute: 'numeric', 
                    second: 'numeric',
                    timeZone: 'America/Los_Angeles'
                  };
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(link);
            setOffer(result.data);
        };
    fetchData();

    });

    const submit = e => {
      e.preventDefault()
      setLink("http://localhost:8000/api/ride_offer/?from_u__icontains="+from_u+"&to_u__icontains="+to_u+"&when_u__lte="+when_u_lte+"&when_u__gte="+when_u_gte+"&cost_u__lte="+cost_u+"&format=json")      
    }

    return (
        <div>
          <div>
          <h5>Filter</h5>
            <Form inline onSubmit={submit}>
              <Input inline onSumbit={submit}
                placeholder="From" 
                className="filter-size"
                value={from_u}
                onChange={e => setFrom(e.target.value)}
              />

              <Input inline onSubmit={submit}
                placeholder="To" 
                className="filter-size"
                value={to_u}
                onChange={e => setTo(e.target.value)}
              />

              <p> Before</p>
              <Input inline onSubmit={submit}
                type="datetime-local"
                placeholder="Before" 
                className="filter-size"
                value={when_u_lte}
                onChange={e => setWhenLTE(e.target.value)}
              />

              <p> After</p>
              <Input inline onSubmit={submit}
                type="datetime-local"
                placeholder="After" 
                className="filter-size"
                value={when_u_gte}
                onChange={e => setWhenGTE(e.target.value)}
              />

              <Input inline onSubmit={submit}
                type="text"
                placeholder="Cost (below)" 
                className="filter-size"
                value={cost_u}
                onChange={e => setCost(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Filter
              </Button>
            </Form>
          </div>
          <div>
            <br />
            <h1 class="text-success"> Ride Offers</h1>
            <ul>
                {offer.map(offer => (
                        <Card border="success" title="" extra={<Icon type="user"/>} style = {{marginBottom: 20 + 'px'}}>
                            <Card.Header>{offer.from_u} to {offer.to_u}</Card.Header>
                            <Card.Body>
                              <Card.Text>
                                <h6>Driver: {offer.name_u}</h6>
                                <h6>
                                  When: {offer.when_u}                                                                   
                                </h6>
                                <h6>Cost: ${offer.cost_u}</h6>
                                <h6>Seats: {offer.seats_u}</h6>
                                <h6>{offer.will_drop_u ? "willing to drop off" : "not willing to drop off"}</h6>
                                <h6>Note from Driver: {offer.extra_details_u}</h6>
                              </Card.Text>
                            </Card.Body> 
                        </Card>
                    ))}
            </ul>
          </div>
        </div>
    );
}

// page for ride requests
function RideSeekPage() {
    const [seek, setSeek] = useState([] );
    const [from_u, setFrom] = useState('')
    const [to_u, setTo] = useState('')
    const [when_u_lte, setWhenLTE] = useState('')
    const [when_u_gte, setWhenGTE] = useState('')
    const [link, setLink] = useState("http://localhost:8000/api/ride_seek/?format=json")
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(link);
            setSeek(result.data);
        };
    fetchData();
    });

    const submit = e => {
      e.preventDefault()
      setLink("http://localhost:8000/api/ride_seek/?from_u__icontains="+from_u+"&to_u__icontains="+to_u+"&when_u__lte="+when_u_lte+"&when_u__gte="+when_u_gte+"&format=json")      
    }

    return (
      <div>
        <div>
          <h5> Filter</h5>
          <Form inline onSubmit={submit}>
              <Input inline onSumbit={submit}
                placeholder="From" 
                className="filter-size"
                value={from_u}
                onChange={e => setFrom(e.target.value)}
              />

              <Input inline onSubmit={submit}
                placeholder="To" 
                className="filter-size"
                value={to_u}
                onChange={e => setTo(e.target.value)}
              />

              <p> Before</p>
              <Input inline onSubmit={submit}
                type="datetime-local"
                placeholder="Before" 
                className="filter-size"
                value={when_u_lte}
                onChange={e => setWhenLTE(e.target.value)}
              />

              <p> After</p>
              <Input inline onSubmit={submit}
                type="datetime-local"
                placeholder="After" 
                className="filter-size"
                value={when_u_gte}
                onChange={e => setWhenGTE(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Filter
              </Button>
            </Form>
        </div>
        <div>
            <br />
            <h1 class="text-success"> Ride Requests</h1>
            <ul>
                {seek.map(seek => (
                        <Card border="success" title="" extra={<Icon type="user"/>} style = {{marginBottom: 20 + 'px'}}>
                            <Card.Header>{seek.from_u} to {seek.to_u}</Card.Header>
                            <Card.Body>
                              <Card.Text>
                                <h6>Rider: {seek.name_u}</h6>
                                <h6>When: Around {seek.when_u}</h6>
                                <h6>Note from Rider: {seek.extra_details_u}</h6>
                              </Card.Text>
                            </Card.Body> 
                        </Card>
                    ))}
            </ul>
          </div>
      </div>  
    );
}

// page for Ride Request form
function RideSeekForm() {
  const [name_u, setName] = useState('');
  const [from_u, setFrom] = useState('');
  const [to_u, setTo] = useState('');
  const [when_u, setWhen] = useState('');
  const [extra_details_u, setExtraDetails] = useState('');

  const [isSent, setIsSent] = useState(false)
  const submit = e => {
    e.preventDefault()
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/ride_seek/',
        data: {
          "name_u": name_u,
          "from_u": from_u,
          "to_u": to_u,
          "when_u": when_u,
          "extra_details_u": extra_details_u
        }
      })
      .then((response) => {
        console.log(response);
        setIsSent(true);
      }, (error) => {
        console.log(error);
      });
  }

  const successMessage = 
                          <div>
                            <p>Ride offer post completed successfully!</p>                   
                            <Link to="/ride_seeks">
                              <p class="text-success">View ride offers</p>
                            </Link>
                            <Link to="/ride_seek_form" onClick={refreshPage}>
                              <p class="text-success">Create another ride offer</p>
                            </Link>                            
                          </div>
  // check for successful submit
  return (
    isSent ?

    successMessage

    :

    <div>

    <h1 class = "text-success"> Create Ride Request</h1>
    <Form.Text className="text-muted">
      We'll never share your personal information with anyone else.
    </Form.Text>
    <br />

    <Form onSubmit={submit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label> </Form.Label>
        <Input
          type="text" 
          placeholder="Name" 
          className="sizing" 
          value={name_u}
          onChange={e => setName(e.target.value)}
        />

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          type="text" 
          placeholder="From" 
          className="sizing" 
          value={from_u}
          onChange={e => setFrom(e.target.value)}/>

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          type="text" 
          placeholder="To" 
          className="sizing" 
          value={to_u}
          onChange={e => setTo(e.target.value)}
        />

        <br />
        <br />

        <Form.Label> </Form.Label>
        <Input 
          type="datetime-local" 
          placeholder="DateTime" 
          className="sizing" 
          value={when_u}
          onChange={e => setWhen(e.target.value)}
        />

        <br />
        <br />

        <textarea 
          placeholder="Extra Details"
          rows="3"
          value={extra_details_u}
          onChange={e => setExtraDetails(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
      Submit
    </Button>
    </Form>
    </div>
  );
  
}

function refreshPage() {
    window.location.reload(false);
}
