import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const [ products, setProducts ] = useState([])
  const handleProductSelect = e => {
    if (e.target.checked) {
      setProducts([ ...products, e.target.value ])
    } else {
      setProducts(products.filter(product => product !== e.target.value ))
    }
  }

  return (
    <div className="App">
      <Wrapper>
        <h2 className="title">SPV Bolt Ons</h2>
        <div className="products-container">
          <div className="product">
            <label>Bolt On 1</label>
            <input type="checkbox" name="bolt_on" value="1" onChange={handleProductSelect} />
          </div>
          <div className="product">
            <label>Bolt On 1</label>
            <input type="checkbox" name="bolt_on" value="2" onChange={handleProductSelect} />
          </div>
          <div className="product">
            <label>Bolt On 1</label>
            <input type="checkbox" name="bolt_on" value="3" onChange={handleProductSelect} />
          </div>
          <div className="product">
            <label>Bolt On 1</label>
            <input type="checkbox" name="bolt_on" value="4" onChange={handleProductSelect} />
          </div>
          <div className="product">
            <label>Bolt On 1</label>
            <input type="checkbox" name="bolt_on" value="5" onChange={handleProductSelect} />
          </div>
          <div className="product">
            <label>Bolt On 1</label>
            <input type="checkbox" name="bolt_on" value="6" onChange={handleProductSelect} />
          </div>
          {products.length > 0 && <a href={process.env.REACT_APP_SERVERLESS_URL+`/create-checkout-session?ids=${products.join(",")}`} className='checkout'>Checkout</a>}
        </div>
        
      </Wrapper>
    </div>
  );
}

const colors = {
  base: '#009490',
  gray: '#969696',
  lightGray: '#d6d6d6'
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  .title {
    color: ${colors.base};
  }
  .products-container {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.12);
    width: 100%;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .product {
      color: ${colors.gray};
      border: 0.5px solid ${colors.lightGray};
      border-radius: 4px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 1.1rem;
      transition: all .2s ease-out;
      & > input {
        cursor: pointer;
      }
      &:hover {
        border: 0.5px solid transparent;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.12);
      }
    }
    .checkout {
      align-self: center;
      font-size: 1.2rem;
      color: white;
      background-color: ${colors.base};
      border-radius: 4px;
      text-decoration: none;
      padding: 10px 20px;
      cursor: pointer;
      transition: box-shadow .2s ease-out;
      &:hover {
        box-shadow: 0px 0px 20px rgba(0, 148, 144, 0.22);
      }
    }
  }
`

export default App;
