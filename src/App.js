import { useEffect, useState } from 'react';
import './App.css';
import Outdoor from './Outdoor';
import Service from './Service';
import Travel from './Travel';



function App() {
  var [data,setData] = useState({})
  useEffect(function () {
    fetch("./data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      setData(result);
    })
  },[])

  console.log(data);

  return (
    <div className="App">
      <Travel Title="Surfing in Maldives" Text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."/>
      <Outdoor Title="Outdoor Experience"Text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."/>
      <Service jsonData={data?.services?.delivery}/>
      <Service jsonData={data?.services?.parcel}/>
      <Service jsonData={data?.services?.check}/>
      <Service jsonData={data?.services?.service}/>
      {/* <Service Color={data.services && props.delivery.color} Icon={data.services && data.services.delivery.icon} Title="On-time delivery" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"/> */}
      {/* <Service Color={data.services && data.services.parcel.color} Icon={data.services && data.services.parcel.icon} Title="Parcels" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"/>
      <Service Color={data.services && data.services.check.color} Icon={data.services && data.services.check.icon} Title="Quality check" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"/>
      <Service Color={data.services && data.services.service.color} Icon={data.services && data.services.service.icon} Title="Customer service" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"/> */}
    </div>
  );
}

export default App;



// Services props={data.services}



