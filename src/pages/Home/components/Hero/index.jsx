import React from 'react'
import './styles.css'
import hero__image from '../../../../assets/images/learning.png'


export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero__left">
          <div className="hero__left-content">
            <p className="hero__left-blog">Blog</p>
            <p className="hero__left-bigBlog">Blog</p>
            <p className="hero__left-blogContent">Simplize giúp bạn loại bỏ cảm xúc khi mua <br/>bán, xây dựng chiến lược đầu tư và phân <br/> tích mọi cổ phiếu.</p>
            <button className="hero__left-btnRegeister">Bắt đầu ngay</button>
          </div>
        </div>
        <div className="hero__right">
            <img src={hero__image} alt="" className="" />
        </div>
    </div>
  )
}

export default Hero
