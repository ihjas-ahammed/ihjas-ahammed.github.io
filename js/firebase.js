// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics, logEvent, setUserProperties } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Your Firebase configuration (REPLACE WITH YOUR ACTUAL CONFIG)
const firebaseConfig = {
  apiKey: "AIzaSyAnjWWep4dtxvn1YKtmdU7A002X2NAvlX0",
  authDomain: "data-science-ef878.firebaseapp.com",
  databaseURL: "https://data-science-ef878-default-rtdb.firebaseio.com",
  projectId: "data-science-ef878",
  storageBucket: "data-science-ef878.firebasestorage.app",
  messagingSenderId: "1010841233830",
  appId: "1:1010841233830:web:e7aa0b516ace71c1720767",
  measurementId: "G-FL7XZR6X7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Automatically log the 'page_view' event
logEvent(analytics, 'page_view');
console.log("Automatic page_view event logged.");

// Example: Set a user property after a 5-second delay
setTimeout(() => {
  setUserProperties(analytics, { user_type: 'new_user' });
  console.log("User property set after delay.");
  getLastUpdate()
}, 500);

function getLastUpdate() {
  // Initialize the Realtime Database instance
  const db = getDatabase(app);
  // Create a reference to 'last_update' at the root of the database
  const lastUpdateRef = ref(db, 'last-update');

  // Retrieve the value from the database
  get(lastUpdateRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        console.log("Last update:", value);
      } else {
        console.log("No data available at 'last_update'");
      }
    })
    .catch((error) => {
      console.error("Error getting 'last_update' value:", error);
    });
}
console.log("firebase is OK!")