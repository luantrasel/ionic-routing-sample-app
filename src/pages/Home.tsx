import { IonPage } from '@ionic/react';
import { IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router-dom'

import Tab1 from './Tab1';
import NestedRoutes from './NestedRoutes';
import Tab2 from './Tab2';

const Main: React.FC = () => {
  return (
    <IonPage>
        <IonRouterOutlet>
            <Route exact path="/" component={Tab1} />
            {/* Animation / Swipe back does NOT work */}
            <Route path="/tab2" component={NestedRoutes} />
            {/* Animation / Swipe works correctly */}
            {/* <Route path="/tab2" component={Tab2} /> */}
        </IonRouterOutlet>
    </IonPage>
  );
};

export default Main;
