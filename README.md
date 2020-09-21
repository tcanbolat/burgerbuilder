<h1 align="center">Burger Builder</h1>

<p align="center">Redux Saga  ----  React ----  Firebase REST API</p>

<p align="center" >
    <img width="120px" src="https://miro.medium.com/max/468/1*zcK3vvoVjsqkqB0oja8RWw.png" alt="redux saga">
    <img width="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" alt="React">
    <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png" alt="firebase">
</p>

<h4 align="center">Food ordering app. dynamically create your burger and checkout your order.</h4>

<h4 align="center"><a href="https://react-burger-builder-6bbb5.web.app/">... go ahead, order a burger! ...</a></h4>

___
___

<h4 align="center">Dependencies...</h4>
  
```javascript  

    // FRONT-END {Package.json}                          // BACK-END {.firbase.json}
    "axios": "^0.19.2",                                  "Firebase Rest API database"
    "enzyme": "^3.11.0",                                    
    "enzyme-adapter-react-16": "^1.15.2",
    "prop-types": "^15.7.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1",
    "react-test-renderer": "^16.13.1",
    "redux": "^4.0.5",
    "redux-saga": "^1.1.3",
```

___
___


<h5 align="center">Highlights</h5>

<p>the burger builder uses Redux Saga for state management, dispatching actions to wherever needed in the app. The state management is in the store folder that is broken down into actions, reducers, and sagas. This method of state management is the practiced by most React dev teams.</p>
<p>Custom http hook that can be used for any axios call, it takes in many parameters and send the request to firebase </p>
<p>mobile first app, adaptible to any screen size.</p>
<p>Optimized with React memo and React callback as well as lazy loading of components/pages</p>

___
___

<h5 align="center">Instructions</h5>
<p>install dependencies with npm install</p>
<p>Create a firebase realtime database account<p>
<p>in your root folder run firbase init, select hosting, and follow the instructions.<p>
<p>change the urls in the app files to your firebase url</p>

___
___

<h5 align="center">Demo</h5>

<p align="center">
<img src="readme-assets/burger-builder-demo.gif" />
<p/>
