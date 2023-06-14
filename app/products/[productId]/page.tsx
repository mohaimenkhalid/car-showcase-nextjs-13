import React, {Suspense} from 'react';
import getProduct from "@/lib/getProduct";
import getUsers from "@/lib/getAllUserList";
import UserList from "./components/UserList";
type Params = {
    params: {
        productId: string
    }
}

const ProductPage = async ({params: {productId}}: Params) => {
    const product = await getProduct(productId)
    const users = await getUsers()
    return (
        <>
            <div>name: {product.title}</div>
            <div>description: {product.description}</div>
            <div>price: {product.price}</div>
            <div>discountPercentage: {product.discountPercentage}</div>
            <div>rating: {product.rating}</div>
            <div>brand: {product.brand}</div>
            ....................................
            <Suspense fallback={<h1>Loading product list..................</h1>}>
                <UserList promise={users}  />
            </Suspense>

        </>
    );
};

export default ProductPage;