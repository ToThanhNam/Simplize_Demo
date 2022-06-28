import bindClass from '../../../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

export const Block1 = () => {
  return (
    <div className={cx('block')}>
      <h2 className={cx('block-title')}>Vì sao lại gọi là tiền mã hóa?</h2>
      <p className={cx('block-content')}>
        Cái tên tiền mã hóa là sự kết hợp giữa mã hóa trong mật mã học và tiền
        tệ. Với tiền mã hóa, các phương thức mã hóa phức tạp sẽ được sử dụng để
        bảo vệ quỹ tiền, đảm bảo không ai khác ngoài chủ sở hữu có thể sử dụng
        chúng.
        <br /> Bạn không cần phải hiểu tất cả những điều này - những ứng dụng
        bạn sử dụng sẽ làm điều đó thay cho bạn. Bạn sẽ không cần phải nắm rõ cơ
        chế hoạt động của những thứ đằng sau.
        <br /> Tuy nhiên, nếu bạn có hứng thú về chủ đề này thì chúng tôi luôn
        có sẵn nhiều bài viết dành cho bạn:
      </p>
      <ul className={cx('block-list')}>
        <li className={cx('block-link')}>
          Khóa Công khai trong Mật mã học là gì?
        </li>
        <li className={cx('block-link')}>Lịch sử của Mật mã học</li>
        <li className={cx('block-link')}>Mã hóa Đối xứng và Bất đối xứng</li>
        <li className={cx('block-link')}>Chữ ký Điện tử là gì?</li>
      </ul>
    </div>
  );
};

export const Block2 = () => {
  return (
    <div className={cx('block')}>
      <h2 className={cx('block-title')}>Kiến thức blockchain miễn phí!</h2>
      <ul className={cx('block-list')}>
        <li className={cx('block-link')}>
          Cơ chế đồng thuận blockchain là gì?
        </li>
        <li className={cx('block-link')}>Proof of Work (PoW) là gì?</li>
        <li className={cx('block-link')}>Lý giải về Lặp chi</li>
        <li className={cx('block-link')}>Lý thuyết trò chơi và Tiền mã hóa</li>
        <li className={cx('block-link')}>
          Lý giải về Cơ chế kháng lỗi Byzantine
        </li>
      </ul>
    </div>
  );
};

export const Block3 = () => {
  return (
    <div className={cx('block')}>
      <h2 className={cx('block-title')}>
        Hãy học bí quyết để thành thạo đồ thị giá!
      </h2>
      <p className={cx('block-content')}>
        Chúng tôi đã chuẩn bị cho bạn những bài viết để bắt đầu:
      </p>
      <ul className={cx('block-list')}>
        <li className={cx('block-link')}>Phân tích kỹ thuật (TA) là gì?</li>
        <li className={cx('block-link')}>
          Hướng dẫn về Đồ thị Nến giá dành cho Người mới bắt đầu
        </li>
      </ul>
      <p className={cx('block-content')}>
        May thay, chúng tôi còn tạo sẵn một bộ hướng dẫn chuyên sâu dành cho
        những ai mới bắt đầu! Nó bao gồm gần như mọi thứ (thậm chí còn nhiều
        hơn) bạn cần biết để giao dịch tiền mã hóa:
      </p>
      <ul className={cx('block-list')}>
        <li className={cx('block-link')}>
          Hướng dẫn hoàn chỉnh về Giao dịch Tiền mã hóa dành cho Người mới bắt
          đầu
        </li>
      </ul>
      <p className={cx('block-content')}>
        Khi nào bạn có thể đọc thuộc làu làu bài viết này khi bị đánh thức vào
        lúc 5 giờ sáng, bạn mới được phép bước đến các chủ đề tiếp theo:
      </p>
      <ul className={cx('block-list')}>
        <li className={cx('block-link')}>
          Hướng dẫn về Quản lý rủi ro dành cho Người mới bắt đầu
        </li>
        <li className={cx('block-link')}>
          Hướng dẫn về các Chiến lược Giao dịch Tiền mã hóa dành cho Người mới
          bắt đầu
        </li>
        <li className={cx('block-link')}>
          5 Chỉ báo quan trọng nhất trong Phân tích kỹ thuật
        </li>
        <li className={cx('block-link')}>
          12 Kiểu hình Nến giá thường dùng nhất trong Phân tích kỹ thuật
        </li>
        <li className={cx('block-link')}>
          7 Sai sót thường gặp phải trong Phân tích kỹ thuật (TA)
        </li>
      </ul>
    </div>
  );
};
