import React, { Component } from "react";
import Navbar from "../CustomNavbar/CustomNavbar";
import { Row, Col,Image } from 'react-bootstrap';
import iphone from '../../assets/iphone.png'
import gift from '../../assets/unnamed.png'
import './Info.css' // Import the css file foe styling
import Axios from 'axios' // For Api Integration
import { AiFillGift ,AiOutlineHome} from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
        staticdata: [{image:iphone, date: 'Expected to ship: 30-sep 3,2020', item: 'Apple Iphone 12', description: 'Gray   64GB', number: '12365478120',AT:'AT&T Unlimited Extra' },
        {image:gift, date: 'Expected to ship: 30-sep 3,2020', item: 'Apple Iphone XR', description: 'Balck   128GB', number: '1236558120',AT:'AT&T Unlimited Extra' }],
    }
}
  navigateto = () => {
    window.location = `/OrderDetail/${'147852'}`
}
componentDidMount() {
  let id = this.props.match.params.id;

  Axios.get(`{{baseUrl}}/customer/12546/order?limit=59817999/${id}`)
      .then(res => {
          this.setState({ staticdata: res.data.order })
      })

  // .catch(err => {
  //     alert("Venue get Failed");

  // })
}
  render() {
    return (
    <div>
      <Navbar />
          {this.state.staticdata.map(x =>
      <div className="boxInfo" style={{cursor:'pointer'}} onClick={() => this.navigateto()}>
  
        <Row>
          <Col sm={5} xs={12}  >
            <Image src={x.image} className="Boximage"/>
          </Col>
          <Col sm={7} xs={12}>
            <div className="TopDiv">
        <div className="giftstyling">
          <AiFillGift size={50}/>
        </div>
        <div  className="giftstylings">
          <FiTruck size={45}/>
        </div>
        <div className="giftstylings">
          <AiOutlineHome size={50}/>
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
export default Info;
