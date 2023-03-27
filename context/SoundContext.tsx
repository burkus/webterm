import useSoundEffects from "@hooks/useSoundEffects";
import { createContext, FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react";

interface SoundProviderProps {
    children: ReactElement | ReactElement[]
}

interface SoundContextValue {
    muted: boolean
    clicky: () => void
    mute: () => void
    unmute: () => void
}

export const soundContext = createContext<SoundContextValue>({
    muted: true,
    clicky: () => { },
    mute: () => { },
    unmute: () => { }
})

const SoundProvider: FC<SoundProviderProps> = ({ children }) => {
    const [muted, setMuted] = useState(true)
    const { clicky } = useSoundEffects()

    const mute = useCallback(() => setMuted(true), [setMuted])
    const unmute = useCallback(() => setMuted(false), [setMuted])

    const soundValue = useMemo(() => ({
        clicky,
        muted,
        mute,
        unmute
    }), [clicky, muted, mute, unmute])

    return (
        <soundContext.Provider value={soundValue}>
            {children}
        </soundContext.Provider>
    )
}

export default SoundProvider