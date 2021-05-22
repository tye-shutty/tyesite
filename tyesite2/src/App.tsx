import { Redirect, Route } from 'react-router-dom';
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
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonButton
            fill="clear" 
            size="large">
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
      <Tab1 />
      <IonFooter>
        <IonToolbar>
          <IonTitle>May 21, 2021</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonReactRouter>
  </IonApp>
);

export default App;
