"use client"
import React from 'react';
import styles from './page.module.css';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
const Index = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          add Product
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          check your sells
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          notification
        </a>
      ),
    },
  ];
  return (
    <div className={styles.Container}>
      <div className={styles.BackgroundImage}>
        <div className={styles.CoverImage}></div>
        <div className={styles.photoContainer}>
          <div className={styles.addphoto}></div>
          <img className={styles.profilepic} src="https://via.placeholder.com/120x120" alt="Profile" />
        </div>
        <Space direction="vertical" className={styles.setting}>
         <Space wrap>
             <Dropdown menu={{ items }} placement="bottom">
                  <Button className={styles.setting}>Settings</Button>
              </Dropdown>
         </Space>
           </Space>
        <div className={styles.profilname}>Farhan Khan</div>
        <div className={styles.subname}>@farhan</div>
        <div className={styles.bio}>lvinar nerrrrrrrrrrgunc adipiscing.</div>
        <div className={styles.photoGa}>
          <img className={styles.picprod} src="https://via.placeholder.com/95x91" alt="Product" />
          <img className={styles.picprod1} src = "https://onlinepngtools.com/images/examples-onlinepngtools/400-by-400.png"alt="Product" /> 
          <img className={styles.picprod2} src="https://via.placeholder.com/95x91" alt="Product" />
          <img className={styles.picprod3} src="https://via.placeholder.com/95x91" alt="Product" />
          <img className={styles.picprod4} src="https://via.placeholder.com/95x91" alt="Product" />
          <img className={styles.picprod5} src="https://via.placeholder.com/95x91" alt="Product" />
          <img className={styles.picprod6} src="https://via.placeholder.com/95x91" alt="Product" />
          <img className={styles.picprod7} src="https://via.placeholder.com/95x91" alt="Product" />
        </div>
        <div className={styles.categoryname}>Photos</div>
        <div className={styles.SeeAllPhotos}>See All Photos</div>
        <img className= {styles.profilepicture}  src="https://via.placeholder.com/43x43" />
        <div className= {styles.profilename} >Farhan Khan</div>
        <div className={styles.tag} >@farhan</div>
        <div className={styles.time} >4m</div>
        <div className={styles.comment} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <img className= {styles.post} src="https://via.placeholder.com/666x426" />
      </div>
    </div>
  );
};

export default Index;
