"use client"
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import styles from './page.module.css';
import { Button, Dropdown, Space, Modal, Form, Input, Select,Upload } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Chose from './chosse'
import axios from 'axios'
interface Product {
  productName: string;
  description:string;
  price:string;
  stock:string;
  Category:string;
  image : string | null ;
}

const Index: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const items = [
    {
      key: '1',
      label: (
        <a role="button" tabIndex={0} onClick={() => setIsModalVisible(true)} style={{ outline: 'none' }}>
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


  const handleFormSubmit = async (values: Product) => {
    console.log('Received values of form: ', values);
    console.log(values.Category)
    setIsModalVisible(false); 
    const parsedPrice = parseFloat(values.price);
    const parsedStock = parseInt(values.stock);
    try {
      const response = await axios.post('http://localhost:3000/products/', {
        name: values.productName,
        description: values.description,
        price: parsedPrice,
        stock: parsedStock,
        Category: values.Category,
        image: values.image || null,
      });
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

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
      <Modal
        title="Add Product"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form  onFinish={handleFormSubmit}>
          <Form.Item
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter product name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Productdescription"
            label="description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input />
          </Form.Item> <Form.Item
            name="Productstock"
            label="Product stock"
            rules={[{ required: true, message: 'Please enter your stock' }]}
          >
            <Input />
          </Form.Item> <Form.Item
            name="Productprice"
            label="Product price"
            rules={[{ required: true, message: 'Please enter price' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Category"
            label="Category"
            rules={[{ required: true, message: 'Please select a category' }]}
          >
            <Select>
              <Select.Option value="Furniture">Furniture</Select.Option>
              <Select.Option value="Decor">Decor</Select.Option>
              <Select.Option value="Accessories">Accessories</Select.Option>
              <Select.Option value="Vintage">Vintage</Select.Option>
              <Select.Option value="Tools">Tools</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="image" label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined/>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Add to your profile
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Index;
