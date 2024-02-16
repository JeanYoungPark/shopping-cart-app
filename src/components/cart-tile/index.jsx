import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice"

export default function CartTile({cartItem}) {
    const dispatch = useDispatch()

    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem.id))
    }

    return (
        <>
            <div className='flex items-center justify-between mt-2 mb-10 rounded-xl shadow-xl p-5'>
                <div className='flex h-[8rem] p-3'>
                    <img
                        src={cartItem?.image}
                        alt={cartItem?.title}
                        className='rounded-lg'
                    />
                    <div className='h-full flex flex-col justify-center ml-10 self-start space-y-5'>
                        <h1 className='text-xl font-bold'>{cartItem?.title}</h1>
                        <p className='font-extrabold'>{cartItem?.price}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleRemoveFromCart}
                        className='w-full bg-red-950 text-white rounded-lg font-bold p-3'
                    >Remove from cart</button>
                </div>
            </div>
        </>
    )
}
