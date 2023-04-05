import { FC } from "react";
import * as types from "../types/page";
import Option from "./Option";
import pageStyles from '@styles/TermPage.module.css'
import useKeyControls from "@hooks/useKeyControls";

interface OptionsProps {
    options: types.Option[]
}

const Options: FC<OptionsProps> = ({ options }) => {
    const { index } = useKeyControls(options)

    return (
        <div className={pageStyles.optionContainer}>
            {options.map(({ path, name }, i) =>
                <Option
                    selected={index === i}
                    path={path}
                    key={name}
                >
                    {name}
                </Option>)}
        </div>
    )
}

export default Options