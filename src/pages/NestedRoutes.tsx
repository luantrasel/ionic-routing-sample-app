import { IonPage } from '@ionic/react';
import { IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router-dom'

import Tab2 from './Tab2';

const Main: React.FC = () => {
  return (
    <IonPage>
        <IonRouterOutlet>
            <Route exact path="/tab2" component={Tab2} />
        </IonRouterOutlet>
    </IonPage>
  );
};

export default Main;
