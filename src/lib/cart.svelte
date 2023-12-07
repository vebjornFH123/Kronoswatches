<script>
  import removeIcon from "$lib/img/icons/exit-icon.svg";
  
  import {
    addItemToCart,
    cartItems,
    removeAllItemsFromCart,
    removeItemFromCart,
  } from "$lib/addToCart";

  let totalPrice = 0;
  let productAmount = 1;
  /**
   * @type {HTMLInputElement}
   */
  let inputAmount;
  $: {
    if ($cartItems.length === 0) {
      totalPrice = 0;
      productAmount = 1;
    } else {
      $cartItems.forEach(
        (item) => (totalPrice = item.price * $cartItems.length)
      );
      productAmount = $cartItems.length;
    }
  }

  let toggleActive = "";
  const toggleCartDisplay = () => {
    toggleActive = toggleActive === "" ? "active" : "";
  };
</script>

<div class="cart-cont">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="cart-btn"
      on:mousedown={() => {
        toggleCartDisplay();
      }}
    >
    CART ({$cartItems.length})
    </div>
  <div class="dropdown-cont {toggleActive}">
    <div
      style="display: flex; flex-direction: column; gap: 20px; align-items: center;"
    >
      <div class="cart-items-list">
        {#if $cartItems.length > 0}
          <div
            style="display: flex; flex-direction: row; gap: 70%; border-bottom: solid 0.7px; height: 60px; width: 90%; align-items: center;"
          >
            <div
              style="display: flex; flex-direction: row; gap: 10px; align-items: center;"
            >
              <h4>Total:</h4>
            </div>
            <h4>€{totalPrice}</h4>
          </div>
          <li class="cart-item">
            <img style="height: 90px;" src={$cartItems[0].img} alt="" />
            <div class="item-info">
              <h4>{$cartItems[0].name}</h4>
              <h5>Price: €{$cartItems[0].price}</h5>
            </div>
            <div class="quantity">
              <button
                on:click={removeItemFromCart}
                style="height: 19px; border-radius: 10px 0 0 10px; border: none; cursor: pointer"
                class="minus">-</button
              >
              <input
                style="height: 17px; width: 30px; display: flex; text-align: center; border: none;"
                type="number"
                min="1"
                value={productAmount}
                bind:this={inputAmount}
                on:input={() => {
                  const inputValue = Number(inputAmount.value)
                  productAmount = inputValue;
                  console.log(typeof inputAmount.value)
                  if (productAmount === 0) {
                    productAmount = 0;
                  }
                  addItemToCart(productAmount);
                }}
              />
              <button
                on:click={addItemToCart}
                style="height: 19px;border: none; border-radius: 0 10px 10px 0; cursor: pointer;"
                class="plus">+</button
              >
            </div>
            <button class="remove-item-btn" on:click={removeAllItemsFromCart}
              ><img style="height: 15px;" src={removeIcon} alt="" /></button
            >
          </li>
          <button class="check-out-btn" on:click={()=>{window.location.href = "/checkOut"}}>CHECKOUT</button>
        {:else}
          <h2 style="font-size: 1.1em; width: 100%; margin-bottom: 20px; margin-top: 20px;">
            You have no items in your bag.
          </h2>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  h4,
  h4,
  h5 {
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .dropdown-cont {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 90px;
    right: -370px;
    width: 370px;
    background-color: #112033;
    transition: right 0.5s;
    z-index:  1000;
    border-bottom-left-radius: 20px;
  }

  .dropdown-cont.active {
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0px;
  }
  
  .cart-items-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    align-items: center;
  }

  .cart-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 10px;
    padding: 10px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .cart-btn{
    display: flex; 
    flex-direction: row; 
    gap: 10px; 
    align-items: center;
    cursor: pointer;
  }

  .cart-btn:hover{
    border-bottom: #fff solid 1px;
  }

  .remove-item-btn {
    background-color: rgba(255, 255, 255, 0.139);
    backdrop-filter: blur(5px);
    border: none;
    border-radius: 40px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .check-out-btn {
    background-color: #fff;
    border: none;
    border-radius: 40px;
    width: 80%;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
  }

   /* Styles for tablets */
   @media (max-width: 1024px) {
    .dropdown-cont {
      top: 53px;
      right: -390px;
    }
    .dropdown-cont.active {
    right: -20px;
  }
   }

   @media (max-width: 480px) {
    .dropdown-cont {
      top: 53px;
      right: -500px;
    width: 100vw;
      border-bottom-right-radius: 20px ;
    }
    .dropdown-cont.active {
    right: -20px
    }


  }
</style>
