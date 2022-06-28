import bindClass from '../../utils/bindClass';
import styles from './styles.module.scss';

const cx = bindClass(styles);

const Container = ({ children, mt }) => {
  return (
    <div
      className={cx('container', {
        mt,
      })}>
      {children}
    </div>
  );
};

export default Container;
