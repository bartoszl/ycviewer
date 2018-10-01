import styled from 'styled-components';

import { PRIMARY, GRAY } from '../../../../styles/colors';
import { TRANSITION } from '../../../../styles/utils';

export default styled.div`
  .pagination {
    list-style: none;
    padding: 0px;
    margin-top: 0px;
    display: flex;
    justify-content: center;

    li {
      padding: 0.25rem;
      margin: 0.25rem;

      &.active {
        a {
          color: ${PRIMARY};
          font-weight: 500;
        }
      }

      a {
        text-decoration: none;
        color: ${GRAY};
        transition: ${TRANSITION};

        &:hover {
          color: ${PRIMARY};
        }
      }
    }
  }
`;
