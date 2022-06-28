import React from 'react'
import './styles.css'

export const CategoryDetail = () => {
  return (
    <div className="category__detail">
      <div className="category__wrap">
        <h3 className = "category__detail-title">Category 1</h3>
        <div className="category__detail-opening">
          <p>Tiền mã hóa là một hình thái kỹ thuật số của <br/> tiền tệ. Bạn có thể sử dụng nó để thanh toán <br/> hầu bao cho bạn bè, mua một đôi tất mới mà <br/> bạn đã để ý từ lâu, hoặc đặt vé máy bay hay <br/> phòng khách sạn cho kỳ nghỉ tiếp theo của <br/> mình. Vì tiền mã hóa là một dạng tài sản kỹ <br/> thuật số, cho nên bạn có thể gửi nó đến <br/> người thân và gia đình ở khắp mọi nơi trên thế giới.</p>
        </div>
        <div className="category__detail-description">
          <p>
          Vậy nó cũng giống như PayPal hay chuyển khoản ngân hàng thôi mà, đúng <br/> không? <br/> <br/>
          Không hẳn là như vậy. Nó thú vị hơn rất nhiều! <br/><br/>
          Bạn thấy đó, các cổng thanh toán trực tuyến truyền thống đều thuộc quyền sở hữu <br/> của những tổ chức lớn. Họ sẽ nắm giữ tiền thay cho bạn, và bạn sẽ phải yêu cầu <br/> họ chuyển tiền thay mặt cho mình mỗi khi muốn tiêu dùng. <br/><br/>
          Với tiền mã hóa thì chẳng có tổ chức trung gian nào ở đấy cả. Bạn, bạn bè của bạn <br/> và hàng nghìn người khác có thể tự đóng vai làm ngân hàng của chính mình thông <br/> qua việc chạy những phần mềm miễn phí. Máy tính của bạn sẽ được kết nối thẳng <br/> đến máy tính của những người khác, đồng nghĩa với việc giao dịch sẽ được thực <br/> hiện trực tiếp - không cần phải qua trung gian! <br/><br/>
          Để sử dụng tiền mã hóa, bạn không cần đăng ký địa chỉ email và mật khẩu trên <br/> một trang web nào cả. Bạn có thể tải xuống các ứng dụng hỗ trợ tiền mã hóa về <br/> smartphone và bắt đầu gửi nhận tiền chỉ sau ít phút.
          </p>
        </div>

        {/* Component merge */}
        <div className=""></div>
        {/* Component merge */}
        
        {/* <div className="category__ending">
          Do đó, loại tiền tệ internet này không do một cá nhân đơn lẻ nào sở hữu và sử dụng mật mã học để bảo vệ hệ thống. Nhưng chẳng phải chúng ta đã có sẵn các ứng dụng thanh toán rồi đúng không, vậy tại sao lại phải quan tâm đến tiền mã hóa nữa?
        </div> */}
      </div>
    </div>
  )
}

export default CategoryDetail
