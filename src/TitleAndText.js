import './TitleAndText.css';

function TitleAndText({Title,Text,StyleTitle,StyleText}) {
 

  return (
    <div className="TitleAndText"> 
        <h1 className="TitleAndTextHeadline"style={StyleTitle} > 
        {Title}
        </h1>
        <p className="TitleAndTextContent grayText" style={StyleText}>
        {Text}
        </p>

    </div>
  );
}

export default TitleAndText;