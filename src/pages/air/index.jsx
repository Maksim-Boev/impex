import React, { useEffect } from 'react';
import { Img, PageWrapper } from '../styles';
import airImg from '../../assets/images/load aircraft.jpg';
import FormFromPages from '../formFromServices';
import { useTranslation } from 'react-i18next';

const AirPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <Img src={airImg} alt={''} />
      <h1>{t('air.h1')}</h1>
      <p>{t('air.description1')}</p>
      <h2>{t('air.h2')}</h2>
      <li>
        <span>{t('air.span1')}</span>
        {t('air.li1')}
      </li>
      <li>
        <span>{t('air.span2')}</span>
        {t('air.li2')}
      </li>
      <li>
        <span>{t('air.span3')}</span>
        {t('air.li3')}
      </li>
      <li>
        <span>{t('air.span4')}</span>
        {t('air.li4')}
      </li>
      <li>
        <span>{t('air.span5')}</span>
        {t('air.li5')}
      </li>
      <p>{t('air.p1')}</p>
      <h2>{t('air.h3')}</h2>
      <li>{t('air.li6')}</li>
      <li>{t('air.li7')}</li>
      <li>{t('air.li8')}</li>
      <li>{t('air.li9')}</li>
      <li>{t('air.li10')}</li>
      <li>{t('air.li11')}</li>
      <li>{t('air.li12')}</li>
      <li>{t('air.li13')}</li>
      <li>{t('air.li14')}</li>
      <li>{t('air.li15')}</li>
      <li>{t('air.li16')}</li>
      <li>{t('air.li17')}</li>
      <p>{t('air.p2')}</p>
      <h2>{t('air.h4')}</h2>
      <li>{t('air.li18')}</li>
      <li>{t('air.li19')}</li>
      <li>{t('air.li20')}</li>
      <li>{t('air.li21')}</li>
      <li>{t('air.li22')}</li>
      <li>{t('air.li23')}</li>
      <li>{t('air.li24')}</li>
      <li>{t('air.li25')}</li>
      <li>{t('air.li26')}</li>
      <li>{t('air.li27')}</li>
      <li>{t('air.li28')}</li>
      <li>{t('air.li29')}</li>
      <li>{t('air.li30')}</li>
      <FormFromPages />
    </PageWrapper>
  );
};

export default AirPage;
