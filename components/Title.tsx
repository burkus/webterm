import styles from 'styles/Text.module.css'
import { FC } from 'react'

interface TextProps {
    children: string
}

const Title: FC<TextProps> = ({ children }) => {
    return (
        <div className={styles.title}>
            {children}
        </div>
    )
}

export default Title