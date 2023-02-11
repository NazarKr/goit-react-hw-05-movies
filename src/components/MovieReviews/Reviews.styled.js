import styled from 'styled-components';
import theme from 'shared/theme';

export const ReviewsUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Reviewsli = styled.li`
  border: ${theme.borders.normal} grey;
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadow.high};
`;

export const ReviewsInfoText = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  padding: 6px;
`;

export const ReviewsInfoP = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
  padding-left: 10px;
`;
