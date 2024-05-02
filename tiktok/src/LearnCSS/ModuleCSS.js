import clsx from 'clsx';
import styles from './ModuleCSS.module.scss';

function ModuelCSS({ primary }) {

  const classes = clsx(styles.btn, 'd-flex', {
    [styles.primary]: primary
  });


  return (
    <button className={classes}>
      Click me
    </button>
  );
}

export default ModuelCSS;