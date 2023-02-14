
import ProductCard from '../product-card/product-card.component'
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

import { categoryItem } from '../../store/categories/category.types';
import { FC } from 'react';

type CategoryPreviewProps = {
  title: string;
  products: categoryItem[];
};

const CategoryPreview:FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
    <h2>
      <Title to={title}>{title.toUpperCase()}</Title>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
  );
};

export default CategoryPreview;