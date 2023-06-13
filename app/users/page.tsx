import React from 'react';
import type {Metadata} from "next";
import getAllProductList from '@/lib/getAllProductList'

export const metadata: Metadata = {
    title: 'Users list',
    description: "Here shows all the user list"
}
const UsersPage = async () => {
    const productData: ProductList = await getAllProductList()
    // const [productDataList] = await Promise.all([productData])
    console.log(productData)
    return (
        <div>
            users

            {
                productData.products.map(user => {
                    return(
                        <p>{user.title}</p>
                    )
                })
            }
        </div>
    );
};

export default UsersPage;