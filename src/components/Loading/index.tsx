import ReactLoading, { LoadingProps } from 'react-loading';

const Loading = ({ type, color, height, width }: LoadingProps) => (
  <ReactLoading type={type} color={color} height={height} width={width} />
);

export default Loading;
