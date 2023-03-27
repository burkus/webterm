import styles from '@styles/Text.module.css'
import { FC } from 'react'
import Link from 'next/link'

interface TextProps {
    children: string
    path: string
    selected: boolean
}

const style = { transform: 'translate(50px,0)' }

const Option: FC<TextProps> = ({ children, path, selected }) => {
    return (
        <Link href={path}>
            <div className={styles.option} style={selected ? style : {}}>
                <div>
                    {">"}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Link>
    )
}

export default Option