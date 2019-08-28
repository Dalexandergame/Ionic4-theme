import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonImg, IonCard, IonCardContent, IonLabel, IonText, IonList, IonItem, IonIcon } from '@ionic/react';
import Img from '../imgs/telephone.jpg';

export default function Support() {
    return (
        <>
        <IonHeader>
            <IonToolbar color="success" >
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                    <IonTitle>Support</IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonCardContent>
                    <IonImg src={Img} alt="fone photo"/>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>
                    <IonList>
                        <IonItem>
                            <IonIcon slot="start" color="success" name="call"></IonIcon>
                            <IonLabel>
                                <IonText color="success">
                                    <p> Call to General Support </p>
                                    <h2>+1 (123) 456-7890 </h2>
                                </IonText>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon slot="start" color="success" name="call"></IonIcon>
                            <IonLabel>
                                <IonText color="success">
                                    <p> Call to Lease & Sale Support </p>
                                    <h2>+1 (123) 456-7890 </h2>
                                </IonText>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon slot="start" color="success" name="mail"></IonIcon>
                            <IonLabel>
                                <IonText color="success">
                                    <p> Email </p>
                                    <h2> support@ionbooking4.ionic </h2>
                                </IonText>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
        </IonContent>
        </>
    )
}