import './Travel.css';

function Travel({Title,Text}) {
  return (
    <div className="Travel">
        <img className="TravelImage" src="https://picsum.photos/372/236" alt=""/>
    <div className="TravelContent">
      <p className="TravelCategory">travel</p>
      <h1 className="TravelHeadline" >{Title}</h1>
      <p className="TravelText grayText">{Text}</p>
    </div>
    </div>
  );
}

export default Travel;
