import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import Img from '../imgs/Ionic-logo-landscape.png';

export default function About() {
    return (
        <>
            <IonHeader>
                <IonToolbar color="success" >
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                        <IonTitle>About</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                
                    <IonImg src={Img} alt="some-photo"/>
                
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle> IonBooking 4 Application </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore? 
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </>
    )
}
