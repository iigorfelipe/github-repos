import * as C from './styles';

const Filters = () => {
  return (
    <C.Div>
      <C.Input
        type="text"
        placeholder="Encontre um repositório"
        // value={}
        // onChange={({ target: { value } }) => (value)}
      />
      <C.Select>
        <C.Option>Tipo</C.Option>
      </C.Select>
      <C.Select>
        <C.Option>Linguagem</C.Option>
      </C.Select>
      <C.Select>
        <C.Option>Ordem</C.Option>
      </C.Select>
    </C.Div>
  );
};

export default Filters;
