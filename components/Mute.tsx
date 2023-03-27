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
            <button onClick={handleClick}>
                {muted ? <GoMute size={50} /> : <GoUnmute size={50} />}
            </button>
        </>
    )
}

export default Mute