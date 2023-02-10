import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
// import theme from '../../theme';

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 479.98px) {
    flex-wrap: wrap;
  }

  & li {
    color: ${p => 'black'};

    transition: color 250ms linear;

    :hover:not(.disabled) {
      color: ${p => '#333652'};
    }
  }

  & .activePage {
    color: ${p => '#FAD02C'};
  }

  & a {
    padding: 0 8px;
    cursor: pointer;
  }

  & a.disabled {
    cursor: default;
  }
`;
