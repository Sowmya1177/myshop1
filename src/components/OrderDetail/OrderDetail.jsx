import React, { Component } from "react";
import Navbar from "../CustomNavbar/CustomNavbar";
import { Row, Col, Image,  } from 'react-bootstrap';
import gift from '../../assets/unnamed.png'
import './OrderDetail.css'
import { AiFillGift, AiOutlineHome } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import Axios from 'axios' // For Api Integration

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticdata: [
      {image:gift, date: 'Expected to ship: 30-sep 3,2020', item: 'Apple Iphone XR', description: 'Balck   128GB', number: '1236558120',AT:'AT&T Unlimited Extra' }],
      orderdetail:{item:'Item Order 3',desc:'Dont forget to let us know if you accept the new ship date. We all cancel yoiur order if we don,t hear from uou soon',
   estdate:'Mon, Apr 29- Sat , May, 2019',origdate:'Wed, Apr 19- Sat , May, 2019',address:'1234 Peachtree Industrial Blvd Peachtree City , GA 67895-55662',
  tracking:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' }
    }
}
componentDidMount() {
  let id = this.props.match.params.id;

  Axios.get(`{{baseUrl}}/customer/12546/order?limit=59817999/${id}`)
      .then(res => {
          this.setState({ staticdata: res.data.order })
          this.setState({orderdetail:res.data.order.detail})
      })

  // .catch(err => {
  //     alert("Venue get Failed");

  // })
}
 handleacceptp = () =>{
alert("Your date has been accepted")
}
handlecancel = () =>{
  alert("Your date has been Cancelled")
  }
  render() {
    const {orderdetail} = this.state
    return (
      <div>
        <Navbar />
        <h3 className="boxInfos">Order Detail</h3>
        <div className="boxInfo">
          {/* {this.state.staticdata.map(x => */}
          <Row>
            <Col sm={12} xs={12}>
              <p className="TopTitle">Heads up: The shiping date changed</p>
              <p className="subheadingTitle">Before we can complete your order ,review the new data to confirm if you are OK with it</p>

              <div className="middledivdetail">
                <div className="orderdetail">
                  <AiFillGift size={60} />
                </div>
                <div className="orderdetail">
                  <FiTruck size={55} />
                </div>
                <div className="orderdetails">
                  <AiOutlineHome size={60} />
                </div>
              </div>
              <div className="genericdiv">
                <h5 className="orderBold">{orderdetail.item}</h5>
                <h5 className="ordersimple">{orderdetail.desc}</h5>
                <h5 className="orderblack">New estimated ship date:</h5>
                <h5 className="ordersimple">{orderdetail.estdate} </h5>
                <h5 className="orderblack">Original estimated ship date:</h5>
                <h5 className="ordersimple">{orderdetail.origdate} </h5>
                <h5 className="orderblack">Address:</h5>
                <h5 className="ordersimple">{orderdetail.address} </h5>
                <h5 className="orderblack">USPS tracking:</h5>
                <h5 className="ordersimple">{orderdetail.tracking} </h5>


              </div>
              <button className="AcceptButton"
              onClick={() => this.handleacceptp()}>Accept New Ship Date</button><br/>
            <button className="CAncelButton"
             onClick={() => this.handlecancel()}>Cancel Your Order</button>
            </Col>
          </Row>
          {/* )} */}
        </div>
        {this.state.staticdata.map(x =>
      <div className="boxInfo" >
  
        <Row>
          <Col sm={4} xs={12}>
            <Image src={x.image} className="Boximage"/>
          </Col>
          <Col sm={7} xs={12}>
            <div className="TopDiv">
        <div className="giftstyling">
          <AiFillGift size={60}/>
        </div>
        <div  className="giftstylings">
          <FiTruck size={55}/>
        </div>
        <div className="giftstylings">
          <AiOutlineHome size={60}/>
        </div>
            </div>
            <div style={{marginTop:20}}>
              <h5 className="simpletext">{x.date}</h5>
              <h5 className="boldtext">{x.item}</h5>
              <h5 className="simpletext">{x.description}</h5>
              <h5 className="simpletext">{x.number}</h5>
              <h5 className="simpletext">{x.AT}</h5>
            </div>

            </Col>
        </Row>

      </div>
            )}
      </div>
    );
  }
}
export default OrderDetail;
