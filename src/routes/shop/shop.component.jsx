

import { Route, Routes } from 'react-router-dom';
import { CategoriesProvider } from '../../contexts/categories.contex';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => (
  <CategoriesProvider>
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category />} />
    </Routes>
  </CategoriesProvider>
)
export default Shop
