import Card from '../../../../components/Card';
import Container from '../../../../components/Container';
import bindClass from '../../../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Category3 = () => {
  return (
    <Container mt>
      <h2 className={cx('title')}>Category 3</h2>
      <div className={cx('container')}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
};

export default Category3;
