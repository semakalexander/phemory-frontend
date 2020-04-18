import { useCallback, useRef, useEffect } from 'react'

type IUseTimeout = (duration: number) => ({ run: (callback: () => void) => void, abort: () => void})

const useTimeout: IUseTimeout = duration => {
  const timeoutId = useRef<number | null>(null)

  const abort = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
  }, [timeoutId])

  const run = useCallback(callback => {
    abort()

    timeoutId.current = setTimeout(() => {
      callback()
    }, duration)
  }, [timeoutId, duration])

  useEffect(() => {
    return () => abort()
  }, [abort])

  return { run, abort}
}

export default useTimeout
