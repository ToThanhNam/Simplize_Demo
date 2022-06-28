import bindClass from '../../utils/bindClass';
import Container from '../Container';
import styles from './styles.module.scss';

const cx = bindClass(styles);

const Footer = () => {
  return (
    <div className={cx('container')}>
      <Container>
        <div className={cx('wrapper')}>
          <div className={cx('first')}>
            <h3
              style={{
                fontSize: '1.6rem',
              }}>
              CÔNG TY CỔ PHẦN SIMPLIZE
            </h3>
            <div
              style={{
                fontSize: '1.4rem',
                marginTop: '8px',
              }}>
              MST: 0109620361
            </div>
            <p
              style={{
                fontSize: '1.4rem',
                marginTop: '8px',
              }}>
              Số 25 ngõ 198 Thái Hà, P. Trung Liệt, Q. Đống Đa, TP. Hà Nội, Việt
              Nam
            </p>
          </div>
          <div className={cx('second')}>
            <div className={cx('sm')}>Về chúng tôi</div>
            <div className={cx('sm')}>Hội viên</div>
            <div
              style={{
                fontSize: '1.4rem',
                marginTop: '18px',
              }}>
              Liên hệ với chúng tôi!
            </div>
          </div>
          <div className={cx('third')}>
            <div className={cx('sm')}>Điều khoản sử dụng</div>
            <div className={cx('sm')}>Chính sách bảo mật</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
