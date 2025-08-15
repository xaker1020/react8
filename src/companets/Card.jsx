import  './card.css'

function Card(props) {
  return (
    <div>
     
<div className="card" style={{ backgroundColor:props.bg}}>
            <img src="./Picture.png" alt="" />
            <h2>NIKE AIR FORCE 1 ‘07 (white/black)</h2>
            <p>$89.99</p>
            <h3>I lost left shoe, don’t need this one anymore. <br /> Please buy it.</h3>
            <button style={{ backgroundColor:props.btn}}> <span className='icon'> <i class="fa-solid fa-cart-shopping"></i></span>  <span className='to'>Add to cart</span></button>
          </div>
    </div>
  )
}

export default Card
