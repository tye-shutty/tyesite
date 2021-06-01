import React from 'react';
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';
import './Tab1.css';

const MyFooter: React.FC = () => (
  <IonFooter>
    <IonToolbar>
      <IonTitle>June 1, 2021</IonTitle>
    </IonToolbar>
  </IonFooter>
);

export default MyFooter;
