/*
 * Created by Allen on 2020-02-21
 */
import styles from './index.less'
import React from 'react'
import Button from '@/common/Button'

export default ({ onClick }) => (
  <div className={styles.button_wrapper}>
    <Button prefixCls={styles.offset} text="客服热线" onClick={onClick} />
    <div className={styles.hint}>
      <div className={styles.line} />
      <div className={styles.text}>24小时为您服务</div>
      <div className={styles.line} />
    </div>
  </div>
)
