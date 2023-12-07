<script>
import { T, Canvas } from '@threlte/core'
  import * as Extra from "@threlte/extras";
  import Hand from "./hand.svelte";
  import {updateHandSize, updateHandColor} from "$lib/handStore"

  import watchImg from "./img/icons/icon _watch_.svg"
  import handImg from "./img/icons/ iconHand.svg"



/**
* @type {string} // Main cont;
*/
  let canvasActive;
  export function lodeCanvas() {
    canvasActive = "true";
  }

  let handSizeValue = 7;
  let inOrCm = "cm"
  let calcHandValue = 16; 
  function calcHanWidth(handValue){
  const minValue = 14;
  const maxValue = 18;
  let mappedValue = minValue + (handValue / 14) * (maxValue - minValue);
  mappedValue = minValue + (handValue / 14) * (maxValue - minValue);
  let cmValue = Math.round(mappedValue * 10) / 10;
  let inchesValue = Math.round((cmValue / 2.54) * 10) / 10;

  if(inOrCm === "cm"){
    calcHandValue = cmValue;
  }else if(inOrCm === "in"){
    calcHandValue = inchesValue;
  }else{
    calcHandValue = cmValue;
  }
}


</script>

{#if canvasActive === "true"}
  <div class="canvas-cont">
    <div class="info-cont">
      <h1>3D SIZE GUIDE</h1>
      <h3>KRONØS POLARIS</h3>
      <div style="display: flex; flex-direction: row; gap: 30px;">
      <div>
        <h4><span style="font-size: 2rem; font-weight: 400;"><img style="height: 25px" src={watchImg} alt="">39</span> <span>mm</span></h4>
      </div>
      <div>
        <h4><span style="font-size: 2rem; font-weight: 400;"><img style="height: 25px" src={handImg} alt="">{calcHandValue}</span> <span>{inOrCm}</span></h4>
      </div>
    </div>

    </div>
    <div class="controls">
      <input type="range" min="0" max="14" step="0.01" class="slider" bind:value={handSizeValue} on:input={()=>{updateHandSize(handSizeValue); calcHanWidth(handSizeValue)}}>
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px;">
          <button class="controls-btn" on:click={()=>{inOrCm = "cm", calcHanWidth(handSizeValue)}}>cm</button>
          <button class="controls-btn" on:click={()=>{inOrCm = "in", calcHanWidth(handSizeValue)}}>in</button>
        </div>
</div>
    <Canvas>
      <T.PerspectiveCamera
      makeDefault
      position={[0, 6, 2]}  
    >
      <Extra.OrbitControls 
      maxDistance= 4.1
      minDistance= 0.5
      enableRotate={true}
      enablePan={false}
      minAzimuthAngle={-Math.PI / 32} 
      maxAzimuthAngle={Math.PI / 32}  
      minPolarAngle={-Math.PI / 16}
      maxPolarAngle={Math.PI / 3}     
      />
    </T.PerspectiveCamera>

<T.DirectionalLight
position={[10, 20, 8]}
intensity={1.5}
castShadow
shadow.mapSize.width={2048}
shadow.mapSize.height={2048}
shadow.bias={0.0001}
/>
<T.AmbientLight
intensity={0.5}
/>

<Extra.SoftShadows 
focus={0}
size={48}
samples={24}
/>

<Hand position={[0, 0, 0]}/>
      
</Canvas>
<div id="skinColorPicker">
  <button class="black" on:click={()=>{updateHandColor("Dark")}}></button>
  <button class="tan" on:click={()=>{updateHandColor("Tan")}}></button>
  <button class="white" on:click={()=>{updateHandColor("Light")}}></button>
</div>
  </div>
{/if}

<style>

h1{
  font-size: 2.6rem;
}
  .canvas-cont {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #CBCBCB;
  }
  .info-cont{
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color:#182C45;
  }
  .controls{
    position: absolute;
    bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .controls-btn{
    border-radius: 50%;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #CBCBCB;
    background-color: #182C45;
  }

  #skinColorPicker{
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  .black, .tan, .white{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
  }

  .white{
    background-color: #FFDBAC;
  }

  .black{
    background-color: #482b12;
  }

  .tan{
    background-color: #E0AC69;
  }

  .slider {
  -webkit-appearance: none;
  width: 30%;
  height: 15px;
  border-radius: 15px;
  background: #a2a2a2;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: #182C45;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}
</style>
