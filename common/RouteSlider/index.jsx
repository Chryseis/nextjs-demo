/*
 * Created by Allen on 2020-03-04
 */
import styles from './index.less'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default ({ children }) => {
  const router = useRouter()
  const { naviAction } = useSelector(state => state.navigation)

  return (
    <TransitionGroup
      className={styles.router_wrapper}
      childFactory={child => {
        return React.cloneElement(child, {
          classNames: {
            appear: styles.push_appear,
            appearActive: styles.push_appear_active,
            appearDone: styles.push_appear_done,
            enter: naviAction === 'push' ? styles.push_enter : styles.pop_enter,
            enterActive: naviAction == 'push' ? styles.push_enter_active : styles.pop_enter_active,
            enterDone: naviAction == 'push' ? styles.push_enter_done : styles.pop_enter_done,
            exit: naviAction == 'push' ? styles.push_exit : styles.pop_exit,
            exitActive: naviAction == 'push' ? styles.push_exit_active : styles.pop_exit_active,
            exitDone: naviAction == 'push' ? styles.push_exit_done : styles.pop_exit
          }
        })
      }}
    >
      <CSSTransition
        appear
        timeout={{
          appear: 500,
          enter: 500,
          exit: 500
        }}
        key={router.pathname + router.query}
      >
        <div className={styles.router}>
            {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}
