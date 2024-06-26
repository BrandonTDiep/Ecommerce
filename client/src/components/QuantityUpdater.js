import {v4 as uuvid} from 'uuid'
const QuantityUpdater = ({ productId, quantity, handleIncrease, handleDecrease, size }) => {
    const inputId = `${productId}-${uuvid()}`
    return (
        (size === 'big') ? 
            <div className="quantity-btn my-5">
                <button className="quantity-button-minus" onClick={handleDecrease} aria-label="Decrease Quantity" disabled={quantity <= 1}>-</button>
                <input type="number" disabled id={inputId} name="quantity" title="Qty" className="quantity-selector-input" value={quantity} min="1" max="6"/>
                <label className="qty-label" htmlFor={inputId}>Qty</label>
                <button className="quantity-button-plus" onClick={handleIncrease} aria-label="Increase Quantity" disabled={quantity >= 6}>+</button>
            </div> 
            : 
            <div className="quantity-btn-small">
                <button className="quantity-button-minus-small" onClick={handleDecrease} aria-label="Decrease Quantity" disabled={quantity <= 1}>-</button>
                <input type="number" disabled id={inputId} name="quantity" title="Qty" className="quantity-selector-input-small" value={quantity} max="6"/>
                <button className="quantity-button-plus-small" onClick={handleIncrease} aria-label="Increase Quantity" disabled={quantity >= 6}>+</button>
            </div>
    )
}

export default QuantityUpdater