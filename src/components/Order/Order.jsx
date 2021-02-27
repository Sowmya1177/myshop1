import React, { Component } from "react";
import Navbar from "../CustomNavbar/CustomNavbar";
import { Row, Col, Image } from 'react-bootstrap';
import iphone from '../../assets/iphone.png'
import './Order.css' // Import the css file foe styling
import Axios from 'axios' // For Api Integration
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staticdata: [{ Orderid: '123456', orderStatus: 'Ordered', Address: 'Street: 437 Lytton, City: Palo Alto, State: CA, Zip: 94301', Carrier: 'USPS' }],
        }




    }
    componentDidMount() {

        // here is the api that hit on the load page
        Axios.get(`{{baseUrl}}/customer/147852/order?limit=59817999`)
            .then(res => {
                this.setState({ staticdata: res.data.order })
            })

        // .catch(err => {
        //     alert("Venue get Failed");

        // })
    }
    navigateto = (id) => {
        window.location = `/OrderItem/${id}`
        // Switch to the next Component
    }
    render() {
        return (
            <div>
                <Navbar />  {/* Import the  component of NAVBAR */}
                <h3 className="boxTitle">Recent Order</h3>
                <div className="box">

                    {this.state.staticdata.map(x =>
                        <div style={{ cursor: 'pointer' }} onClick={() => this.navigateto(x.Orderid)}>
                            <Col sm={7}>
                                <div className="detail">
                                    <h5 className="firstHead"><span className="spanHead">Order Id:  </span> <span>     {x.Orderid}</span></h5>
                                    <h5><span className="secondHead">Order Status:  </span> <span>     {x.orderStatus}</span></h5>
                                    <h5 className="thirdHead">Shipping Address:</h5>
                                    <h5 className="fourHead">{x.Address}</h5>
                                    <h5><span className="fiveHead">Carrier:  </span> <span>     {x.Carrier}</span></h5>

                                </div>
                            </Col>
                            <Row>
                                <Col sm={4}>
                                    <Image src={iphone} className="image" />
                                </Col>

                            </Row>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default Order;
