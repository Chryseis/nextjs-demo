/*
 * Created by Allen on 2020-02-21
 */
import styles from './index.less'
import React from 'react'

export default ({ logo, text, onClick }) => (
  <div className={styles.help_item_wrapper} onClick={onClick}>
    <img className={styles.logo} src={logo} alt="" />
    <div className={styles.text}>{text}</div>
  </div>
)
