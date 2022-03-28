import * as S from './styles';
import Link from 'next/link';
import MenuNavItem from './MenuNavItem';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useContext } from 'react';

import { context } from '../../context/userContext';

interface HeaderProps {
  src: string;
}

function Header({ src }: HeaderProps) {
  const ctx = useContext(context);

  return (
    <>
      <S.Header>
        <S.Menu>
          {!ctx.open ? (
            <img
              src="/img/menu.svg"
              onClick={() => ctx.setOpen(!ctx.open)}
              alt="Ícone de menu lateral para dispositivos mobile"
            />
          ) : (
            <img
              src="/img/xIcon.svg"
              onClick={() => ctx.setOpen(!ctx.open)}
              alt="Ícone de menu lateral para dispositivos mobile"
            />
          )}
        </S.Menu>
        <Link href="/">
          <a>
            <S.Logo
              onClick={() => ctx.setOpen(false)}
              src={src}
              alt="Imagem da logo da empresa intibiome"
            />
          </a>
        </Link>
        <S.Search>
          <img
            src="/img/search.svg"
            onClick={() => ctx.setOpen(false)}
            alt="Ícone de lupa para pesquisar no site"
          />
        </S.Search>
      </S.Header>
      <S.NavHeader>
        <ul>
          <MenuNavItem
            title="about us"
            onMouseEnter={() => ctx.setIsShowAbout(true)}
            onMouseLeave={() => ctx.setIsShowAbout(false)}
          >
            <ChevronDownIcon />
          </MenuNavItem>
          <MenuNavItem
            title="our products"
            onMouseEnter={() => ctx.setIsShowProducts(true)}
            onMouseLeave={() => ctx.setIsShowProducts(false)}
          >
            <ChevronDownIcon />
          </MenuNavItem>
          <MenuNavItem title="intimate health"
           onMouseEnter={() => ctx.setIsShowHealth(true)}
           onMouseLeave={() => ctx.setIsShowHealth(false)}
          >
            <ChevronDownIcon />
          </MenuNavItem>
          <MenuNavItem title="contact us" />
        </ul>
      </S.NavHeader>
    </>
  );
}

export default Header;
