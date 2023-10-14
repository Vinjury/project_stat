'use client'
import React , { useState }from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { GeoPath, GeoProjection, geoCentroid } from 'd3-geo';
import {Marker} from 'react-simple-maps';
import mapdata from '../utils/mapdata';
import { useRouter } from 'next/navigation'
const Map = () => {

  const router = useRouter()
  // const [hoveredState, setHoveredState] = useState(null);

  const handleLocationClick = (stateName) => {
    // const name = 'Húběi'

    // alert(`Showing more information on ${stateName}`)
    // console.log(`${stateName}`)

    console.log(stateName)

    if(stateName === 'Húběi')
    {router.push(`/Hubei`)}

    else if(stateName === 'Shāndōng')
    {router.push(`/Shandong`)}

    else if(stateName === 'Jiāngsū')
    {router.push(`/Jiangsu`)}

    else if(stateName === 'Ānhuī')
    {router.push(`/Anhui`)}
    
  }

  return (
    <ComposableMap
    projection='geoMercator'
    style={{ backgroundColor: 'white' }}
    projectionConfig={{
      scale: 747,
      center: [104.5, 37.7],
    }}
    fill='white'
    stroke='black'
    stroke-width={2}
    >

<Geographies geography={mapdata.data}>
        {(geographies) => {
          return (
            <>
              {geographies.geographies.map((geo) => {
                return <Geography key={geo.rsmKey} geography={geo} />;
              })}

              {geographies.geographies.map((geo) => {
                const stateName = geo.properties.VARNAME_1;
                return (
                  <>
                  <Geography
                    onClick={()=>handleLocationClick(stateName)}
                    key={geo.rsmKey}
                    geography={geo}
                    // onMouseEnter={() => setHoveredState(stateName)}
                    // onMouseLeave={() => setHoveredState(null)}
                    style={{
                      hover: {
                        fill: '#0abab5',
                      },
                    }}
                  />
                  </>
                );
              })}
              
            </>
          );
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;