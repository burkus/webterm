import { useEffect, useState, useCallback } from "react"
import useSoundEffects from "./useSoundEffects"

export default function useKeyControls(maxIndex: number) {
    const [index, setIndex] = useState(0)
    const { clicky } = useSoundEffects()

    const increaseIndex = useCallback(() =>
        setIndex(prev => {
            clicky()
            return (prev + 1) % maxIndex
        }), [maxIndex, setIndex, clicky])

    const decreaseIndex = useCallback(() => {
        clicky()
        if (index > 0) setIndex(prev => prev - 1)
        else setIndex(maxIndex - 1)
    }, [maxIndex, setIndex, index, clicky])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const { key } = e
        switch (key) {
            case 'ArrowUp':
                return decreaseIndex()
            case 'ArrowDown':
                return increaseIndex()
            case 'w':
                return decreaseIndex()
            case 's':
                return increaseIndex()
        }
    }, [increaseIndex, decreaseIndex])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    return {
        index
    }
}