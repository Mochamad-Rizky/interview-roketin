import {
  HeaderDashboardItem, Loading
} from "../index";

import './HeaderDashboard.css';

const HeaderDashboard = ({ userData }) => {
  const differentNationality = userData && new Set(userData.map((user) => {
    return user.nat.toLowerCase();
  })).size;
  
  const totalMaleGender = userData && userData.filter((user) => {
    return user.gender === 'male';
  }).length;
  
  const totalFemaleGender = userData && userData.filter((user) => {
    return user.gender === 'female';
  }).length;
  
  const mostGender = totalMaleGender > totalFemaleGender ? 'Male' : 'Female'
  const averageAge = userData && userData.reduce((prev, cur) => {
    return prev?.dob?.age || 0 + cur?.dob?.age || 0;
  });
  
  const averageMembership = userData && userData.map((user) => {
    const convertAgeToEpoch = Math.abs(new Date(user.registered.date).getTime() - +Date.now());
    const yearMilliSeconds = 365 * 24 * 60 * 60 * 1000;
    
    return parseInt(convertAgeToEpoch / yearMilliSeconds);
  }).reduce((prev, cur) => prev + cur) / userData.length;
  
  return (
    <section className="header-dashboard">
      {!userData ? <Loading /> : (
        <>
          <HeaderDashboardItem
            total={differentNationality}
            icon={<i className="fa-solid fa-flag"></i>}
            message="Different Nationality"
          />
          <HeaderDashboardItem
            total={mostGender}
            icon={mostGender === 'Male' ? <i className="fa-solid fa-mars"></i> : <i className="fa-solid fa-venus"></i>}
            message="Most Gender"
          />
          <HeaderDashboardItem
            total={`~${parseInt(averageAge)}`}
            icon={<i className="fa-solid fa-person-running"></i>}
            message="Average Age"
          />
          <HeaderDashboardItem
            total={`~${parseInt(averageMembership)} years`}
            icon={<i className="fa-solid fa-people-group"></i>}
            message="Average Membership"
          />
        </>
      )}
    </section>
  )
};

export default HeaderDashboard;
