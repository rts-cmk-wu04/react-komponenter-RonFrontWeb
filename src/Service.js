import './Service.css';

function Service({jsonData}) {
  
  // var {Title,Text,Icon,Color} = jsonData
  var serviceColor = {
    backgroundColor: jsonData?.Color,
  }
  return (
    <div className="Service" style={serviceColor}>
        <div className="ServiceIconContainer">
            <img src={jsonData?.Icon} alt={jsonData?.Title}/>
        </div>
        <h3 className="ServiceHeadline">
            {jsonData?.Title}
        </h3>
        <p className="ServiceText">
            {jsonData?.Text}
        </p>

    </div>
  );
}

export default Service;