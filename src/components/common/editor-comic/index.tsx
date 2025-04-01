import type { ChangeEvent } from 'react'
import React from 'react'

import { TextArea } from '../textarea'

type EditorComicProps = {
  rows?: number
  placeholder?: string
  className?: string
  register?: object
  onChange?: (content: string) => void
}

const EditorComic = ({
  rows = 10,
  placeholder = 'Nội dung',
  className = '',
  register,
  onChange,
}: EditorComicProps) => {
  const handleOnChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = convertToParagraphs(e.target.value)

    onChange && onChange(newContent)
  }

  const convertToParagraphs = (text: string) => {
    const paragraphs = text
      .split('\n')
      .filter((line: string) => line.trim() !== '')
      .map((line: string) => `<p>${line}</p>`)
      .join('')

    return paragraphs
  }

  return (
    <TextArea
      rows={rows}
      placeholder={placeholder}
      className={className}
      register={register}
      onChange={(e) => handleOnChangeTextArea(e)}
    />
  )
}

export default EditorComic
