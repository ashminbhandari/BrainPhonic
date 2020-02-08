import React from 'react';
import TopSection from './components/TopSection'; //The top component section where stuff like playback, recording options is going to be
import SideSection from './components/SideSection'; //The side component section where stuff like tracks, add a track will be
import TimeNavigator from "./components/TimeNavigator"; //The time navigator component that's right below the playback buttons
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';



function App() {
  return (
   <div className="container-fluid px-0">
       <div className="row no-gutters">
           <div className="col col-sm">
               <TopSection />
           </div>
       </div>
       <div className="row no-gutters">
         <div className="col-auto">
           <SideSection />
         </div>
         <div className="col">
            <TimeNavigator/>
         </div>
       </div>
   </div>
  );
}

export default App;
