import { StyledLink } from './BackToLink.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const BackToLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineArrowLeft /> {children}
    </StyledLink>
  );
};
