import * as S from './styles'

interface MenuNavItemProps {
    title: string;
    children?: React.ReactNode
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const MenuNavItem = ({title, children, onMouseEnter, onMouseLeave}: MenuNavItemProps ) => {

  return (
    <S.ContainerItems>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {title}
            {children}
        </li>
    </S.ContainerItems>
   
  )
}

export default MenuNavItem