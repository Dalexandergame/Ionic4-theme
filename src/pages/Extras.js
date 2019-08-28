import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';

export default function Extras() {
    return (
        <>
            <IonHeader>
                <IonToolbar color="success" >
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Extras</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonIcon slot="start" name="person"></IonIcon>
                        <IonLabel> Profile 1 </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" name="person"></IonIcon>
                        <IonLabel> Profile 2 </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" name="clock"></IonIcon>
                        <IonLabel> Timeline </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" name="lock"></IonIcon>
                        <IonLabel> Authentication (Login + Register) </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" name="apps"></IonIcon>
                        <IonLabel> PopUp Menu </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" name="pie"></IonIcon>
                        <IonLabel> Charts </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon slot="start" name="document"></IonIcon>
                        <IonLabel> Blog Post </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </>
    )
}