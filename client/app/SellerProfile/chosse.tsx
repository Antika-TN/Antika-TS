import { PlusOutlined } from '@ant-design/icons';
import {
  Upload,
} from 'antd';
import React, { useState } from 'react';
import {Form} from 'antd';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {
  return (
    <>
      <Form>
        
      </Form>
    </>
  );
};

export default FormDisabledDemo