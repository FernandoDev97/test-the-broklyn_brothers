import React, { useState } from 'react'
import * as S from './styles'

interface MenuNavItemProps {
    title: string;
    children?: React.ReactNode
}

const MenuNavItem = ({title, children}: MenuNavItemProps ) => {
    const [icon, setIcon] = useState(false);

  return (
    <S.ContainerItems>
        <li>
            {title}
            {children}
        </li>
    </S.ContainerItems>
   
  )
}

export default MenuNavItem