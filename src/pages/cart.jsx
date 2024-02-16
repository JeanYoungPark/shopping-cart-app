import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartTile from "../components/cart-tile"

export default function Cart() {
    const [totalCart, setTotalCart] = useState(0)
    const {cart} = useSelector(state => state)

    useEffect(() => {
        setTotalCart(cart.reduce((acc,curr) => acc + curr.price, 0))
    }, [cart])

    return (
        <div className='flex flex-col justify-center item-center max-w-6xl mx-auto'>
            {
                cart && cart.length > 0
                ? (
                    <div>
                        <div className='min-h-[60vh] max-w-6xl'>
                            <div className='p-3'>
                                {cart.map((cartItem, index) => <CartTile key={index} cartItem={cartItem}/>)}
                            </div>
                        </div>
                        <div className='border-t mt-5'>
                            <div className='flex flex-col justify-center item-end p-5'>
                                <h1 className='font-bold text-lg text-red-800 mb-4'>Your Cart Summary</h1>
                                <p>
                                    <span className='text-gray-800 font-bold'>Total Item</span>
                                    <span>: {cart.length}</span>
                                </p>
                                <p>
                                    <span className='text-gray-800 font-bold'>Total Amount</span>
                                    <span>: {totalCart}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className='min-h-[80vh] flex flex-col items-center justify-center'>
                        <h1 className='text-gray-800 font-bold text-xl mb-2'>Your cart is empty</h1>
                        <Link to='/'>
                            <button className='w-full bg-red-950 text-white rounded-lg font-bold p-3'>
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
