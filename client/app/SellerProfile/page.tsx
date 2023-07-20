import React from 'react';
import styles from './page.module.css'
const Index = () => {
  return (
    <div className={styles.Container}>
      <div className="BackgroundImage">
        <div className="CoverImage"></div>
        <div className="photoContainer">
          <div className="addphoto"></div>
          <img className="profilepic" src="https://via.placeholder.com/120x120" />
        </div>
        <div className="profilname">Farhan Khan</div>
        <div className="subname">@farhan</div>
        <div className="bio">lvinar nerrrrrrrrrrgunc adipiscing.</div>
        <div className="photoGa"></div>
      </div>
    </div>
  );
};
export default Index;
