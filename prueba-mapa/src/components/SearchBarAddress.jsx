import { useState } from "react";
import { Form, InputGroup, Button, ListGroup } from "react-bootstrap";
const NOMINATIM_BASE_URL = "http://nominatim.openstreetmap.org/search?";
const params = {
    q: "",
    format: "json",
    addressdetails: "addressdetails",
  };

export const SearchBarAddress = (props) => {
    const {selectPosition, setSelectPosition} = props
    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div className="mb-3" style={{ flex: 1 }}>

          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
         <input style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              console.log(event.target.value);
            }}>

         </input>
          <div>
                      <div style={{ display: "flex", alignItems: "center" }}>
            <Button variant="success" onClick={()=>{
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
                    console.log(JSON.parse(result))
                    setListPlace(JSON.parse(result))
                })
                .catch((err) => console.log("err: ", err));
            }}>Success
            </Button>
          </div>
          <div>
            <ListGroup variant="flush">
              <button onClick={()=>{setSelectPosition(item?.place_id)}}>
              {listPlace.map((item) => {
                return (
                  <div key={item}>
                    <ListGroup.Item > {item?.display_name}</ListGroup.Item>
                  </div>
                );
              })}
              </button>
            </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
