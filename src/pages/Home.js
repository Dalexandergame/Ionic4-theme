import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

const Home = () => {
  return (
    <>
      <IonHeader>
          <IonToolbar color="success" >
              <IonMenuButton slot="start"/>
              <IonTitle>Home</IonTitle>
              <IonButtons slot="end">
                <IonButton size="small" fill="clear">
                  <IonIcon name="mail" />
                </IonButton>
                <IonButton size="small" fill="clear">
                  <IonIcon name="contact" />
                </IonButton>
              </IonButtons>
          </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Alex Home Page</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </>
  );
}

export default Home;