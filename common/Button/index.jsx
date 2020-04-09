/*
 * Created by Allen on 2020-02-26
 */
import styles from './index.less'
import React from 'react'
import ClassNames from 'classnames'

export default ({ text, prefixCls, onClick = () => {} }) => (
  <div className={ClassNames(styles.button, prefixCls)} onClick={onClick}>
    {text}
  </div>
)
