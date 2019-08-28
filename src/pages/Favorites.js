import React, { Component } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from '@ionic/react';

class Favorites extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar color="success" >
            <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
                <IonTitle>Favorites</IonTitle>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default Favorites;