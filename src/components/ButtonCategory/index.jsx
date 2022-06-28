import bindClass from '../../utils/bindClass';

import styles from './styles.module.scss';

const cx = bindClass(styles);

const ButtonCategory = ({ text, primary }) => {
  return (
    <button className={cx('btn', { primary })}>
      <div>{text}</div>
    </button>
  );
};

export default ButtonCategory;
