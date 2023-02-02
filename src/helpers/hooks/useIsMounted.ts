import { useRef, useEffect, useCallback, useState } from "react"

const useIsMounted = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        }
    }, [])

    return isMounted;
}

export default useIsMounted
