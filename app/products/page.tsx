import React from 'react';
import type {Metadata} from "next";
import getAllProductList from '@/lib/getAllProductList'
import Link from "next/link";

export const metadata: Metadata = {
    title: 'product list',
    description: "Here shows all the user list"
}
const UsersPage = async () => {
    const productData: ProductList = await getAllProductList()
    // const [productDataList] = await Promise.all([productData])
    console.log(productData)

    const content = (
        <div>
            users

            <table>
                <thead>
                <tr>
                    <td>SI</td>
                    <td>Title</td>
                    <td>Brand</td>
                    <td>Price</td>
                    <td>Stock</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    productData.products.map((product, index) => {
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{product.title}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link href={`/products/${product.id}`}>Details</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
    return content;
};

export default UsersPage;