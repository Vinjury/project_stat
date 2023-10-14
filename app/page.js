import Image from 'next/image'
import Map from '../components/Map';
import React from 'react';
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="mapContainerWrapper">
    <Map />
    </div>
    </>
  );
}

