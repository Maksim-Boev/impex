import React, { useEffect } from 'react';
import {
  About,
  Container,
  LinkForm,
  LinkUI,
  Services,
  Text,
  Wrapper,
  WrapperCarousel,
  WrapperIcon,
} from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/train.webp';
import img2 from '../../assets/images/truck.webp';
import img3 from '../../assets/images/load aircraft.webp';
import img4 from '../../assets/images/ship.webp';
import {
  AirplaneIcon,
  ShipIcon,
  TrainIcon,
  TruckIcon,
} from '../../components/icons';

import FormPage from '../form';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <WrapperCarousel>
        <Carousel
          animationHandler="fade"
          stopOnHover={false}
          autoFocus={false}
          autoPlay={true}
          infiniteLoop={true}
          swipeable={false}
          transitionTime={1000}
          interval={5000}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          <img src={img1} alt={''} />
          <img src={img2} alt={''} />
          <img src={img3} alt={''} />
          <img src={img4} alt={''} />
        </Carousel>
        <LinkForm smooth to={'/#form'}>
          Подать заявку
        </LinkForm>
      </WrapperCarousel>

      <About id={'about'}>
        <Wrapper>
          <Container>
            <Text>
              <h2>{t('main.aboutTitle')}</h2>
              <span>
                {t('main.about')}
                <p>{t('main.aboutParagraph')}</p>
              </span>
            </Text>
          </Container>
        </Wrapper>
      </About>
      <Services id={'services'}>
        <Wrapper>
          <Container>
            <Text>
              <h2>{t('main.service')}</h2>
            </Text>
            <WrapperIcon>
              <LinkUI to={'/air'}>
                <AirplaneIcon />
                <span>{t('main.serviceAir')}</span>
              </LinkUI>

              <LinkUI to={'/ship'}>
                <ShipIcon />
                <span>{t('main.serviceShip')}</span>
              </LinkUI>

              <LinkUI to={'/truck'}>
                <TruckIcon />
                <span>{t('main.serviceTruck')}</span>
              </LinkUI>

              <LinkUI to={'/train'}>
                <TrainIcon />
                <span>{t('main.serviceTrain')}</span>
              </LinkUI>
            </WrapperIcon>
          </Container>
        </Wrapper>
      </Services>

      <FormPage />
    </div>
  );
};

export default Main;
