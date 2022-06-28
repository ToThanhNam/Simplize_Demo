import Card from '../../../../components/Card';
import bindClass from '../../../../utils/bindClass';
import Container from '../../../../components/Container';

import styles from './styles.module.scss';
import Care from '../Care';

const cx = bindClass(styles);

const Content = () => {
  return (
    <Container>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <Card
            isRow
            desc='Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore...'
          />
          <Card
            isRow
            desc='Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore...'
          />
          <Card
            isRow
            desc='Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore...'
          />
          <Card
            isRow
            desc='Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore...'
          />
        </div>
        <div className={cx('right')}>
          <Care title='Bài viết được quan tâm' />
          <Care title='Bài viết mới nhất' />
        </div>
      </div>
    </Container>
  );
};

export default Content;
