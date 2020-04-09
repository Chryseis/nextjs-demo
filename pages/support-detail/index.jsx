/*
 * Created by Allen on 2020-03-11
 */
import styles from './index.less'
import React, {useState, useEffect} from 'react'
import {getQueryString} from '@/utils'
import detailConfig from './config'

function SupportDetail(props) {
    const {detail}=props

    return (
        <div className={styles.detail_wrapper}>
            <div className={styles.title}>{detail?.title}</div>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: detail?.content }}/>
        </div>
    )
}

SupportDetail.getInitialProps = async(ctx) => {
    const title = ctx.query['title']
    return {
        detail:detailConfig[title]
    }
}

export default SupportDetail