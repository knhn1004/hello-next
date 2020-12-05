// styled-jsx
// import './main.css'; -> illegal
import styles from './index.module.scss';
import { Fragment } from 'react';

function Heading({ heading }) {
  // const color = Math.random() > 0.5 ? 'red' : 'blue';
  return (
    <Fragment>
      <h1 className={styles.green}>{heading}</h1>
      {/* 
      <style jsx>
        {`
          h1 {
            color: ${color};
          }
        `}
      </style>
      */}
    </Fragment>
  );
}

export default function Home() {
  return (
    <div>
      <Heading heading="Heading" />
      <h1>Test</h1>
    </div>
  );
}
