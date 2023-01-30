import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  const location = useLocation();

  return (
    <Container>
      {products.map(({ id, name }) => (
        <CardWrapper key={id}>
          <Link to={id} state={{ from: location }}>
            <img
              src="https://cdn.pixabay.com/photo/2021/12/28/21/23/decoration-6900215_960_720.jpg"
              alt="placeholder"
            />
            <ProductName>{name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
