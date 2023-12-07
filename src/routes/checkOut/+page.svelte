<script>
    import productImg from "$lib/img/product-images/Top-Down-View.png"
    import {
    cartItems,
  } from "$lib/addToCart";
  import Logo from "$lib/logo.svelte";
  const totalPriceCheckOut = $cartItems.map(item => item.price).reduce((acc, price) => acc + price, 0)

</script>


<header class="header-main-cont">
    <Logo/>
</header>
  

<section class="main-cont">
{#if $cartItems.length !== 0}
    <div class="main-checkOut-cont">
        <div class="inner-checkOut-cont">
        <div class="info-cont">
            <h2>Contact and shipping info</h2>
          
  <form action="#" method="post" class="info-form">
    <input type="email" id="email" name="email" required placeholder="email">

    <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">
        <input type="checkbox" id="emilNews"> <span>email me with news and offers</span>
    </div>

    <input type="text" id="country" name="country" required placeholder="country">
    
    <div class="input-rap">
        <input type="text" id="firstName" name="firstName" required placeholder="first Name">
        <input type="text" id="lastName" name="lastName" required placeholder="last name">
    </div>


    <input type="text" id="company" name="company" placeholder="(company (optional))">

    <input type="text" id="address" name="address" required placeholder="address">

    <div class="input-rap">
        <input type="number" id="zipcode" name="zipCode" required placeholder="zip code">
        <input type="text" id="city" name="city" required placeholder="city">
    </div>

    <input type="number" id="phone" name="phone" required placeholder="phone">
  </form>
        </div>
        <div class="cart-info-cont">
            <div class="product-header"> <div style="position: relative;"><img class="product-img" src={productImg} alt=""><span class="quantity">{$cartItems.length}</span></div><span><span class="headerSpan">kornøs polaris</span> <br> <span style="font-weight: 400;">€ 1490</span></span></div>
            <div class="product-info">
            <div class="subtotal">
                <span>subtotal</span> <span style="font-weight: 400;">€ {totalPriceCheckOut}</span>
            </div>
            <div class="shipping">
                <span>shipping</span> <span style="font-weight: 400;">free</span>
            </div>
            <div class="total">
                <span>total</span> <span style="font-weight: 400;">€ {totalPriceCheckOut}</span>
            </div>
            <button class="payBtn">PLACE ORDER</button>
        </div>
        </div>
    </div>

    </div>
{:else}
    <h1>You have no items in your bag</h1>
{/if}
</section>

<style>

.header-main-cont {
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 90px;
    background: #112033;
    transition: all 0.5s;
    color: #fff;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 100;
    font-size: 15px;
    display: flex;
    justify-content: center;
  }


    h1{
        text-transform: uppercase;
       color: #fff; 
       font-weight: 400;
       font-size: 2rem;
    }

    h2{
       text-transform: uppercase;
       color: #fff; 
       font-weight: 400;
       font-size: 1.7rem;
    }

    input{
        border: 1px solid #D9D9D9;
        background-color: transparent;
        color: #fff;
        border-radius: 15px;
        height: 50px;
        width: 95%;
        padding-left: 4%;
        text-transform: uppercase;
    }

    /* style for checkbox input */
    #emilNews{
        border: 1px solid #D9D9D9;
        background-color: transparent;
        color: #fff;
        width: auto;
        height: auto;
        background-color: transparent;
    }
    span{
        text-transform: uppercase;
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        line-height: 25px;
    }

    .headerSpan{
        font-size: 1.3rem;
    }
    .main-cont{
        margin-top: 50px;
        width: 100%;
        min-height: 100vh;
        background-color: #0D1A2A;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-checkOut-cont{
        width: 55%;
        height: 70%;
        background-color: #112033;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .inner-checkOut-cont{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        width: 90%;
        gap: 30px;
    }
.info-cont{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 30px;
}

    .info-form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-right: 60px;
        border-right: 1px solid #D9D9D9;
    }

    .input-rap{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 15px;
    }




    .cart-info-cont{
        padding-top: 60px;
        height: 100%;
        width: 55%;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
        gap: 60px;
    }

    .product-header{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 25px;
    }

    .product-img{
        height: 80px;
        padding: 8px;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 15px;
        border: 1px solid #fff;
    }

    .quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d6d6d6;
        height: 15px;
        width: 15px;
        border-radius: 15px;
        font-size: 0.8rem;
        padding: 5px;
        font-weight: 400;
        color: #112033;
        position: absolute;
        top: -5px;
        right: -5px;
    }
    .product-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .subtotal, .shipping, .total{
        width: 100%;
        display: flex;
        justify-content: space-between;        
    }

    .shipping, .total{
        border-bottom: 1px solid #fff;
        padding-bottom: 5px;
    }

    .total{
        padding-top: 30px;
        margin-bottom: 20px;
    }
    .payBtn{
       background-color: #d9d9d94c;
       border: none;
       height: 45px;
       border-radius: 30px;
       color: #fff;
       cursor: default;
    }

     /* Styles for tablets */
  @media screen and (max-width: 1330px) {

    h2{
        font-size: 1.3rem;
    }

    span{
        font-size: 0.8rem;
    }

    .headerSpan{
        font-size: 1.1rem;
    }


    }

    @media screen and (max-width: 1110px) {

h2{
    font-size: 1.4rem;
}


input{
        height: 40px;
    }

.main-cont{
    padding-top: 100px;
    padding-bottom: 100px;
}

.headerSpan{
        font-size: 1.4rem;
    }



.main-checkOut-cont{
    background-color: transparent;
}

.inner-checkOut-cont{
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.info-cont{
    background-color: #112033;
    justify-content: center;
    align-items: center;
    padding: 50px;
    border-radius: 25px;
}

.info-form{
border: none;
justify-content: center;
align-items: start;
padding: 0;
width: 100%;
}

.cart-info-cont{
    width: 100%;
    align-items: center;
    padding: 0;
}

.product-info{
    width: 80%;
}
}

@media screen and (max-width: 768px) {

    h2{
    font-size: 1.1rem;
    }
    .headerSpan{
        font-size: 1.1rem;
    }

}

@media screen and (max-width: 480px) {


    .main-checkOut-cont{
        width: 90%;
    }

    .info-cont{
    background-color: #112033;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 25px;
}

}

</style>