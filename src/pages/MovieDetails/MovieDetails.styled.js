import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'shared/theme';

export const ContainerMovie = styled.div`
 display: flex;
`;

export const MovieImg = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
`;

export const MovieInfo = styled.div`
  padding: 10px 20px;
`;

export const MovieNameH2 = styled.h2`
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.bold};
  padding: 6px;
`;

export const MovieInfoText = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  padding: 6px;
`;

export const MovieInfoSpan = styled.span`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  padding-left: 10px;
`;

export const MovieNav = styled.nav`
   margin: 10px;
  display: flex;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  padding: 6px;
`;



export const MovieLink = styled(NavLink)`
  margin-left: 26px;
  padding: 8px 16px;
  border: 1px solid orangered;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;