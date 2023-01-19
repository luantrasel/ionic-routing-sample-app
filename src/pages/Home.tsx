import { IonPage } from '@ionic/react';
import { IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router-dom'

import Tab1 from './Tab1';
import RoutesContainer from './RoutesContainer';
import Tab2 from './Tab2';

const Main: React.FC = () => {
  return (
    <IonPage>
        <IonRouterOutlet>
            <Route exact path="/" component={Tab1} />
            <Route path="/tab2" component={RoutesContainer} />
            {/* <Route path="/tab2" component={Tab2} /> */}
        </IonRouterOutlet>
    </IonPage>
  );
};

export default Main;
