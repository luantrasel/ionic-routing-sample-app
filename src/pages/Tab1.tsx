import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonPage,
  IonContent,
  IonTitle,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton routerLink="/tab2">
                  Go to Page 2
                </IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Page 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Page 1" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
