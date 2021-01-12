import './Outdoor.css';

function Outdoor({Title,Text}) {

  return (
    <div className="Outdoor">
        <div className="OutdoorImageContainer">
            <img className="OutdoorImage" src="https://picsum.photos/193/375" alt=""/>
        </div>
        <div className="OutdoorContent">
            <h2 className="OutdoorCategory">Leisure</h2>
            <h1 className="OutdoorHeadline">{Title}</h1>
            <p className="OutdoorText grayText">{Text}</p>
        <div className="ThumbnailContainer">
            <div className="ThumbnailImageContainer">
            <img className="OutdoorThumbnail" src="https://picsum.photos/100/100?random=1" alt=""/>
            </div>
            <div className="ThumbnailImageContainer">
            <img className="OutdoorThumbnail" src="https://picsum.photos/100/100?random=2" alt=""/>
            </div>
            <div className="ThumbnailImageContainer">
            <img className="OutdoorThumbnail" src="https://picsum.photos/100/100?random=3" alt=""/>
            </div>
        </div>
        
        
        </div>
    </div>
  );
}

export default Outdoor;
