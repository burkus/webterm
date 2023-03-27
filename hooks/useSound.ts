import { useContext } from "react";
import { soundContext } from "@context/SoundContext";

export default function useSound() {
    return useContext(soundContext)
}