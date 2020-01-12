import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CarHeaderAside,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } =event.nativeEvent;

      offset += translationY;

      let opened = false;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 400 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 400 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
        <Card style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-350, 0, 400],
              outputRange: [-50, 0 , 400],
              extrapolate: 'clamp',
            }),
          }]
        }}>
          <CardHeader>
              <CarHeaderAside>
                <Icon name="attach-money" size={28} color="#666" />
                <Title>NuConta</Title>
              </CarHeaderAside>
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 1.022.019,26</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Depósito recebido de R$ 400,00
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>

      </Content>
      <Tabs translateY={translateY} />
    </Container>
  )
};
