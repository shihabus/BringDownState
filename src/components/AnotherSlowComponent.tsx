import { wait } from '../utils';

export const AnotherVerySlowComponent = () => {
  wait(500);
  return <div className="content">AnotherVerySlowComponent</div>;
};
