import React, { Component } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from '@ionic/react';

class TripActivities extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar color="success" >
            <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
                <IonTitle>Trip Activities</IonTitle>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default TripActivities;