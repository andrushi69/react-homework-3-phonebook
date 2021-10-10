import React from 'react';
import styles from "./Search.module.scss"

const Filter = ({value, onChange}) => {

  return (
    <div className={styles.search}>
      <label className={styles.search_label}>
        <input className={styles.search_input} type="text" value={value} onChange={onChange}/>
      </label>
    </div>
  );

}

export default Filter;