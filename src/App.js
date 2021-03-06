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
import Img1 from './assets/Wine/1/1.jpg';
import Img2 from './assets/Wine/2/2.jpg';
import Img3 from './assets/Wine/3/3.jpg';
import PH from './assets/PlaceHolder.svg';
import TD from './assets/thumbnaildiv.png';

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
           <Thumbnail src={TD} alt="242x200">
             <h3>Blog Post #1</h3>
             <p>A small snippet of what you wrote here with a link to view more</p>
             <p>
               <Button bsStyle="default">View Details >></Button>
             </p>
           </Thumbnail>
         </Col>
         <Col xs={6} md={4}>
           <Thumbnail src={TD} alt="242x200">
             <h3>Blog Post #2</h3>
             <p>A small snippet of what you wrote here with a link to view more</p>
             <p>
               <Button bsStyle="default">View Details >></Button>
             </p>
           </Thumbnail>
         </Col>
         <Col xs={6} md={4}>
           <Thumbnail src={TD} alt="242x200">
             <h3>Blog Post #3</h3>
             <p>A small snippet of what you wrote here with a link to view more</p>
             <p>
               <Button bsStyle="default">View Details >></Button>
             </p>
           </Thumbnail>
         </Col>
         </Row>
       </Grid>

       <hr className="featurette-divider" />
       <div className="row featurette">
         <div className="col-md-7">
           <h2 className="featurette-heading">Au Bon Climat  <span className="text-muted">  Santa Barbara, California</span></h2>
           <p className="lead">
             I had the pleasure of doing a tasting at au bon climate this week.
             This Pinot noir was one of my favorites. Light bodied, with some minerality and some ripe cherry on the nose.
             Limited cases produced. I recommend this wine with an appetizer before dinner or if you want a red wine on a hot day
           </p>
         </div>
         <div className="col-md-5">
           <img className="featurette-image img-responsive center-block" src={Img1} alt="Generic placeholder image"/>
         </div>
       </div>

       <hr className="featurette-divider" />

       <div className="row featurette">
         <div className="col-md-5">
           <img className="featurette-image img-responsive center-block" src={Img2} alt="Generic placeholder image"/>
         </div>
         <div className="col-md-6">
           <h2 className="featurette-heading">First Tasting of the Week. <span className="text-muted">Santa Barbara, California.</span></h2>
           <p className="lead">
              A great time wine tasting with @mmazess
              #cantcomplain #santabarbara #california #wine #winetime #winetasting
              #goodday #goodtimes #goodvibes #sauvignonblanc #cabernetsauvignon #bordeux
              #bordeauxblends #sommelier #sommelierlife #whitewine #redwine #catchingup
              #glasses #yes #wineandsunsets #winery
           </p>
         </div>
       </div>

       <hr className="featurette-divider" />
         <div className="row featurette">
           <div className="col-md-5">
             <img className="featurette-image img-responsive center-block" src={Img3} alt="Generic placeholder image"/>
           </div>
           <div className="col-md-6">
             <h2 className="featurette-heading">Ristorante Trattoria Da Conte     <span className="text-muted">Klosterneuburg, Austria</span></h2>
             <p className="lead">
               Awesome primitivo aka Zinfandel with Gorgonzola pasta.
               I am in love with all wines but with this pairing I would have to say what grows together goes together.
             </p>
           </div>
         </div>

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
