import React, { useState } from 'react';

const GroupCreation = () => {
  const [groupName, setGroupName] = useState('');

  const handleCreateGroup = (e) => {
    e.preventDefault();
    alert(`Group "${groupName}" has been created!`);
    setGroupName(''); // Clear the input field
  };

  return (
    <div>
      <h2>Create a Study Group</h2>
      <form onSubmit={handleCreateGroup}>
        <input 
          type="text" 
          placeholder="Enter group name" 
          value={groupName} 
          onChange={(e) => setGroupName(e.target.value)} 
          required 
        />
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
};

export default GroupCreation;


// import React, { useState } from 'react';
// import { auth, db } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';

// const GroupCreation = () => {
//   const [groupName, setGroupName] = useState('');

//   const createGroup = async () => {
//     const user = auth.currentUser;
//     if (!user) return;
//     await addDoc(collection(db, 'groups'), {
//       name: groupName,
//       createdBy: user.uid,
//       members: [user.uid],
//     });
//     alert('Group created successfully!');
//     setGroupName('');
//   };

//   return (
//     <div>
//       <h2>Create a Study Group</h2>
//       <input 
//         type="text" 
//         placeholder="Group Name" 
//         value={groupName} 
//         onChange={(e) => setGroupName(e.target.value)} 
//       />
//       <button onClick={createGroup}>Create Group</button>
//     </div>
//   );
// };

// export default GroupCreation;
