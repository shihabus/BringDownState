import { wait } from '../utils';

export const VerySlowComponent = () => {
  wait(500);
  return <div className="content-box">VerySlowComponent</div>;
};
