import Card from '../../../../components/Card';
import bindClass from '../../../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Care = ({ title }) => {
  return (
    <div className={cx('container')}>
      <h3 className={cx('title')}>{title}</h3>
      <Card isRow isSmall={false} />
      <Card isRow isSmall={false} />
      <Card isRow isSmall={false} />
      <Card isRow isSmall={false} />
    </div>
  );
};

export default Care;
