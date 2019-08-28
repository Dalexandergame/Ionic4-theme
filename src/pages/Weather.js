import React, { Component } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from '@ionic/react';

class Weather extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar color="success" >
            <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
                <IonTitle>Local Weather</IonTitle>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default Weather;