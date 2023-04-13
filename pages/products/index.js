import Link from 'next/link';
import { Layout } from '../../components';

const Products = () => {
  return (
    <Layout>
      <Link
        className="bg-green-600 text-white py-2 px-2 rounded-md"
        href="/products/new"
      >
        Add new product
      </Link>
    </Layout>
  );
};
export default Products;
