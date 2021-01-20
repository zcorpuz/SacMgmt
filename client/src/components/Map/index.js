import React from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default class Map extends React.Component {
    componentDidMount(){
        this.map = L.map('map').setView([38.604069, -121.399559], 13)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 12,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        L.marker([38.604069, -121.399559]).addTo(this.map)
            .bindPopup('Sacramento Management Company')
            .openPopup();
    }

    render() {
        return <Wrapper width="500px" height="400px" id="map" />
    }
}