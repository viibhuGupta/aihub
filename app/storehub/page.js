'use client';

import { useCart } from '@/components/CardContext';
import ProductsDataAPI from '@/components/ProductsDataAPI';

function StoreHubPage() {

    const { products, loading, addToCart } = useCart();
    console.log('add cart called ',addToCart);



    return (
        <section className="mb-20">
            <h1 className='text-5xl font-bold flex justify-center mt-20'>Product Store Is Here</h1>
            <div className="grid grid-row-1  md:grid-cols-3 sm:grid-cols-2 ">
                {
                    products.map((product)=> {
                        return(
                            <ProductsDataAPI key={product.id} data={product}/>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default StoreHubPage;
