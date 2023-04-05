import { FC } from "react";
import { Page } from "../types/page";
import Options from "./Options";
import Content from "./Content";
import termStyles from '@styles/TermPage.module.css'
import { motion } from 'framer-motion'
import Mute from "./Mute";

interface TermPageProps {
    page: Page
}

const TermPage: FC<TermPageProps> = ({ page }) => {
    let { content, options } = page

    return (
        <div>
            <Mute />
            <div className={termStyles.content}>

                <motion.div
                    initial={{ scaleY: 0.0 }}
                    animate={{ scaleY: 1.0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={termStyles.optionTitle}>
                        {page.title}
                    </div>
                    {content && <Content content={content} />}
                    {options && <Options options={options} />}
                </motion.div>
            </div>
        </div>

    )
}

export default TermPage