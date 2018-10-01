import styled from 'styled-components';

import { GRAY } from '../../../../styles/colors';
import { BORDER_RADIUS } from '../../../../styles/utils';

const ItemTileWrapper = styled.li`
  box-shadow: 0px 0px 10px 2px ${GRAY};
  padding: 1rem 2rem;
  margin: 1rem 0rem;
  background-color: white;
  border-radius: ${BORDER_RADIUS};
`;

export default ItemTileWrapper;
