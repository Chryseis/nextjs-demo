/*
 * Created by Allen on 2020-02-21
 */
import styles from './index.less'
import React from 'react'
import ClassNames from 'classnames'

export default ({ children, prefixCls }) => (
  <div className={ClassNames(styles.container_wrapper, prefixCls)}>{children}</div>
)
