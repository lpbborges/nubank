import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  ImageCode,
  Info,
  InfoText,
  InfoDescription,
  Nav,
  NavItem,
  NavContent,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

import qrcode from '~/assets/Qrcode.jpeg';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1],
      }),
    }}>
      <Code>
        <ImageCode source={qrcode} />
      </Code>
      <Info>
        <InfoText>Banco<InfoDescription> 000 - Nu Pagamentos S.A.</InfoDescription></InfoText>
        <InfoText>Agência<InfoDescription> 0000</InfoDescription></InfoText>
        <InfoText>Conta<InfoDescription> 0000000-0</InfoDescription></InfoText>
      </Info>

      <Nav>
        <NavItem>
          <NavContent>
            <Icon name="help-outline" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </NavContent>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavContent>
            <Icon name="person-outline" size={20} color="#fff" />
            <NavText>Perfil</NavText>
          </NavContent>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavContent>
            <Icon name="monetization-on" size={20} color="#fff" />
            <NavText>Configurar NuConta</NavText>
          </NavContent>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavContent>
            <Icon name="credit-card" size={20} color="#fff" />
            <NavText>Configurar Cartão</NavText>
          </NavContent>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavContent>
            <Icon name="store" size={20} color="#fff" />
            <NavText>Pedir Conta PJ</NavText>
          </NavContent>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavContent>
            <Icon name="smartphone" size={20} color="#fff" />
            <NavText>Configurações do app</NavText>
          </NavContent>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
