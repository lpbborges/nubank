import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView).attrs({
  contentContainerStyle: { alignItems: 'center' },
  showsVerticalScrollIndicator: false,

})`
  overflow: hidden;
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
`;

export const ImageCode = styled.Image`
  height: 80px;
  width: 80px;
`;

export const Info = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const InfoText = styled.Text`
  color: #fff;
  align-items: center;
`;

export const InfoDescription = styled.Text`
  font-weight: bold;
  margin-left: 5px;
`;


export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.7);
`;

export const NavItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  align-self: stretch;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

