import ButtonCategory from '../../../../components/ButtonCategory';
import bindClass from '../../../../utils/bindClass';
import styles from './styles.module.scss';

const cx = bindClass(styles);

const QuickAccess = () => {
  return (
    <div className={cx('container')}>
      <span>Truy cập nhanh</span>
      <ButtonCategory primary text='Category 1' />
      <ButtonCategory primary text='Category 2' />
      <ButtonCategory primary text='Category 3' />
      <ButtonCategory primary text='Category 4' />
      <ButtonCategory primary text='Category 5' />
    </div>
  );
};

export default QuickAccess;
