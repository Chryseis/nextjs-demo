/*
* Created by Allen on 2020-03-27
*/
import styles from './index.less'
import React,{useEffect,useCallback,useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import router from 'next/router'
import {BROWSER} from '@/utils'
import * as Actions from '@/actions/support'
import Title from './components/Title'
import Container from './components/Container'
import QuestionItem from './components/QuestionItem'
import HelpItem from './components/HelpItem'
import Button from './components/Button'
import { questionConfig, helpConfig } from './config'

function Support(props) {
    const {userAgent}=props

    const wrapperEl = useRef(null)

    const dispatch = useDispatch()

    const { index, scrollTop } = useSelector(state => state.support)

    const handleSupport = useCallback(
        i => {
            if (i === index) {
                dispatch(Actions.handleAccordion(''))
            } else {
                dispatch(Actions.handleAccordion(i))
            }
        },
        [dispatch, index]
    )

    const linkToDetail = useCallback(
        text => {
            dispatch(Actions.savePageState(wrapperEl.current.offsetParent.scrollTop))
            router.push(`/support-detail?title=${text}`)
        },
        [dispatch]
    )

    const linkToHelp = useCallback(
        link => {
            dispatch(Actions.savePageState(wrapperEl.current.offsetParent.scrollTop))
            link()
        },
        [dispatch]
    )

    useEffect(() => {
        wrapperEl.current.parentNode.scrollTop = scrollTop
    }, [scrollTop])

    return (
        <div className={styles.support_wrapper} ref={wrapperEl}>
            <Title text={'常见问题'} />
            <Container prefixCls={BROWSER.Android ? styles.offset_2 : styles.offset_1}>
                {questionConfig.map((question, i) => (
                    <QuestionItem
                        onFold={() => handleSupport(i)}
                        key={i}
                        all={index === i}
                        leftText={question.leftText}
                        rightTexts={question.rightTexts}
                        linkToDetail={linkToDetail}
                    />
                ))}
            </Container>
            {BROWSER(userAgent).Android && (
                <>
                    <Title text={'使用帮助'} />
                    <Container prefixCls={styles.offset_3}>
                        {helpConfig.map((help, i) => (
                            <HelpItem key={i} logo={help.logo} text={help.text} onClick={() => linkToHelp(help.link)} />
                        ))}
                    </Container>
                </>
            )}
            <Button onClick={() => {}} />
        </div>
    )
}

Support.getInitialProps = async({req}) => {
    const isServer=!!req

    return {
        userAgent:isServer?req.headers['user-agent']:navigator.userAgent
    }
}

export default Support