import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonMenuButton, IonIcon, IonLabel } from '@ionic/react';

import { withRouter } from 'react-router-dom';

const Menu = ({ history }) => {
    return(
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar color="success">
                    <IonTitle>Start Menu</IonTitle>
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false}></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem onClick={() => history.push('/')}>
                        <IonIcon slot="start" name="home"></IonIcon>
                        <IonLabel> Home </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/bookingList')}>
                        <IonIcon slot="start" name="book"></IonIcon>
                        <IonLabel> Booking List </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/favorites')}>
                        <IonIcon slot="start" name="heart"></IonIcon>
                        <IonLabel> Favorites </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/rentCar')}>
                        <IonIcon slot="start" name="car"></IonIcon>
                        <IonLabel> Rent a Car </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/tripActivities')}>
                        <IonIcon slot="start" name="beer"></IonIcon>
                        <IonLabel> Trip Activities </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/weather')}>
                        <IonIcon slot="start" name="rainy"></IonIcon>
                        <IonLabel> Local Weather </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/about')}>
                        <IonIcon slot="start" name="information-circle-outline"></IonIcon>
                        <IonLabel> About </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/support')}>
                        <IonIcon slot="start" name="help-buoy"></IonIcon>
                        <IonLabel> Support </IonLabel>
                    </IonItem>
                    <IonItem onClick={() => history.push('/extras')}>
                        <IonIcon slot="start" name="paper"></IonIcon>
                        <IonLabel> Extras </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default withRouter(Menu);
