import bindClass from '../../../../utils/bindClass';
import styles from './styles.module.scss';
import { SwitchVerticalIcon } from '@heroicons/react/outline';
import avatar from '../../../../assets/images/avatar.png';

const cx = bindClass(styles);

const Comment = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('heading')}>
        <div className={cx('heading-left')}>
          <span className={cx('white')}>Bình luận</span>
          <span className={cx('gray')}>10</span>
        </div>
        <div className={cx('heading-right')}>
          <span className={cx('heading-right-text')}>Mới nhất</span>
          <SwitchVerticalIcon className={cx('heading-right-icon')} />
        </div>
      </div>

      <div className={cx('input')}>
        <img className={cx('input-img')} src={avatar} alt='' />
        <div className={cx('input-wrapper')}>
          <input className={cx('input-input')} placeholder=' ' type='text' />
          <span className={cx('input-placeholder')}>
            Bạn phải <span className={cx('bold')}>Đăng nhập</span> để bình
            luận...
          </span>
        </div>
      </div>

      <Item />

      <div className={cx('more')}>Xem thêm 8 trả lời</div>
    </div>
  );
};

const Item = () => {
  return (
    <div className={cx('item')}>
      <img className={cx('item-img')} src={avatar} alt='' />
      <div className={cx('item-container')}>
        <div className={cx('item-wrapper')}>
          <div className={cx('item-name')}>Nguyen B</div>
          <p className={cx('item-content')}>
            ad cho mình hỏi “Cổ đông không kiểm soát” & “Cổ đông thiểu số” cũng
            như cặp “Lợi ích của cổ đông không kiểm soát” & “Lợi ích của cổ đông
            thiểu số” là một hay là khác nhau vậy ad? Nếu khác nhau nhờ ad phân
            biệt giúp. Tks ad
          </p>
        </div>
        <div className={cx('item-footer')}>
          <span className={cx('item-rep')}>Phản hồi</span>
          <span className={cx('item-time')}>31 phút trước</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
