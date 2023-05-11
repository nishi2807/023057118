import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from 'path/to/actions';
import axios from 'axios';

function Dashboard(props) {
  const [userDetails, setUserDetails] = useState({});
  const { user } = props.auth;

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${user.id}`)
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  let userOptions;
  if (userDetails.role === 'applicant') {
    userOptions = (
      <ul>
        <li><a href="/profile">My Profile</a></li>
        <li><a href="/jobsList">View Jobs</a></li>
        <li><a href="/myApplications">My Applications</a></li>
      </ul>
    );
  } else if (userDetails.role === 'recruiter') {
    userOptions = (
      <ul>
        <li><a href="/profile">My Profile</a></li>
        <li><a href="/addJob">Add Job</a></li>
        <li><a href="/viewMyActiveJobs">My Job Listings</a></li>
        <li><a href="/employees">Employees</a></li>
      </ul>
    );
  }

  return (
    <div style={{ height: '75vh' }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">

          <h6></h6>
          <div style={{ width: '100%' }}>
            <div>
              <h4>
                <b>Hey {user.name.split(' ')[0]} !</b>
              </h4>
            </div>
            <div>
              <p className="flow-text grey-text text-darken-1">
                You are logged into the full-stack MERN app{' '}
                <span style={{ fontFamily: 'monospace' }}>
                  <b>JobsPlanet</b>
                </span>
              </p>
            </div>
            <div>{userOptions}</div>
            <div>
              <button
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  marginTop: '1rem',
                }}
                onClick={onLogoutClick}
                className="btn btn-primary btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);