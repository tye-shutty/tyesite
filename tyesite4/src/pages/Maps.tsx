import React, { useState, useCallback, useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton,
  IonRow, IonCol, IonGrid } from '@ionic/react';
// import Gallery from "react-photo-gallery";
// var Carousel = require('react-responsive-carousel').Carousel;
import MyFooter from './MyFooter';
import './Tab1.css';
// import "./image-gallery.css";
// const ImageGallery = require('react-image-gallery');
// import Carousel, { Modal, ModalGateway } from "react-images";
// const SimpleReactLightbox = require("simple-react-lightbox");
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css';
// const Carousel = require('react-gallery-carousel');
import getWindowDimensions from '../components/GetDimensions';

const Maps = () => {
  const images = [
    {
      src: "assets/maps/JaneFinchRecolour.png"
    },
    {
      src: "assets/maps/arcmap-col11.png"
    },
    {
      src: "assets/maps/bctransitroutes3.7.png"
    },
    {
      src: "assets/maps/dwellingtype1.3.png"
    },
    {
      src: "assets/maps/reitsma-vonaderkas-shutty-map1.2.png"
    }
  ];
  // const images = [9, 8, 7, 6, 5].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`
  // }));
  
  return (
    <div>
    <Carousel objectFit='contain' images={images} style={{ height: 800, width: getWindowDimensions()['width'] }} />
    </div>
  );
};

// const Maps: React.FC = () => (
//   <IonContent>
//     <ImageGallery items={images} />

//     <MyFooter />
//   </IonContent>
// );
          

export default Maps;
