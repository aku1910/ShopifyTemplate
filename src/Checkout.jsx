import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, increaseItem, removeBasket } from './Slice/BasketSlice';
import { RiDeleteBin5Line } from "react-icons/ri";

const Checkout = () => {
    const basket = useSelector(state => state.basket.items);
    const total = useSelector(state => state.basket.total);
    const dispatch = useDispatch();
    
    return (
        <>
            <table className="border-collapse w-full">
                <thead>
                    <tr  className="bg-yellow  uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-center">Product</th>
                        <th className="py-3 px-6 text-center">Name</th>
                        <th className="py-3 px-6 text-center">Count</th>
                        <th className="py-3 px-6 text-center">Price</th>
                        <th className="py-3 px-6 text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {basket && basket.map(product => (
                        <tr style={{color:"white"}} key={product.id} className="border-b border-gray bg-purple">
                            <td className="py-3 px-6 text-center items-center">
                                <img src={product.ProductImage} alt={product.Name} className='w-[150px] items-center' />
                            </td>
                            <td className="py-3 px-6 text-center">{product.Name}</td>
                            <td className="py-3 px-6 text-center">
                                <div className='flex justify-center items-center'>
                                    <button onClick={() => dispatch(decreaseItem(product))}>-</button>
                                    <p>{product.count}</p>
                                    <button onClick={() => dispatch(increaseItem(product))}>+</button>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">${product.Price * product.count}</td>
                            <td className="py-3  px-6 text-center" onClick={() => dispatch(removeBasket(product.Id))}>
                               <button className='cursor-pointer '><RiDeleteBin5Line /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mt-4 text-center">Total Price : ${total}</p>
        </>
    );
}

export default Checkout;
