import * as S from './styles';
import Link from 'next/link';
import MenuNavItem from './MenuNavItem';
import { ChevronDownIcon } from '@heroicons/react/solid';

interface HeaderProps {
  src: string;
}

function Header({ src }: HeaderProps) {
  return (
    <>
      <S.Header>
        <S.Menu>
          <img src="/img/menu.svg" />
        </S.Menu>
        <Link href="/">
          <a>
            <S.Logo src={src} alt="Imagem da logo da empresa intibiome" />
          </a>
        </Link>
        <S.Search>
          <img src="/img/search.svg" />
        </S.Search>
      </S.Header>
      <S.NavHeader>
        <ul>
          <MenuNavItem title="about us">
            <ChevronDownIcon />
          </MenuNavItem>
          <MenuNavItem title="our products">
            <ChevronDownIcon />
          </MenuNavItem>
          <MenuNavItem title="intimate health">
            <ChevronDownIcon />
          </MenuNavItem>
          <MenuNavItem title="contact us" />
        </ul>
      </S.NavHeader>
    </>
  );
}

export default Header;
