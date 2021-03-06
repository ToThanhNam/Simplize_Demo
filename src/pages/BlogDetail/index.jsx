import Content from './components/Content';
import CardList from './components/CardList';
import Footer from '../../components/Footer';
import Left from './components/Left';
import bindClass from '../../utils/bindClass';
import styles from './styles.module.scss';
import Right from './components/Right';
import Navbar from '../Home/components/Navbar'

const cx = bindClass(styles);

const BlogDetail = () => {
  return (
    <div className={cx('container')}>
      <Navbar/>
      <div className={cx('content')}>
        <Left />
        <Content />
        <Right />
      </div>
      <CardList />
      <Footer />
    </div>
  );
};

export default BlogDetail;
