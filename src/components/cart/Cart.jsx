import './Cart.css';

const Cart = (props) => {
    const { cart, removeVisitedCountry } = props;
    return (
        <div className="cart-wrapper">
            <h2>Visited Countries : {cart.length}</h2>
            <div className='cart-container'>
                {
                    cart.map((data, idx) =>
                        <div key={idx} className=''>
                            <button onClick={() => removeVisitedCountry(data.cca3)}><img src={data.flags.png} alt="" /></button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;