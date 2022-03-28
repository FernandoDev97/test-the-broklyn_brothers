import Cards from './Cards';
import * as S from './styles';

function SeeMore() {
  return (
    <S.Container>
      <h1>keep up to date with our discoveries</h1>
      <S.ContainerCards className='scroll'>
        <Cards src="/img/ImageCardOne.png" alt='Imagem de uma mulher amarrando o tênis alegre'/>
        <Cards src='/img/ImageCardTwo.png' alt='Imagem de uma mulher meia idade sorrindo'/>
        <Cards src='/img/ImageCardThree.png' alt='Imagem de gotígolas de água'/>
      </S.ContainerCards>
      <S.Button>
        <p>see more</p>
      </S.Button>
    </S.Container>
  );
}

export default SeeMore;
