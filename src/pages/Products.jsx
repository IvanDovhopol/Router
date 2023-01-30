import { useSearchParams } from 'react-router-dom';
import { ProductList } from 'components/ProductList';
import { getProducts } from 'path/to/fakeApi';
import { SearchBox } from 'components/SearchBox';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  function updateQueryString(name) {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  }

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
