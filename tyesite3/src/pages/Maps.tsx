import React, { useState, useCallback } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton,
  IonRow, IonCol, IonGrid } from '@ionic/react';
import Gallery from "react-photo-gallery";
// var Carousel = require('react-responsive-carousel').Carousel;
import MyFooter from './MyFooter';
import './Tab1.css';

import Carousel, { Modal, ModalGateway } from "react-images";


const photos = [
  {
    src: "assets/maps/JaneFinchRecolour.png",
    width: 208,
    height: 277
  },
  {
    src: "assets/maps/arcmap-col11.png",
    width: 22,
    height: 17
  },
  {
    src: "assets/maps/bctransitroutes3.7.png",
    width: 259,
    height: 225
  },
  {
    src: "assets/maps/dwellingtype1.3.png",
    width: 640,
    height: 1058
  },
  {
    src: "assets/maps/reitsma-vonaderkas-shutty-map1.2.png",
    width: 640,
    height: 490,
    href:"assets/maps/reitsma-vonaderkas-shutty-map1.2.png"
  }
];

const Tab1: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
  <IonContent>
    <Gallery photos={photos} />
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={photos.map(x => ({
              ...x,
              source: x.src,
              caption: x.src
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>

    <MyFooter />
  </IonContent>
);
          }

export default Tab1;
