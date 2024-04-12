import React from 'react'

function ShopPage() {

  return (
    <div>
        <div className='search_container'>
          <form action="" >
            <input type="text" placeholder='Search Products...' />
            <select name="location" id="">
                <option value="panskura"> Panskura</option>
                <option value="mechogram"> Mecheda</option>
                <option value="mecheda"> Mecheda </option>
                <option value="kgp"> KGP </option>
            </select>
            <button type='submit' > ok</button>
          </form>
        </div>
        <div className='shop_container'>

        </div>
    </div>
  )
}

export default ShopPage