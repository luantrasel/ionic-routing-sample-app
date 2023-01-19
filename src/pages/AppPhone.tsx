import { Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { triangle } from 'ionicons/icons';

import Home from './Home'

const App: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>
            <Route path="/">
                <Home />
            </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="main" href="/">
                <IonIcon icon={triangle} />
                <IonLabel>Main</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
);

export default App;
