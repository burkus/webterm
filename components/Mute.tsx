import useSound from "@hooks/useSound";
import { FC, useCallback } from "react";
import { GoMute, GoUnmute } from 'react-icons/go'

const Mute: FC = () => {
    const { mute, unmute, muted } = useSound()
    const handleClick = useCallback(() => {
        if (muted) unmute()
        else mute()
    }, [mute, unmute, muted])

    return (
        <>
            <button onClick={handleClick} style={{ background: 'none', padding: 5, borderRadius: 10 }}>
                {muted ? <GoMute color='#2ad146' size={30} /> : <GoUnmute color='#2ad146' size={30} />}
            </button>
        </>
    )
}

export default Mute