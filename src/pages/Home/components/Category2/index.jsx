import Card from '../../../../components/Card';
import bindClass from '../../../../utils/bindClass';
import Container from '../../../../components/Container';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Category2 = () => {
  return (
    <Container mt>
      <h2 className={cx('title')}>Category 2</h2>
      <div className={cx('container')}>
        <Card
          isRow
          desc='Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...'
        />
        <Card
          isRow
          desc='Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...'
        />
        <Card
          isRow
          desc='Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...'
        />
        <Card
          isRow
          desc='Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...'
        />
      </div>
    </Container>
  );
};

export default Category2;
