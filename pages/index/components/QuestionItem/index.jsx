/*
 * Created by Allen on 2020-02-21
 */
import styles from './index.less'
import React from 'react'
import ClassName from 'classnames'
import Accordion from '../Accordion'
import down_arrows from '@/assets/img/down-arrows.png'

export default ({ leftText = '司机服务规则', rightTexts = ['取消规则', '收费规则'], linkToDetail, all, onFold }) => {
  return (
    <div className={styles.question_item_wrapper}>
      <div className={styles.left} onClick={onFold}>
        {leftText}
        <img className={ClassName(styles.icon, { [styles.up]: all })} src={down_arrows} alt="" />
      </div>
      <ul className={styles.right}>
        {rightTexts
          .filter((o, i) => i < 2)
          .map((text, i) => (
            <li
              key={i}
              className={ClassName(styles.item, { [styles.last]: i === 1 })}
              onClick={() => linkToDetail(text)}
            >
              {text}
            </li>
          ))}
        <Accordion visible={all}>
          <div style={{ display: 'none' }}>
            {rightTexts
              .filter((o, i) => i >= 2)
              .map((text, i) => (
                <li
                  key={i}
                  className={ClassName(styles.item, {
                    [styles.first]: i === 0,
                    [styles.last]: i === rightTexts.length - 3
                  })}
                  onClick={() => linkToDetail(text)}
                >
                  {text}
                </li>
              ))}
          </div>
        </Accordion>
      </ul>
    </div>
  )
}
