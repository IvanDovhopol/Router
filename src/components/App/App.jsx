import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Products = lazy(() => import('pages/Products'));
const ProductsDetails = lazy(() => import('pages/ProductsDetails'));
const NotFound = lazy(() => import('pages/NotFound'));

const Mission = lazy(() => import('components/About/Mission'));
const Team = lazy(() => import('components/About/Team'));
const Reviews = lazy(() => import('components/About/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductsDetails />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
