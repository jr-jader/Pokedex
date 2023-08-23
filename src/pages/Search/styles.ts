import { StyleSheet, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const commonStyles = {
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  pokemonItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

const nativeStyles = StyleSheet.create(commonStyles);

export const LoadingScreen = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.background};
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    flex: 1;
    position: relative;
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${Dimensions.get('window').width}px;
    margin-left: -20px;
    height: 220px;
    background: ${theme.colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    margin-top: -70px;
  `}
`;

const combinedStyles = {
  ...nativeStyles,
  LoadingScreen,
  Container,
  Header,
  Title,
};

export default combinedStyles;
