import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-unwrap" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li  className="current"><a className="smoothscroll" href="#about">A propos</a></li>
              <li><a className="smoothscroll" href="#resume">Mariage</a></li>
              <li><a className="smoothscroll" href="#portfolio">Evènementiel</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
              {
                resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                  return(
                    <li key={item.name}>
                      <a href={item.url} target="blank"><i className={item.className}></i></a>
                    </li>
                  )
                })
              }
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">La vie en Ross</h1>
              
            </div>
            <Carousel width='35vw' height='35vh' showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} showIndicators={false} useKeyboardArrows={true} swipeable={true}>
              {
                resumeData.carousel.map((item)=>{
                  return(
                    <div style={{ margin: -10, padding: -10, marginBottom: -50, height: '40vh', background: '#FFFFFF'}}>
                      <img alt={`${item}`} src={item.url} className="item-img"/>
                    </div>
                  )
                })
              }
            </Carousel>
         </div>
      </header>
      </React.Fragment>
    );
  }
}
