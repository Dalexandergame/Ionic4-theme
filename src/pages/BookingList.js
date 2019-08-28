import React, { Component } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from '@ionic/react';

class BookingList extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar color="success" >
            <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
                <IonTitle>Booking List</IonTitle>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default BookingList;