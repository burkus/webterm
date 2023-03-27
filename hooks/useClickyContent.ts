import { useState, useEffect } from "react";
import useSoundEffects from "./useSoundEffects";

export default function useClickyContent(content: string) {
    const [loadedContent, setLoadedContent] = useState('')
    const [index, setIndex] = useState(0)
    const { clicky } = useSoundEffects()

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < content.length) {
                setLoadedContent(prev => prev + content[index])
                setIndex(prev => prev + 1)
                if (index % 2 == 0) clicky()
            } else {
                clearInterval(interval)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [clicky, setLoadedContent, content, index, setIndex])

    return {
        loadedContent
    }
}