import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
type Props = {}

const Banner = (props: Props) => {
  const contentStyle: any = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel>
      <div>
        <img src="https://bizweb.sapocdn.net/100/438/408/themes/848101/assets/slider_1.jpg?1649135007928" />
      </div>
      <div>
        <img src="https://bizweb.sapocdn.net/100/438/408/themes/848101/assets/slider_2.jpg?1649135007928" />
      </div>
      <div>
        <img src="https://bizweb.sapocdn.net/100/438/408/themes/848101/assets/slider_3.jpg?1649135007928" />
      </div>
      <div>
        <img src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/slider_2.jpg?1642727047061" />
      </div>
    </Carousel>
  )
}

export default Banner