import { FC } from "react";
import * as types from "../types/page";
import useClickyContent from "@hooks/useClickyContent";
import styles from '@styles/TermPage.module.css'

interface ContentProps {
    content: types.Content
}

const Content: FC<ContentProps> = ({ content }) => {
    const { loadedContent } = useClickyContent(content.text ?? '')
    return (
        <div className={styles.contentContainer}>{loadedContent}</div>
    )
}

export default Content