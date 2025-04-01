import type React from 'react'
import { useEffect, useState } from 'react'

function useImageUpload(defaultValue: string) {
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState(defaultValue)

  useEffect(() => {
    if (!file) return

    let reader: FileReader | null = new FileReader()

    reader.onloadend = () => {
      if (reader) {
        const res = reader.result
        if (res && typeof res === 'string') {
          setUrl(res)
        }
      }
    }
    reader.readAsDataURL(file)

    return () => {
      reader = null
    }
  }, [file])

  useEffect(() => {
    setUrl(defaultValue)
  }, [defaultValue])

  const handleChooseImage = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current?.click()
  }

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const file = e.currentTarget.files[0]
      setFile(file)
    }
  }

  return {
    file,
    url,
    handleChooseImage,
    handleChangeFile,
  }
}

export default useImageUpload
