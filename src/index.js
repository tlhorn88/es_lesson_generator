import React from 'react';
import ReactDOM from 'react-dom/client';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, getDocs, collection } from 'firebase/firestore';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {}
})

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyCw1W03TZ7TQi2MMtW6YyJBlnh-aswx9RY",
//   authDomain: "esmusiclessongenerator.firebaseapp.com",
//   databaseURL: "https://esmusiclessongenerator-default-rtdb.firebaseio.com",
//   projectId: "esmusiclessongenerator",
//   storageBucket: "esmusiclessongenerator.appspot.com",
//   messagingSenderId: "201729882751",
//   appId: "1:201729882751:web:8fc5eb652facdc5bf6dd4a"
// })

// const db = getFirestore(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
