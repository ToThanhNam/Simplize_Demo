import bindClass from '../../../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Left = () => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>MỤC LỤC</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>1. EBIT là gì?</li>
        <li className={cx('item')}>2. Công thức tính EBIT</li>
        <li className={cx('item')}>3. Ý nghĩa của EBIT trong phân tích</li>
        <li className={cx('item')}>3. Ý nghĩa của EBIT trong phân tích</li>
        <li className={cx('item')}>5. EBITDA là gì?</li>
        <li className={cx('item')}>6. Công thức tính EBITDA</li>
        <li className={cx('item')}>7. Ý nghĩa của EBITDA trong phân tích</li>
        <li className={cx('item')}>
          8. Những lầm tưởng mà EBITDA gây ra cho nhà đầu tư
        </li>
        <li className={cx('item')}>
          9. Bonus: Warren Buffett nói gì về chỉ số EBITDA?
        </li>
        <li className={cx('item')}>10. Ứng dụng của EBITDA trong đầu tư</li>
      </ul>
    </div>
  );
};

export default Left;
