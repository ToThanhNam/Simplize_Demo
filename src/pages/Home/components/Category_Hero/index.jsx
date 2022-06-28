import React from 'react'
import './styles.css'
import category_image from '../../../../assets/images/category_image.png'

export const Category = () => {
  return (
    <div className="category">
        <div className="category__left">
          <div className="category__left-content">
            <p className="category__left-bigBlog">Xin chào</p>
            <div className="category__left-contentWrap">  
              <p className="category__left-blogContent">
              Hiện tại, GoValue đang thực hiện 1 sứ mệnh rất quan trọng cho <br/> cộng đồng đầu tư chứng khoán. Đó là:
              </p>
              <p className="category__left-blogContent">
              Hướng dẫn, chia sẻ với cộng đồng về những kiến thức, kinh <br/> nghiệm (chi tiết nhất) để mọi người có thể tự tin đầu tư chứng <br/> khoán.
              </p>
              <p className="category__left-blogContent">
              Trên website của GoValue, bạn sẽ tìm thấy hơn 120 bài viết từ <br/> cơ bản đến nâng cao về đầu tư chứng khoán.
              </p>
              <p className="category__left-blogContent">
              Với hơn 15 năm đầu tư chứng khoán chuyên nghiệp, GoValue <br/> team hiểu rằng, mọi thứ sẽ vô cùng khó khăn nếu bạn là người <br/> mới (nhà đầu tư F0).
              </p>
              <p className="category__left-blogContent">
              Vì thế, hướng dẫn này sẽ giúp bạn làm quen với những kiến thức <br/> về đầu tư chứng khoán, giúp bạn từng bước bắt đầu cuộc hành <br/> trình kiếm tiền “đầy chông gai” nhưng sẽ rất thú vị phía trước.
              </p>
            </div>
          </div>
        </div>
        <div className="category__right">
            <img src={category_image} alt="" className="" />
        </div>
    </div>
  )
}

export default Category
