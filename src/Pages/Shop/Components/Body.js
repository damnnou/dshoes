import React, {useState, useEffect} from 'react'
import { styles } from '../../../Styles/shopStyles'
import SneakerCard from './SneakerCard'
import { useGetProductsQuery } from '../Redux/product/productApi';
import { useSelector } from 'react-redux';

const Body = ({filter}) => {

  const sneakerFilter = useSelector(state => state.filter);
  console.log(sneakerFilter);

  const [sneakers, setSneakers] = useState([]);

  const {data, isLoading, error} = useGetProductsQuery({page: 1, count: 100});

  useEffect(() => {
    if (!isLoading) {
      setSneakers(data.response.results.filter(item => item.data.category === "shoes"))
    }
  }, [data, isLoading])

  return (
    <div className={styles.body}>

    {isLoading ? 'Loading...' : error ? <div>{error}</div> : sneakers.filter(item => item.value.toLowerCase().includes(sneakerFilter)).map((item,index) => {
      return (
      <SneakerCard
      key={index}
      title={item.value}
      price={item.data.retail_price_cents/100}
      img={item.data.image_url}
      link={item.data.slug}
      id={item.data.id}
      color={item.data.color}
      date={item.data.release_date}
      /> 
      )
     }) 
    }

    </div>
  )
}

export default Body
