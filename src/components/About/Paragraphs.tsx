import React from 'react'
import * as S from './styles'

interface ParagraphsProps {
    text: React.ReactNode
}

const Paragraphs = ({text}: ParagraphsProps) => {
  return (
    <S.Content>
        <S.Paragraph>
            {text}
        </S.Paragraph>
    </S.Content>
  )
}

export default Paragraphs;