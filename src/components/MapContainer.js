import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
import { BsFillFunnelFill, BsFillCalendarFill, BsFillPlusCircleFill } from 'react-icons/bs';

export default function MapContainer() {
  
    const mapStyles = {        
      height: "100vh",
      width: "100%"};
    
    const defaultCenter = {
      lat: 60.264340, lng: 24.991591
    }

    const [ selected, setSelected ] = useState({});
  
    const onSelect = item => {
        setSelected(item);
    }

    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 60.25745,
            lng: 25.03614 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 60.27589,
            lng: 24.95392
          },
        }
    ];
    
    
    return (
        <>
        <Container>
          <Row>
            <Col>
              <BsFillFunnelFill />
            </Col>
          
          <Col>
            <BsFillCalendarFill />
          </Col>

          <Col>
            <BsFillPlusCircleFill />
          </Col>
        </Row>
     </Container>

       <LoadScript
         googleMapsApiKey='AIzaSyCCPbzkVxIBiriErttuF1BUaefltuBm8s0'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    locations.map((item) => {
                      return(
                    <Marker key={item.name} 
                    position={item.location}
                    onClick={() => onSelect(item)}
                    />);
                    })
                }
                {
                    selected.location && 
                    (
                    <InfoWindow
                        position={selected.location}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                        >
                        <p>{selected.name}</p>
                    </InfoWindow>
                    )
                }
            </GoogleMap>
       </LoadScript>

       </>
    )

  }