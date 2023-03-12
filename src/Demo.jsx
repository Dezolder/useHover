import { useHover } from './useHover';

function Demo() {
  const { hovered, ref } = useHover();

  return (
      <div ref={ref}>
        {hovered ? 'меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
  );
}

export default Demo;
