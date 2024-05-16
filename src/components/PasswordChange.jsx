import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import { validatePassword } from '../utils/ValidationforPasswordChange';
import updatePassword from '../middleware/PasswordChangeApi';
import '../../src/Styles/PasswordChange.css'

const PasswordChange = () => {
    const [learnerId] = useState('d41c00b1-179c-439d-bead-bc2823af8824');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);







    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validatePassword(newPassword,oldPassword,confirmPassword);
        if (validationErrors.length > 0) {
          setError(validationErrors.join(' '));
          return; // This return should be here to prevent the try block from executing if there are errors.
        }
      
        try {
        //   const response = await axios.put(`http://localhost:5199/lxp/learner/updatePassword?learnerId=${learnerId}&oldPassword=${oldPassword}&newPassword=${newPassword}`);
        //   console.log(response.data);
        const message = await updatePassword(learnerId, oldPassword, newPassword);
          if (message === "Old password is incorrect") { // Use strict equality === for comparison
            alert("Failed to update the password");
          } else {
            alert("Password has been updated");
          }
        } catch (error) {
          console.error('Error updating password:', error);
          setError('Old password is incorrect'); // Set the error state to display the message
        }
      };
      

    return (
    
        
        <div className="d-flex justify-content-center align-items-center background" style={{ height: '100vh' }}>
            
            <Card style={{ width: '24rem' }}>
                
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Old Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)  }
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>New Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm New Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                
                            />
                        </Form.Group>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button variant="primary" type="submit">
                            Change Password
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default PasswordChange;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Card, Form, Button } from 'react-bootstrap';
// import { validatePassword } from '../utils/ValidationforPasswordChange';
// import {
//   setOldPassword,
//   setNewPassword,
//   setConfirmPassword,
//   setError,
//   updatePasswordAsync
// } from '../../src/actions/PasswordChangeAction'; // Adjust the import path as needed

// const PasswordChange = () => {
//     const dispatch = useDispatch();
//     const { oldPassword, newPassword, confirmPassword, error, isLoading } = useSelector(state => state);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = validatePassword(newPassword, oldPassword);
//         if (validationErrors.length > 0) {
//           dispatch(setError(validationErrors.join(' ')));
//           return;
//         }

//         dispatch(updatePasswordAsync(learnerId, oldPassword, newPassword));
//     };

//     // JSX for the component...

//     return (
//         <>
//                 <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            
//             <Card style={{ width: '22rem' }}>
//                 <Card.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Old Password:</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 value={oldPassword}
//                                 onChange={(e) => setOldPassword(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>New Password:</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 value={newPassword}
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Confirm New Password:</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                             />
//                         </Form.Group>
//                         {error && <p style={{ color: 'red' }}>{error}</p>}
//                         <Button variant="primary" type="submit">
//                             Change Password
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </div>
//         </>
//     );
// };

// export default PasswordChange;