import React, { useEffect } from 'react';
import { Img, PageWrapper } from '../styles';
import shipImg from '../../assets/images/ship.jpg';
import FormFromPages from '../formFromServices';
import { useTranslation } from 'react-i18next';

const ShipPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <Img src={shipImg} alt={''} />
      <h1>{t('ship.h1')}</h1>
      <p>{t('ship.description1')}</p>
      <p>{t('ship.p')}</p>
      <h2>{t('ship.h2')}</h2>
      <li>
        <span>{t('ship.span1')}</span>
        {t('ship.li1')}
      </li>
      <li>
        <span>{t('ship.span2')}</span>
        {t('ship.li2')}
      </li>
      <li>
        <span>{t('ship.span3')}</span>
        {t('ship.li3')}
      </li>
      <h2>{t('ship.h3')}</h2>
      <p>{t('ship.p1')}</p>
      <p>{t('ship.p2')}</p>
      <li>{t('ship.li6')}</li>
      <li>{t('ship.li7')}</li>
      <li>{t('ship.li8')}</li>
      <li>{t('ship.li9')}</li>
      <li>{t('ship.li10')}</li>
      <li>{t('ship.li11')}</li>
      <li>{t('ship.li12')}</li>
      <li>{t('ship.li13')}</li>
      <li>{t('ship.li14')}</li>
      <li>{t('ship.li15')}</li>
      <li>{t('ship.li16')}</li>
      <p>{t('ship.p3')}</p>
      <p>{t('ship.p4')}</p>
      <FormFromPages />
    </PageWrapper>
  );
};

export default ShipPage;
