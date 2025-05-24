import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { fetchProducts, selectAllProducts, getProductsStatus, getProductsError } from '../store/productSlice';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === 'loading') {
    content = <p className="text-center">Loading products...</p>;
  } else if (productStatus === 'succeeded') {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (productStatus === 'failed') {
    content = <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      {content}
    </div>
  );
};

export default ProductsPage;