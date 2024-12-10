import React, { useState } from 'react';

const CourseSelection = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseSelect = (event) => {
    setSelectedCourse(event.target.value);
    alert(`You selected the course: ${event.target.value}`);
  };

  return (
    <div>
      <h2>Select a Course</h2>
      <select value={selectedCourse} onChange={handleCourseSelect}>
        <option value="">-- Select a Course --</option>
        <option value="Math 101">Math 101</option>
        <option value="Science 102">Science 102</option>
        <option value="History 103">History 103</option>
      </select>
    </div>
  );
};

export default CourseSelection;


// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebase';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';

// const CourseSelection = () => {
//   const [courses, setCourses] = useState([]);
//   const availableCourses = ['Math', 'Science', 'History'];

//   useEffect(() => {
//     const fetchUserCourses = async () => {
//       const user = auth.currentUser;
//       if (!user) return;
//       const userDoc = await getDoc(doc(db, 'users', user.uid));
//       if (userDoc.exists()) {
//         setCourses(userDoc.data().courses || []);
//       }
//     };

//     fetchUserCourses();
//   }, []);

//   const handleCourseChange = (e) => {
//     const { value, checked } = e.target;
//     setCourses(checked ? [...courses, value] : courses.filter(course => course !== value));
//   };

//   const saveCourses = async () => {
//     const user = auth.currentUser;
//     if (!user) return;
//     await updateDoc(doc(db, 'users', user.uid), { courses });
//     alert('Courses saved successfully!');
//   };

//   return (
//     <div>
//       <h2>Course Selection</h2>
//       {availableCourses.map((course) => (
//         <label key={course}>
//           <input 
//             type="checkbox" 
//             value={course} 
//             checked={courses.includes(course)} 
//             onChange={handleCourseChange} 
//           />
//           {course}
//         </label>
//       ))}
//       <button onClick={saveCourses}>Save Courses</button>
//     </div>
//   );
// };

// export default CourseSelection;
