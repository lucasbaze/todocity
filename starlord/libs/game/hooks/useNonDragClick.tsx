export function useNonDragClick(callback: () => void) {
  let clientClickX = null;
  let clientClickY = null;

  const handleMouseDown = (e) => {
    clientClickX = e.x;
    clientClickY = e.y;
  };

  const handleMouseUp = (e) => {
    if (clientClickY === e.y && clientClickX === e.x) {
      callback();
    }
  };

  return { handleMouseDown, handleMouseUp };
}
