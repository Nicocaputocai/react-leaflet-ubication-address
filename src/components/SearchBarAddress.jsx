import { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
const NOMINATIM_BASE_URL = "http://nominatim.openstreetmap.org/search?";


export const SearchBarAddress = (props) => {
  const { setSelectPosition } = props;
  // console.log(setSelectPosition);
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [response, setResponse] = useState([])

  const requestGet = async() =>{
                  const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              }
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
       .then((response) => response.text())
       .then((result) => {
    //     console.log(JSON.parse(result));
         setListPlace(JSON.parse(result));
       })
       .catch((err) => console.log("err: ", err));
  }
 


  const handleChange = (e) =>{
    setSearchText(e.target.value)
    filter(e.target.value)
  }

  const filter = (search)=>{
    let result = response.filter((elemento) =>{
      if(elemento.toString().toLowerCase().includes(search.toLowerCase()))
      return elemento
    })
    setListPlace(result)
  }

  useEffect(()=>{
    requestGet()
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div className="mb-3" style={{ display:"flex" }}>
         <input
         style={{ width: "100%" }}
         value={searchText}
         onChange={handleChange}>

         </input>
          <div>
                      <div style={{ alignItems: "center" }}>
            <Button variant="success" style={{ flex: 1,}}
            onClick={requestGet}>
            Buscar
            </Button>
          </div>
          <div>
            
          <ListGroup variant="flush">
    {listPlace && listPlace.map((item) => {
      return (
        <button
          key={item?.place_id}
          onClick={() => {
            setSelectPosition(item?item:null);
            // console.log(item);
          }}
        >
          <ListGroup.Item> {item?.display_name}</ListGroup.Item>
        </button>
      );
    })}
  </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
