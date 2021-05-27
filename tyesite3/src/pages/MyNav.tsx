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

const MyNav: React.FC = () => (
  <IonHeader>
    <IonToolbar>
      <IonButton
        fill="clear" 
        size="large"
        href="/">
        Tye Shutty's Website</IonButton>
      <IonButton
        fill="clear" 
        href="https://github.com/tye-shutty"> 
        GitHub
      </IonButton>
      <IonButton
        fill="clear" 
        href="https://www.linkedin.com/in/tye-shutty-8aa183145/"> 
        LinkedIn
      </IonButton>
      <IonButton
        fill="clear" 
        href="https://docs.google.com/document/d/1_1-TO20KLUHZK76n7EQ8AbTsNYqnMNEXVRdZBMRUKEE"> 
        Resume
      </IonButton>
    </IonToolbar>
  </IonHeader>
);

export default MyNav;
