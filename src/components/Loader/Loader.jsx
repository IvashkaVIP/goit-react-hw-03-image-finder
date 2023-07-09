import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => (
  <>
    <RotatingLines className={css.loader}
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </>
);

