import bindClass from '../../../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Right = () => {
  return <div className={cx('container')}></div>;
};

export default Right;
