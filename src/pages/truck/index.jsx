import React, { useEffect } from 'react';
import { PageWrapper, Img } from '../styles';
import truckImg from '../../assets/images/truck.jpg';
import FormFromPages from '../formFromServices';
import { useTranslation } from 'react-i18next';

const TruckPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <Img src={truckImg} alt={''} />
      <h1>{t('truck.h1')}</h1>
      <p>{t('truck.description1')}</p>
      <h2>{t('truck.h2')}</h2>
      <p>{t('truck.p')}</p>
      <p>{t('truck.p1')}</p>
      <li>{t('truck.li1')}</li>
      <li>{t('truck.li2')}</li>
      <li>{t('truck.li3')}</li>
      <li>{t('truck.li4')}</li>
      <li>{t('truck.li5')}</li>
      <li>{t('truck.li6')}</li>
      <li>{t('truck.li7')}</li>
      <p>{t('truck.p2')}</p>
      <h2>{t('truck.h3')}</h2>
      <p>{t('truck.p3')}</p>
      <li>{t('truck.li21')}</li>
      <li>{t('truck.li22')}</li>
      <li>{t('truck.li23')}</li>
      <li>{t('truck.li24')}</li>
      <li>{t('truck.li25')}</li>
      <p>{t('truck.p4')}</p>
      <FormFromPages />
    </PageWrapper>
  );
};

export default TruckPage;
