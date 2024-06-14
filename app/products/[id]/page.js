
import { getProduct } from '@/app/api/products/route';
import ProductDetailsPage from '@/components/ProductDetailsPage';
import React from 'react';

export async function generateStaticParams() {
  const products = getProduct();
  return products.map((product) => ({ id: product.id.toString() }));
}

const ProductPage = ({ params }) => {
  const product = getProduct(params.id);

  return (
    <div>
      <ProductDetailsPage data={product} />
    </div>
  );
};

export default ProductPage;
