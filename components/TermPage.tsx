import { FC } from "react";
import { Page } from "../types/page";
import Options from "./Options";
import Content from "./Content";
import styles from '@styles/Text.module.css'
import termStyles from '@styles/TermPage.module.css'
import { motion } from 'framer-motion'

interface TermPageProps {
    page: Page
}

const TermPage: FC<TermPageProps> = ({ page }) => {
    const { options, content } = page

    return (
        <div className={termStyles.content}>
            <motion.div
                initial={{ scaleY: 0.0 }}
                animate={{ scaleY: 1.0 }}
                transition={{ duration: 0.3 }}
            >
                <div className={styles.optionTitle}>
                    {page.title}
                </div>
                <Content content={content} />
                <Options options={options} />
            </motion.div>
        </div>
    )
}

export default TermPage