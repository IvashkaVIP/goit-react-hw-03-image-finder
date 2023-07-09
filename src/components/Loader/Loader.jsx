import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => (
  <div className={css.loader}>
    <RotatingLines className={css.loader}
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);

