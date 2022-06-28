import bindClass from '../../utils/bindClass';

import thumbImg from '../../assets/images/thumb.png';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Card = ({ isRow, desc, isSmall = true }) => {
  return (
    <div
      className={cx('card', {
        isRow,
        isSmall,
      })}>
      <img className={cx('img')} src={thumbImg} />

      <div className={cx('content')}>
        <h3 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h3>
        {desc && (
          <p className={cx('desc')}>
            Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        )}
        <div className={cx('author')}>
          <span className={cx('label')}>Tác giả</span>
          <span className={cx('time')}>Jan 11, 2022</span>
        </div>
        <div className={cx('rect-wrapper')}>
          <div className={cx('rect')} />
          <div className={cx('rect')} />
        </div>
      </div>
    </div>
  );
};

export default Card;
