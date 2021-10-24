import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const From = () => {
  // const [img, setImg] = useState();

  const { register, handleSubmit } = useForm();

  // const uploadScreenshotFile = (event) => {
  //   for (let size = 0; size < event.target.files.length; size++) {
  //     console.log('Selected file:', event.target.files[size]);
  //     const data = new FormData();
  //     data.append('file', event.target.files[0]);
  //     console.log(data.get('file'));
  //     // let file = {
  //     //   file: event.target.files,
  //     // };
  //
  //     setImg(event.target.files[size]);
  //     console.log('uploading screenshot file...');
  //     // axios
  //     //   .post(`http://localhost:3003/upload`, data, {
  //     //     headers: {
  //     //       'Content-Type': 'multipart/form-data',
  //     //     },
  //     //   })
  //     //   .then((res) => {
  //     //     console.log(res);
  //     //   });
  //   }
  // };

  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState([]);

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return;
    }

    for (let prop = 0; prop < target.files.length; prop++) {
      console.log(target.files[prop]);
      const obj = {};
      fileToBase64(target.files[prop], (err, result) => {
        if (result) {
          obj[target.files[prop].name] = result.split('base64,')[1];
          // setFile(result.split('base64,')[1]);
          setFile((prevState) => [
            ...prevState,
            { [target.files[prop].name]: result.split('base64,')[1] },
          ]);
          setFileName((state) => [...state, target.files[prop].name]);
        }
      });
    }
  };

  useEffect(() => {
    console.log('------');
    console.log(
      file.map((files) => ({
        filename: Object.keys(files)[0],
        content: Object.values(files)[0],
        encoding: 'base64',
      }))
    );
    console.log('------');
  }, [fileName]);

  const onSubmit = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append('file', data.files[0]);

    const dataWithFile = { ...data, file };

    console.log(dataWithFile);

    axios.post(`http://localhost/post`, dataWithFile).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} />
        <input {...register('secondName')} />
        <input {...register('telephone')} />
        <input
          type="file"
          name={'files'}
          multiple
          accept=".png, .jpeg, .pdf"
          className="multiple-upload"
          onChange={onUploadFileChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default From;
