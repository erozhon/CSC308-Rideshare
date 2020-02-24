import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Icon, Button, Menu, Dropdown, Card, Input, Checkbox } from 'antd';
import './Home.css';

class Home extends Component{
  constructor()
  {
      super();
      this.state = {
          'offerings': []
      }
  }
  componentDidMount()
  {
      this.getOfferings();
  }

  getOfferings()
  {
      fetch('http://localhost:8000/api/ride_offer/')
          .then(results => results.json())
          .then(results => this.setState({'offerings': results}));
  } 
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Settings
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Help
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Sign Out
          </a>
        </Menu.Item>
      </Menu>
    );
    const profileButton = (<Dropdown overlay = {menu}>
      <Button>
        <Icon type = "user"/>
      </Button>
      </Dropdown>);
    const { TabPane } = Tabs;
    const { Search } = Input;
    const { TextArea } = Input;

    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    
    return (
      <div className="header">
        <p>CALPOLYRIDES</p>
      <div className="padding">
        <Tabs tabBarExtraContent={profileButton} defaultActiveKey="2" type="card">
            <TabPane
              tab={
                <span>
                  <Icon type="car" />
                  Drivers
                </span>
              }
              key="1"
            >
              <Input placeholder="Name" className="sizing"></Input>
              <Input placeholder="Cost" className="sizing"></Input>
              <Input placeholder="To" className="sizing"></Input>
              <Input placeholder="From" className="sizing"></Input>
              <br />
              <Input placeholder="Seats Available" className="sizing"></Input>
              <br />
              <TextArea rows={4} placeholder="Extra Details" className="sizing"/>
              <Checkbox onChange={onChange}>Drop off along the way</Checkbox>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button className="but">
                Create Post
              </Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="team"/>
                  Riders
                </span>
              }
              key="2"
            >
              <span>
              <Search
                placeholder="Search!"
                onSearch={value => console.log(value)}
                className="search"
              />
              <Button className="but">
                Create Post
              </Button>
              <br />
              <br />
            <ul>
                {this.state.offerings.map(function(offer, index)
                    {
                        return (
                            // <div>
                            //     <h1>{offer.from_u} -> {offer.to_u}</h1>
                            //     <p>{offer.extra_details_u}</p>
                            // </div>    
                            // )
                            <Card title="" extra={<Icon type="user"/>} style={{marginBottom: 20 + 'px'}}>
                                <h1>{offer.from_u} to {offer.to_u}</h1>
                                <p> {offer.when_u}</p>
                                <p> {offer.cost_u}</p>
                                <p> {offer.seats_u} spots left <Icon type="user"/>
                                <Icon type="user"/>
                                <Icon type="user"/>
                                <Icon type="user"/></p>
                            </Card>
                        )}

                    )}

            </ul>
              </span>
            </TabPane>
          </Tabs>
         
      </div>
      </div>
    );
  }
}

export default Home;
