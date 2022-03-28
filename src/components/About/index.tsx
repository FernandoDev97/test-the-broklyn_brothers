import Paragraphs from './Paragraphs';
import * as S from './styles';

function About() {
  return (
    <S.Container>
      <h1>we’re here to help</h1>
      <Paragraphs text="When it comes to caring for our most intimate areas, we’ve lost our connection." />
      <Paragraphs text="Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most." />
      <Paragraphs text="We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care." />
      <img
        src="/img/icons.png"
        alt="Imagem com os ícones e suas descrições em baixo"
      />
      <S.Descriptions>
        <h1>
          whatever your age. whatever your lifestyle. whatever your interests.
        </h1>
        <p>
          Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.
        </p>
        <p>
        As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.
        </p>
      </S.Descriptions>
    </S.Container>
  );
}

export default About;
