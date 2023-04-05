
import { FC } from 'react'
import { Page } from '../../types/page'
import { GetStaticPropsContext, GetStaticPathsContext } from 'next'
import fs from 'fs'
import TermPage from '@components/TermPage'
import styles from '@styles/TermPage.module.css'

const Screen: FC<Page> = (page) => {
    return (
        <div className={styles.screenContainer}>
            <TermPage page={page} />
        </div>
    )
}

export default Screen

export async function getStaticPaths(context: GetStaticPathsContext) {
    return {
        paths: [
            {
                params: { screen: 'projects' }
            },
            {
                params: { screen: 'test' }
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const fileName = context.params?.screen
    const data = fs.readFileSync(`screens/${fileName}.json`, 'utf-8')
    const page = JSON.parse(data) as Page

    return {
        props: page
    }
}