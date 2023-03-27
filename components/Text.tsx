import styles from 'styles/Text.module.css'
import { FC } from 'react'

interface TextProps {
    children: string
}

const Text: FC<TextProps> = ({ children }) => {
    return (
        <div className={styles.option}>
            {children}
        </div>
    )
}

export default Text