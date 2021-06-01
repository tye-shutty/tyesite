import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, 
  IonLabel, IonButton, IonFooter } from '@ionic/react';
import MyFooter from './MyFooter';
import './Tab1.css';

const Tab1: React.FC = () => (
  <IonContent
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScroll={() => {}}
    onIonScrollEnd={() => {}}>
    <IonCard
      href="https://chexy.tk"
      class="card">
      <IonCardHeader>
        <IonCardTitle>Chexy</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Chexy is a game I made with Alex, Amir, Ben, and Jakob for our capstone project for a BSC in Software Engineering. 
        I was responsible for deployment and helped with frontend-backend communication. The code repo 
        is <a href="https://gitlab.com/tshutty/engg4000">visible here</a>.
      </IonCardContent>
    </IonCard>
    <IonCard
      href="https://tyeshutty.tk/audio"
      class="card">
      <IonCardHeader>
        <IonCardTitle>Audīsne mē?</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Audīsne mē? is a CRUD web app that enables users to upload personal audio files, play them, and download them! 
        It was made with Vue, Flask-Restful, and MySQL. <a href="https://tyeshutty.tk/audio/info">Open API documentation is here</a>.
      </IonCardContent>
    </IonCard>
    <IonCard
      href="/maps"
      class="card">
      <IonCardHeader>
        <IonCardTitle>Maps</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        I have made several maps using Corel Draw and ArcGIS.
      </IonCardContent>
    </IonCard>
    <MyFooter />
  </IonContent>
);

export default Tab1;