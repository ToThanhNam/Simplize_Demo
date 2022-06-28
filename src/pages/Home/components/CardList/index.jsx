import Card from '../../../../components/Card';
import Container from '../../../../components/Container';
import bindClass from '../../../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const CardList = () => {
  return (
    <Container>
      <h2 className={cx('title')}>Bài viết mới nhất</h2>
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

export default CardList;
