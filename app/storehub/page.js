'use client';

import { useCart } from '@/components/CardContext';
import ProductsDataAPI from '@/components/ProductsDataAPI';

function StoreHubPage() {

    const { products, loading, addToCart } = useCart();
    console.log('add cart called ',addToCart);



    return (
        <section>
            <h1 className='text-5xl font-bold flex justify-center'>Product Store Is Here</h1>
            <div>
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
