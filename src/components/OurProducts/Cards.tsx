import * as S from './styles';

const Cards = () => {
  return (
    <S.CardsContainer className="scroll">
      <S.CardBlue>
        <img
          src="/img/imageCardBlue.png"
          alt="Imagem do sabonete líquido intibiome lavagem intima diária (Azul)"
        />
        <div>
          <p>intibiome wellness daily intimate wash</p>
        </div>
        <footer>
          <p>wellness</p>
        </footer>
      </S.CardBlue>

      <S.CardGreen>
        <img
          src="/img/imageCardGreen.png"
          alt="Imagem do sabonete líquido intibiome lavagem intima diária (Azul)"
        />
        <div>
          <p>intibiome active extra protection intimate wash</p>
        </div>
        <footer>
          <p>active</p>
        </footer>
      </S.CardGreen>
      <S.CardRed>
        <img
          src="/img/imageCardRed.png"
          alt="Imagem do sabonete líquido intibiome lavagem intima diária (Azul)"
        />
        <div>
          <p>intibiome agecare dryness relief intimate wash</p>
        </div>
        <footer>
          <p>agecare</p>
        </footer>
      </S.CardRed>
    </S.CardsContainer>
  );
};

export default Cards;
