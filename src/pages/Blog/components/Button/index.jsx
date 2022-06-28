import bindClass from '../../../../utils/bindClass';
import ButtonCategory from '../../../../components/ButtonCategory';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const Button = () => {
  return (
    <div className={cx('container')}>
      <ButtonCategory text='Tất cả' />
      <ButtonCategory text='Category 1' />
      <ButtonCategory text='Category 2' />
      <ButtonCategory text='Category 3' />
      <ButtonCategory text='Category 4' />
      <ButtonCategory text='Category 5' />
    </div>
  );
};

export default Button;
