import React, { Component } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from '@ionic/react';

class RentCar extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar color="success" >
            <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
                <IonTitle>Rent A Car</IonTitle>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default RentCar;