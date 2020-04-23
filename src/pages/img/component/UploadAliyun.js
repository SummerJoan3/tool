import React from 'react';
import PropTypes from 'prop-types';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './UploadAliyun.scss';
const { Dragger } = Upload;

const UploadAliyun = ({ onChange }) => {
  const uploadParams = {
    name: 'file',
    multiple: false,
    action: 'https://api.xjq.icu/api/ossUpload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        const {
          response: { url },
          name
        } = info.file;
        message.success(`${name}上传成功!`);
        onChange(url);
      } else if (status === 'error') {
        const { name } = info.file;
        message.error(`${name}上传失败`);
      }
    }
  };
  return (
    <>
      <Dragger {...uploadParams} className={styles.draggerBox}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">选择图片</p>
      </Dragger>
    </>
  );
};

UploadAliyun.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default UploadAliyun;
