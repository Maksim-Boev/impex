import React, { useEffect } from 'react';
import {
  About,
  Container,
  Form,
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
import From from '../../components/Form';

const Main = () => {
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
              <h2>О нас</h2>
              <span>
                ООО &quot;Международная компания &quot;ИМПЕКСГРУП &quot; успешно
                работает на рынке Украины с 1999 года и предоставляет широкий
                спектр услуг в сфере грузоперевозок железнодорожным,
                автомобильным, морским и воздушным транспортом, хранения,
                сопровождения и таможенного оформлениягрузов.
                <p>
                  Мы используем передовые технологии в транспортной логистике,
                  постоянно расширяя перечень грузов и географию поставок,
                  предлагаем клиентам выгодные условия сотрудничества,
                  гарантируем высокий уровень безопасности перевозимых товаров.
                  Цель нашей компании – обеспечивать логистический сервис,
                  который полностью отвечает современным европейским и мировым
                  стандартам.
                </p>
              </span>
            </Text>
          </Container>
        </Wrapper>
      </About>
      <Services id={'services'}>
        <Wrapper>
          <Container>
            <Text>
              <h2>НАШИ УСЛУГИ</h2>
            </Text>
            <WrapperIcon>
              <LinkUI to={'/ship'}>
                <ShipIcon />
                <span>Морские перевозки</span>
              </LinkUI>

              <LinkUI to={'/air'}>
                <AirplaneIcon />
                <span>Авиаперевозки грузов</span>
              </LinkUI>

              <LinkUI to={'/train'}>
                <TrainIcon />
                <span>Железнодорожные перевозки</span>
              </LinkUI>

              <LinkUI to={'/truck'}>
                <TruckIcon />
                <span>Автомобильные перевозки</span>
              </LinkUI>
            </WrapperIcon>
          </Container>
        </Wrapper>
      </Services>

      <Form id={'form'}>
        <Wrapper>
          <Container>
            <From />
          </Container>
        </Wrapper>
      </Form>
    </div>
  );
};

export default Main;
