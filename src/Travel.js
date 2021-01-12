import './Travel.css';

function Travel({Title}) {
  return (
    <div className="Travel">
        <img className="TravelImage" src="https://picsum.photos/372/236" alt=""/>
    <div className="TravelContent">
      <p className="TravelCategory">travel</p>
      <h1 className="TravelHeadline" >{Title}</h1>
      <p className="TravelText">It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
    </div>
    </div>
  );
}

export default Travel;
