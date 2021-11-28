import React, { useRef, useState } from 'react';
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
  Backdrop,
  ResponceCard,
  Close,
  Loader,
  // Container,
} from './style';

import checkList from '../../assets/icon/checklist.svg';
import { useTranslation } from 'react-i18next';

const From = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();

  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState([]);
  const [loade, setLoade] = useState(true);
  const [visiblyBackdrop, setVisiblyBackdropd] = useState(false);
  const [responce, setResponce] = useState('');

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
      const obj = {};
      fileToBase64(target.files[prop], (err, result) => {
        if (result) {
          obj[target.files[prop].name] = result.split('base64,')[1];
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
    const temp = [...fileName];

    temp.splice(index, 1);

    setFileName(temp);
  };

  const onSubmit = (data) => {
    const dataWithFile = { ...data, file };
    setLoade(true);

    axios
      .post(`https://tranquil-sands-60093.herokuapp.com/post`, dataWithFile)
      .then((res) => {
        if (res.status === 200) {
          setVisiblyBackdropd(true);
          setResponce('success');
          alert('Ваша заявка отправленна');
          reset();
          setFile([]);
          setFileName([]);
        }
      })
      .catch((e) => {
        console.log(e);
        setResponce('error');
      })
      .finally(() => setLoade(false));
  };

  const ref = useRef(null);

  const clickBtn = () => {
    ref.current.click();
  };

  return (
    <Wrapper>
      {visiblyBackdrop ? (
        <Backdrop>
          {loade ? <Loader /> : null}

          {responce === 'success' ? (
            <ResponceCard>
              <Close onClick={() => setVisiblyBackdropd(false)} />
              <span>{t('main.success')}</span>
              <p>{t('main.success1')}</p>
            </ResponceCard>
          ) : null}

          {responce === 'error' ? (
            <ResponceCard>
              <Close onClick={() => setVisiblyBackdropd(false)} />
              <span>{t('main.error')}</span>
            </ResponceCard>
          ) : null}
        </Backdrop>
      ) : null}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <WrappTitle>
          <CheckIcon src={checkList} alt={''} />
          <FormTitle>{t('main.form')}</FormTitle>
        </WrappTitle>
        <FormGroup>
          <FormInput
            id="Name"
            type="text"
            placeholder="Name"
            required={true}
            {...register('firstName')}
          />
          <FormLabel for="Name">{t('main.formName')}</FormLabel>
        </FormGroup>

        <FormGroup>
          <FormInput
            placeholder={'Телефон'}
            id="telephone"
            type="text"
            required={true}
            {...register('telephone')}
          />
          <FormLabel for="telephone">{t('main.formTelephone')}</FormLabel>
        </FormGroup>

        <FormGroup>
          <FormInput
            placeholder={'EMail'}
            id="EMail"
            type="text"
            required={true}
            {...register('EMail')}
          />
          <FormLabel for="EMail">{t('main.formEmail')}</FormLabel>
        </FormGroup>

        <FormGroup>
          <FormInput
            placeholder={'Откуда'}
            id="from"
            type="text"
            {...register('from')}
          />
          <FormLabel for="from">{t('main.formFrom')}</FormLabel>
        </FormGroup>

        <FormGroup>
          <FormInput
            placeholder={'Куда'}
            id="to"
            type="text"
            {...register('to')}
          />
          <FormLabel for="to">{t('main.formTo')}</FormLabel>
        </FormGroup>

        <FormGroup>
          <FormInput
            placeholder={'Описание'}
            id="description"
            type="text"
            {...register('description')}
          />
          <FormLabel for="description">{t('main.formDescription')}</FormLabel>
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
          {t('main.fileUploader')}
        </Button>

        <Submit type="submit" value={t('main.formSubmit')} />
      </Form>
    </Wrapper>
  );
};

export default From;
