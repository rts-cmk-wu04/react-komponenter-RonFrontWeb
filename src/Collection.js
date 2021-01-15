import './Collection.css';
import TitleAndText from './TitleAndText';

function Collection({jsonData}) {

  var StyleTitle = {
    textAlign: "center",
    paddingTop:"30px"
    

  }
  var styleText = {
    textAlign: "center",
    color:"black"

  }

  
  return (
    <div className="Collection">
      
        <h2 className="CollectionCategory">{jsonData?.Categroy}</h2>
        <div className="CollectionImageContainer">
        <img className="CollectionImage" src={jsonData?.Background} alt={jsonData?.Title}/>
        <img className="CollectionThumbnail" src={jsonData?.Thumbnail} alt=""/>
        </div>
        <TitleAndText Title={jsonData?.Title} Text={jsonData?.Text} StyleTitle={StyleTitle} StyleText={styleText}/>
  
    </div>
  );
}

export default Collection;


// Slet herunder

// var obj = {
//   jsonData: "Title",
//   something: "Something",
//   somethingElse: "Hello"
// }

// same

// test(obj);

// function test(props){
//   console.log(props.jsonData);
// }

// same

// function testWithDestructuring({jsonData, something}){
//   console.log(jsonData);
// }
