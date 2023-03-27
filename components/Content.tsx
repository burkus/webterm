import { FC } from "react";
import * as types from "../types/page";
import useClickyContent from "@hooks/useClickyContent";

interface ContentProps {
    content: types.Content
}

const Content: FC<ContentProps> = ({ content }) => {
    const { loadedContent } = useClickyContent(content.text ?? '')
    return (
        <div>{loadedContent}</div>
    )
}

export default Content