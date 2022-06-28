import React from 'react'
import './styles.css'
import simplize__image from '../../../../assets/images/simplize.png'
import simplize__logo from '../../../../assets/images/coin-013.png'

const Navbar = () => {
  return (
    <div>
        <div className="header">
          <div className="header__images">
            <img className="header__logo" src={simplize__logo} alt="" />
            <img className="header__image" src={simplize__image} alt="" />
          </div>
            <ul className="header__menu">
                <li>Trang chủ</li>
                <li>Về trang chủ</li>
                <li>Về chúng tôi</li>
                <li>Hội Viên</li>
                <li className="select_line">Blog</li>
            </ul>
            <div className="header__button">
              <button className="header__button-login">Đăng Nhập</button>
              <button className="header__button-regester">Đăng Ký</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar