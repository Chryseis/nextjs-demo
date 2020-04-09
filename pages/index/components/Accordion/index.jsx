/*
 * Created by Allen on 2020-03-10
 */
import styles from './index.less'
import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default ({ visible, children, callback }) => {
  return (
    <CSSTransition
      in={visible}
      appear
      onEnter={node => (node.style.display = 'block')}
      onEntered={() => callback && callback()}
      onExited={node => (node.style.display = 'none')}
      classNames={{
        enter: styles.fold_enter,
        enterActive: styles.fold_enter_active,
        exit: styles.fold_exit,
        exitActive: styles.fold_exit_active
      }}
      timeout={500}
    >
      {children}
    </CSSTransition>
  )
}
