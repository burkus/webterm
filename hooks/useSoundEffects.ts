import { useCallback, useEffect, useState } from "react";
import useSound from "./useSound";

export default function useSoundEffects() {
    const [effect, setEffect] = useState<HTMLAudioElement | undefined>()
    const [clickys, setClickys] = useState<HTMLAudioElement[]>([])
    const { muted } = useSound()

    useEffect(() => {
        const a = new Audio('/sound/poweron.mp3')
        setEffect(a)

        setClickys(
            Array.from({ length: 5 }).map((_, i) => {
                const audio = new Audio(`/sound/click_${i + 1}.wav`)
                return audio
            })
        )
    }, [setEffect, setClickys])

    const play = useCallback(() => {
        if (effect && !muted) {
            effect.play()
        }
    }, [effect])

    const clicky = useCallback(() => {
        if (clickys.length > 0 && !muted) {
            const index = Math.random() * clickys.length
            clickys[Math.floor(index)].play()
        }
    }, [clickys, muted])

    return {
        play,
        clicky
    }
}