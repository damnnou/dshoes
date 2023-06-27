import React, {useState, useEffect} from 'react'
import { styles } from '../../../Styles/shopStyles'
import SneakerCard from './SneakerCard'

const Body = ({filter}) => {

  const [sneakers, setSneakers] = useState([]);
  
  useEffect(() => {
    const jsonUrl =
      "https://ac.cnstrc.com/browse/collection_id/most-wanted-new?c=ciojs-client-2.29.9&key=key_XT7bjdbvjgECO5d8&i=458569db-a102-49fc-8931-c35b20b79029&s=1&page=1&num_results_per_page=100&_dt=1662752559635";
    fetch(jsonUrl)
      .then(response => response.json())
      .then(async(data) => {
        const fetchedData = await data.response.results;
        const filteredSneakers = fetchedData.filter(
          item => item.data.category === "shoes"
        );
        setSneakers(filteredSneakers);
      })
      .catch(error => {
        console.log("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <div className={styles.body}>

    {sneakers.filter(item => (item.value.toLowerCase()).includes(filter)).map((item,index) => {
      return (
      <SneakerCard
      onClick={() => console.log(sneakers)}
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
     })}

    

    </div>
  )
}

export default Body
