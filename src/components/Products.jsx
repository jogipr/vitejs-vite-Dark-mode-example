import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const [ skip ,setSkip]= useState(6);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products?limit=6&skip=${skip}`);
      const data = await response.json();
      console.log(data)
      setProducts(data.products?.slice(0,6));
    }
    getProducts()
  }, [skip])

  const handleClick = (id) => {
    navigate(`products/${id}`);
  }
  const handleNext=()=>{
    setSkip(prev=> prev+6);
  }

  const handlePrev=()=>{
    setSkip(prev=> prev-6);
  }
  return (
    <div className="products-container">
      {
        products.map(product => {
          return (
            <div key={product.id} className='product' onClick={() => handleClick(product.id)}>
              <img src={product.thumbnail} />
              <div>{product.title}</div>
            </div>
          )
        })
      }
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};