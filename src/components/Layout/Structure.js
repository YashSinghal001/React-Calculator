import React from 'react'
export const Structure = () => {
  return (
    <div>

      <div>
    <button style={{backgroundColor: "#a5a5a5", color: "black" }}class="operator ac">AC</button>
    <button style={{backgroundColor: "#a5a5a5", color: "black" }} class="operator del">DEL</button>
    <button style={{backgroundColor: "#a5a5a5", color: "black" }} class="operator">%</button>
    <button class="operator">/</button>
    </div>

    <div>
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button class="operator">*</button>
    </div>

    <div>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button class="operator">+</button>
    </div>

    <div>
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button class="operator">-</button>
    </div>

    <div>
        <button >00</button>
        <button >0</button>
        <button >.</button>
        <button class="equalbtn">=</button>
    </div>
      






    </div>
  )
}
