import bindClass from '../../../../utils/bindClass';
import { CalendarIcon, ChatAltIcon } from '@heroicons/react/outline';
import avatar from '../../../../assets/images/avatar.png';
import taxImg from '../../../../assets/images/tax.png';
import styles from './styles.module.scss';
import Container from '../../../../components/Container';
import Comment from '../Comment';
import { Block1, Block2, Block3 } from '../Block';
import QuickAccess from '../QuickAccess';

const cx = bindClass(styles);

const Content = () => {
  return (
    <div>
      <h1 className={cx('title')}>
        EBIT và EBITDA: Cách tính và áp dụng trong đầu tư (CHUẨN)
      </h1>
      <div className={cx('info')}>
        <div className={cx('user')}>
          <img className={cx('user-img')} src={avatar} alt='' />
          <span className={cx('user-name')}>Tuấn Trần</span>
        </div>

        <div className={cx('date')}>
          <CalendarIcon className={cx('date-icon')} />
          <span className={cx('date-time')}>11/01/2022 09:30</span>
        </div>

        <div className={cx('comment')}>
          <ChatAltIcon className={cx('comment-icon')} />
          <span className={cx('comment-text`')}>10 bình luận</span>
        </div>
      </div>

      <p className={cx('content')}>
        Là một nhà đầu tư hay chủ doanh nghiệp, bạn cần phải nắm bắt được các số
        liệu tài chính quan trọng để đo lường hiệu suất hoạt động của doanh
        nghiệp. EBIT và EBITDA là 2 trong số các số liệu quan trọng này. Vậy
        chúng là gì? Sự khác biệt giữa 2 chỉ số này như thế nào? Chúng được tính
        toán ra sao và những tác động có thể ảnh hưởng đến doanh nghiệp là gì?…
        Bài viết này của GoValue sẽ giúp bạn biết mọi thứ cần biết và giúp loại
        bỏ sự nhầm lẫn ra khỏi các số liệu này. Điều này sẽ cho phép bạn sử dụng
        những chỉ số này một cách hiệu quả hơn khi đánh giá một doanh nghiệp.
      </p>
      <h2 className={cx('title-sub')}>EBIT là gì?</h2>
      <p className={cx('content')}>
        EBIT là viết tắt của Earnings Before Interest and Tax, hay Lợi nhuận
        trước lãi vay và thuế. <br /> Đây là một chỉ tiêu tài chính cực kỳ hữu
        ích khi bạn muốn đánh giá lợi nhuận của 1 doanh nghiệp. <br /> Vì nó
        nhìn cụ thể vào thu nhập mà doanh nghiệp tạo ra từ hoạt động cốt lõi của
        mình.
      </p>
      <h2 className={cx('title-sub')}>Công thức tính EBIT</h2>
      <p className={cx('content')}>
        EBIT được tính bằng cách lấy Lợi nhuận ròng (LNST) cộng thêm Chi phí lãi
        vay và Thuế TNDN:
        <br />{' '}
        <strong>EBIT = Lợi nhuận sau thuế + Thuế TNDN + Chi phí lãi vay</strong>
        <br /> Hay:{' '}
        <strong>EBIT = Lợi nhuận trước thuế + Chi phí lãi vay</strong>
        <br /> Đây là công thức được đa số nhà đầu tư sử dụng.
        <br /> Việc tính toán khá dễ dàng, bởi các con số đều đã được bóc tách,
        thể hiện trên Báo cáo KQKD của doanh nghiệp.
      </p>
      <h2 className={cx('title-sub')}>Ví dụ cách tính EBIT của PPC năm 2019</h2>
      <p className={cx('content')}>
        Để tính EBIT năm 2019 của CTCP Nhiệt điện Phả Lại (Mã: PPC).
        <br />
        Hãy chú ý khung màu đỏ trên Báo cáo KQKD 2019 của PPC.
      </p>
      <img src={taxImg} alt='' />
      <p className={cx('content')}>
        Mình sẽ lấy đơn vị tính là tỷ đồng cho dễ nhìn (ở BCTC PPC đơn vị là
        VNĐ). Khi đó:
        <br />
        <strong>
          EBIT 2019 = LNTT + Lãi vay = 1,530 tỷ + 12 tỷ = 1,542 tỷ đồng
        </strong>
        <br />
        Năm 2019, PPC tạo ra 1,542 tỷ đồng lợi nhuận sau khi trừ các chi phí
        hoạt động trong năm.
      </p>

      <div className={cx('intro')}>
        <img className={cx('intro-img')} src={avatar} alt='' />
        <div className={cx('intro-content')}>
          <span className={cx('intro-name')}>Tuấn Trần</span>
          <p className={cx('content')}>
            Anh Tuấn là 1 trong những chuyên gia hàng đầu về đầu tư tại Việt
            Nam. Hơn 7 năm kinh nghiệm trong lĩnh vực phân tích đầu tư, quản lý
            quỹ trước khi gia nhập Simplize team.
            <br /> Anh Tuấn có hơn 3 năm kinh nghiệm trong lĩnh vực Khoa học dữ
            liệu và là kỹ sư trưởng cho các mô hình tính toán trên Simplize.
          </p>
        </div>
      </div>

      <Block1 />
      <Block2 />
      <Block3 />
      <QuickAccess />

      <Comment />
    </div>
  );
};

export default Content;
