import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { BrowserRouter, Route } from 'react-router-dom';
import { IonApp, IonPage, IonSplitPane, IonRouterOutlet } from '@ionic/react';

import Menu from './components/Menu';

import Home from './pages/Home';
import BookingList from './pages/BookingList';
import Favorites from './pages/Favorites';
import RentCar from './pages/RentCar';
import TripActivities from './pages/TripActivities';
import Weather from './pages/Weather';
import About from './pages/About';
import Support from './pages/Support';
import Extras from './pages/Extras';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <IonApp>
          <IonSplitPane contentId="main">
            <Menu />
            <IonPage id="main">
              <IonRouterOutlet>
                <Route exact path="/" component={Home} />
                <Route exact path="/bookingList" component={BookingList} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/rentCar" component={RentCar} />
                <Route exact path="/tripActivities" component={TripActivities} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/about" component={About} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/extras" component={Extras} />
              </IonRouterOutlet>
            </IonPage>
            </IonSplitPane>
        </IonApp>
      </BrowserRouter> 
    );
  }
}

export default App;
            
