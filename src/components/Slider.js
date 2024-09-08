import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Slider.css';
import img1 from '../imagesSlider/img2.jpg';  
import img2 from '../imagesSlider/img11.jpg';
import img3 from '../imagesSlider/img4.jpg';
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prev) => {
      let newIndex = prev + n;
      return newIndex > 3 ? 1 : newIndex < 1 ? 3 : newIndex;
    });
  };

  const currentSlide = (n) => setSlideIndex(n);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (slides.length) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[n - 1].style.display = 'block';
      dots[n - 1].className += ' active';
    }
  };

  return (
      <Container xs={12} className='mainDiv'>
        <Row>
          <Col xs={9} >   
           <div className="slideshow-container">
         <div className="mySlides fadeimage">
           <img src={img1} alt="Nature" style={{ width: '100%' }} />
           <div className="text" style={{ textAlign: 'center' }}>
       <span className="dot" onClick={() => currentSlide(1)}></span>
         <span className="dot" onClick={() => currentSlide(2)}></span>
         <span className="dot" onClick={() => currentSlide(3)}></span>
       </div>
        </div>

         <div className="mySlides fadeimage">
           <img src={img3} alt="Snow" style={{ width: '100%' }} />
           <div className="text" style={{ textAlign: 'center' }}>
         <span className="dot" onClick={() => currentSlide(1)}></span>
         <span className="dot" onClick={() => currentSlide(2)}></span>
         <span className="dot" onClick={() => currentSlide(3)}></span>
       </div>
         </div>

         <div className="mySlides fadeimage">
           <img src={img2} alt="Mountains" style={{ width: '100%' }} />
             <div className="text" style={{ textAlign: 'center' }}>
         <span className="dot" onClick={() => currentSlide(1)}></span>
         <span className="dot" onClick={() => currentSlide(2)}></span>
         <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
          
         </div>
         <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
         <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
</div>

         </Col>
          <Col xs={3}>
          <div className="secondImg">
           <img src={img3} alt="Mountains" style={{ width: '100%',height:'100%' }} />
           </div>
           </Col>
        </Row>
    
      </Container>
    );

};

export default Slider;
