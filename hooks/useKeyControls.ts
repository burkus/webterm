import { useEffect, useState, useCallback } from "react"
import useSoundEffects from "./useSoundEffects"
import { Option } from "../types/page"

export default function useKeyControls(options: Option[]) {
    const [index, setIndex] = useState(0)
    const { clicky } = useSoundEffects()

    const increaseIndex = useCallback(() =>
        setIndex(prev => {
            clicky()
            return (prev + 1) % options.length
        }), [options, setIndex, clicky])

    const decreaseIndex = useCallback(() => {
        clicky()
        if (index > 0) setIndex(prev => prev - 1)
        else setIndex(options.length - 1)
    }, [options, setIndex, index, clicky])

    const followSelectedUrl = useCallback(() => {
        const selected = options[index]
        location.href = selected.path
    }, [index, options])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const { key } = e
        switch (key) {
            case 'ArrowUp':
                return decreaseIndex()
            case 'ArrowDown':
                e.preventDefault()
                return increaseIndex()
            case 'w':
                return decreaseIndex()
            case 's':
                return increaseIndex()
            case 'Enter':
                return followSelectedUrl()
            case 'e':
                return followSelectedUrl()
        }
    }, [increaseIndex, decreaseIndex, followSelectedUrl])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    return {
        index
    }
}