import {useEffect, useState} from 'react'

export const Products = () => {

  const [products,setProducts] = useState([]);

  

  useEffect(()=>{
    const getProducts=async()=>{
      const response=await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data)
      setProducts(data.products);
     }
    getProducts()
  },[])
    
    return (
      <div className="products-container">
        {
          products.map(product=>{
            return (
              <> 
              <img src={product.thumbnail}/>
              <div>{product.title}</div>
              </>
            )
          })
        }
      </div>
    );
  };