 
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Register from './components/Register';
import Login from './components/Login'; // ✅ Uncomment this
import CourseSelection from './components/CourseSelection';
import GroupCreation from './components/GroupCreation';
import './App.css';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <h1>Study Group System</h1>
  
      {user ? (
        <div className="container">
          <h2>Welcome, {user.email}!</h2>
          <button className="logout" onClick={() => signOut(auth)}>Logout</button>
  
          <CourseSelection /> 
          <GroupCreation /> 
        </div>
      ) : (
        <div className="container">
          <Register />
          <Login />  
        </div>
      )}
    </div>
  );
  
}

export default App;


// import React, { useEffect, useState } from 'react';
// import { auth } from './firebase';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import Register from './components/Register';
// import Login from './components/Login';
// import CourseSelection from './components/CourseSelection';
// import GroupCreation from './components/GroupCreation';

// function App() {
//   const [user, setUser] = useState(null);

//   // Track user login/logout status
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         console.log('User is logged in:', currentUser.email);
//         setUser(currentUser);
//       } else {
//         console.log('User is logged out');
//         setUser(null);
//       }
//     });

//     return () => unsubscribe(); // Clean up the listener
//   }, []);

//   return (
//     <div className="App">
//       <h1>Study Group System</h1>

//       {user ? (
//         <div>
//           <h2>Welcome, {user.email}!</h2>
//           <button onClick={() => signOut(auth)}>Logout</button>

//           {/* Show these only if the user is logged in */}
//           <CourseSelection />
//           <GroupCreation />
//         </div>
//       ) : (
//         <>
//           <Register />
//           <Login />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
