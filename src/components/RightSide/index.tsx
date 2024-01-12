import { useState } from 'react';
import { Display } from '../../types/display';
import Checkbox from '../Checkbox';
import { List, Grid, Carousel } from '../Display';
import Filters from '../Filters';

import * as C from './styles';

const RightSide = () => {
  const [display, setDisplay] = useState<Display>('grid');

  return (
    <C.Container>

      <Checkbox display={display} setDisplay={setDisplay} />

      <Filters />

      <C.RightSide>
        {display === 'list' && <List />}
        {display === 'grid' && <Grid />}
        {display === 'carousel' && <Carousel />}
      </C.RightSide>
    </C.Container>
  );
};

export default RightSide;
