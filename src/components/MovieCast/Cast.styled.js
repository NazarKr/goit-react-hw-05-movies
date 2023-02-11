import styled from 'styled-components';
import theme from 'shared/theme';

export const CastTitle = styled.h2`
text-align:center;
margin-bottom: 8px;
`;

export const CastImg = styled.img`
  width: 200px;
  object-fit: cover;
  border-radius: ${theme.radii.normal};
`;

export const CastkUl = styled.ul`
 display: flex;
  justify-Content: center;
  align-Items: center;
  flex-Wrap: wrap;
  gap: 16px;
`;

export const Castkli = styled.li`
border: ${theme.borders.normal} grey;
border-radius: ${theme.radii.normal};
box-shadow: ${theme.shadow.high};
`;

export const CastInfo = styled.div`
  background-color: ${theme.colors.white};
`;

export const CastInfoText = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  padding: 6px;
`;

export const CastInfoSpan = styled.span`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  padding-left: 10px;
`;  