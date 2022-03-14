import React from 'react';
import "./Career.css"
import AVTR1 from '../../assets/avatar1.jpg'
import careerData from '../../careerData';


  // core version + navigation, pagination modules:
  import { Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';

  import 'swiper/css';
  import 'swiper/css/pagination';
  

const Career = () => {
  return (
    <section id='testimonials'>
  <h5>A sneak peak of</h5>
  <h2>My Career</h2>
  <Swiper className="container testimonials_container"
      // install Swiper modules
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}>

  {careerData.map(({avatar, name, review},index) => { return(
    
  <SwiperSlide className="testimonial" >
    <div className="client_avatar">
      <img src={avatar} alt="Avatar 0ne" />
    </div>
    <h3 className='client_name'>{name}</h3>
    <h5>Main responsibilities:</h5>
      <small className='client_review'>
      {review}
      </small>
 </SwiperSlide>)
 })
 }
</Swiper>

    </section>
  )
}

export default Career