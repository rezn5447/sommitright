import React, { Component } from 'react';
import { Navbar,
         Grid,
         Row,
         Col,
         Button,
         Thumbnail,
         ResponsiveEmbed,
         Nav,
         NavItem,
         NavDropdown,
         MenuItem,
         Carousel } from 'react-bootstrap';
import logo from './assets/logo.svg';
import S1 from './assets/Slide1.png';
import S2 from './assets/Slide2.png';
import S3 from './assets/Slide3.png';
import PH from './assets/PlaceHolder.svg';

import './App.css';

class App extends Component {
  render() {
    return (
    <div  className='container'>
      <div className="navbar-wrapper">
        <div className="container">
          <Navbar inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#" style={{fontFamily: 'Satisfy', fontSize: 36}}>SommitRight.com</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">Latest Posts</NavItem>
              <NavItem eventKey={1} href="#">Wine of the Week</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
            </Nav>
          </Navbar>
        </div>

      <Carousel>
        <Carousel.Item>
          <img width={1200} height={500} alt="900x500" src={S1}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1200} height={500} alt="900x500" src={S2}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1200} height={500} alt="900x500" src={S3}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      <Grid>
         <Row>
         <Col xs={6} md={4}>
           <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
             <h3>Thumbnail label</h3>
             <p>Description</p>
             <p>
               <Button bsStyle="primary">Button</Button>&nbsp;
               <Button bsStyle="default">Button</Button>
             </p>
           </Thumbnail>
         </Col>
         <Col xs={6} md={4}>
           <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
             <h3>Thumbnail label</h3>
             <p>Description</p>
             <p>
               <Button bsStyle="primary">Button</Button>&nbsp;
               <Button bsStyle="default">Button</Button>
             </p>
           </Thumbnail>
         </Col>
         <Col xs={6} md={4}>
           <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
             <h3>Thumbnail label</h3>
             <p>Description</p>
             <p>
               <Button bsStyle="primary">Button</Button>&nbsp;
               <Button bsStyle="default">Button</Button>
             </p>
           </Thumbnail>
         </Col>
         </Row>
       </Grid>

       <hr className="featurette-divider" />
       <div className="row featurette">
         <div className="col-md-7">
           <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
           <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
         </div>
         <div className="col-md-5">
           <img className="featurette-image img-responsive center-block" src={PH} alt="Generic placeholder image"/>
         </div>
       </div>

       <hr className="featurette-divider" />

       <div className="row featurette">
         <div className="col-md-5">
           <img className="featurette-image img-responsive center-block" src={PH} alt="Generic placeholder image"/>
         </div>
         <div className="col-md-6">
           <h2 className="featurette-heading">First Wine of the Week. <span className="text-muted">It'll blow your mind.</span></h2>
           <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
         </div>
       </div>

       <hr className="featurette-divider" />
         <div className="row featurette">
           <div className="col-md-5">
             <img className="featurette-image img-responsive center-block" src={PH} alt="Generic placeholder image"/>
           </div>
           <div className="col-md-6">
             <h2 className="featurette-heading">First Wine of the Week. <span className="text-muted">It'll blow your mind.</span></h2>
             <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
           </div>
         </div>

         <hr className="featurette-divider" />
           <div className="row featurette">
             <div className="col-md-7 col-md-push-5">
               <h2 className="featurette-heading">First Wine of the Week. <span className="text-muted">It'll blow your mind.</span></h2>
               <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
             </div>
             <div className="col-md-5 col-md-pull-7">
               <img className="featurette-image img-responsive center-block" src={PH} alt="Generic placeholder image"/>
             </div>
           </div>

           <hr className="featurette-divider" />
             <div className="row featurette">
               <div className="col-md-5">
                 <img className="featurette-image img-responsive center-block" src={PH} alt="Generic placeholder image"/>
               </div>
               <div className="col-md-6">
                 <h2 className="featurette-heading">First Wine of the Week. <span className="text-muted">It'll blow your mind.</span></h2>
                 <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
               </div>
             </div>

             <hr className="featurette-divider" />

       <footer>
         <p className="pull-right"><a href="#">Back to top</a></p>
         <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
       </footer>

  </div>
    );
  }
}

const styles = {
  carouselImg: {
    width:900,
    height:500,
    align: 'center'
   }
}
export default App;
