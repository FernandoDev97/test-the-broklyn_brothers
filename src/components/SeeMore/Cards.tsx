import * as S from './styles'

interface CardsProps {
  src?: string
  alt?: string
  text?: string
}

const Cards = ({src, alt, text}: CardsProps) => {
  return (
       <S.Card>
         <img src={src} alt={alt} />
         <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
      </S.Card>
   
  )
}

export default Cards