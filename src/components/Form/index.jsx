import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Form,
  FormInput,
  FormLabel,
  Wrapper,
  Input,
  Button,
  Submit,
  FormTitle,
  DropZone,
  FormGroup,
  FileDropZone,
  ButtonDel,
  CheckIcon,
  WrappTitle,
} from './style';

import checkList from '../../assets/icon/checklist.svg';

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

  const Delete = (index) => {
    console.log(fileName);
    const temp = [...fileName];

    temp.splice(index, 1);

    setFileName(temp);
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

    axios
      .post(`https://impexgroup.netlify.app/post`, dataWithFile)
      .then((res) => {
        console.log(res);
      });
  };

  const ref = useRef(null);

  const clickBtn = () => {
    ref.current.click();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <WrappTitle>
          <CheckIcon src={checkList} alt={''} />
          <FormTitle>Подать заявку</FormTitle>
        </WrappTitle>

        <FormGroup>
          <FormInput
            id="Name"
            type="text"
            placeholder="Name"
            required={true}
            {...register('firstName')}
          />

          <FormLabel for="Name">Имя</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder={'EMail'}
            id="EMail"
            type="text"
            required={true}
            {...register('EMail')}
          />
          <FormLabel for="EMail">EMail</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder={'Телефон'}
            id="telephone"
            type="text"
            required={true}
            {...register('telephone')}
          />
          <FormLabel for="telephone">Телефон</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder={'Откуда'}
            id="from"
            type="text"
            {...register('from')}
          />
          <FormLabel for="from">Откуда</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder={'Куда'}
            id="to"
            type="text"
            {...register('to')}
          />
          <FormLabel for="to">Куда</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder={'Описание'}
            id="description"
            type="text"
            {...register('description')}
          />
          <FormLabel for="description">Описание груза</FormLabel>
        </FormGroup>

        <Input
          ref={ref}
          type="file"
          name={'files'}
          multiple
          accept=".png, .jpeg, .pdf"
          style={{ display: 'none' }}
          onChange={onUploadFileChange}
        />
        <DropZone>
          {fileName.map((file, index) => (
            <FileDropZone key={file}>
              <p style={{ color: '#000' }}>{file}</p>
              <ButtonDel onClick={() => Delete(index)}>Delete</ButtonDel>
            </FileDropZone>
          ))}
        </DropZone>

        <Button type={'button'} onClick={clickBtn}>
          Загрузить файл
        </Button>

        <Submit type="submit" />
      </Form>
    </Wrapper>
  );
};

export default From;
