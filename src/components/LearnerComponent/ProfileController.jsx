import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
// For React Router version 4 or earlier
import { Link } from 'react-router-dom';
import PasswordChange from '../PasswordChange';




function ProfileController() {
    return (
        <>
            <div className="d-flex justify-content-end align-items-top " style={{ height: '25vh' }}>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Form>

                            <Button variant="primary" type="submit" className="mb-3 d-flex justify-content-center container-fluid"  >
                                Change Password
                            </Button>

                            {/* <Link to="/PasswordChange" id="passwordchange" style={{ display: 'none' }} ></Link> */}

                            {/* Edit Profile Button */}
                            <Button variant="secondary" type="button" className="mb-3 d-flex justify-content-center container-fluid">
                                Edit Profile
                            </Button>

                            {/* Sign Out Button */}
                            <Button variant="danger" type="button" className="mb-3 d-flex justify-content-center container-fluid">
                                Sign Out
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>

    )
}

export default ProfileController