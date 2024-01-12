import { Display } from '../../types/display';
import * as C from './styles';

type Props = {
  display: Display;
  setDisplay: React.Dispatch<React.SetStateAction<Display>>;
};

const Checkbox = ({ display, setDisplay }: Props) => {
  return (
    <C.Div>
      <C.Label htmlFor="list">
        Lista
        <C.RadioInput
          type="radio"
          name="display"
          id="list"
          defaultChecked={display === 'list'}
          onClick={() => setDisplay('list')}
        />
      </C.Label>
      <C.Label htmlFor="grid">
        Grade
        <C.RadioInput
          type="radio"
          name="display"
          id="grid"
          defaultChecked={display === 'grid'}
          onClick={() => setDisplay('grid')}
        />
      </C.Label>
      <C.Label htmlFor="carousel">
        Carrossel
        <C.RadioInput
          type="radio"
          name="display"
          id="carousel"
          defaultChecked={display === 'carousel'}
          onClick={() => setDisplay('carousel')}
        />
      </C.Label>
    </C.Div>
  );
};

export default Checkbox;
