import React, { useEffect } from 'react';
import { Img, PageWrapper } from '../styles';
import trainImg from '../../assets/images/train.jpg';
import FormFromPages from '../formFromServices';
import { useTranslation } from 'react-i18next';

const TrainPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <Img src={trainImg} alt={''} />
      <h1>{t('train.h1')}</h1>
      <p>{t('train.description')}</p>
      <p>{t('train.p1')}</p>
      <li>{t('train.li1')}</li>
      <li>{t('train.li2')}</li>
      <li>{t('train.li3')}</li>
      <li>{t('train.li4')}</li>
      <li>{t('train.li5')}</li>
      <li>{t('train.li6')}</li>
      <li>{t('train.li7')}</li>
      <li>{t('train.li8')}</li>
      <li>{t('train.li9')}</li>
      <li>{t('train.li10')}</li>
      <p>{t('train.p2')}</p>
      <h2>{t('train.p3')}</h2>
      <li>
        <span>{t('train.span1')}</span>
        {t('train.li21')}
      </li>
      <li>
        <span>{t('train.span2')}</span>
        {t('train.li22')}
      </li>
      <li>
        <span>{t('train.span3')}</span>
        {t('train.li23')}
      </li>
      <li>
        <span>{t('train.span4')}</span>
        {t('train.li24')}
      </li>
      <p>{t('train.p3')}</p>
      <FormFromPages />
    </PageWrapper>
  );
};

export default TrainPage;
