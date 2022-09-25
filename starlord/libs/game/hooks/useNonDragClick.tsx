export function useNonDragClick(callback: (any) => void) {
  let clientClickX = null;
  let clientClickY = null;

  const handleMouseDown = (e) => {
    clientClickX = e.x;
    clientClickY = e.y;
  };

  const handleMouseUp = (e) => {
    if (clientClickY === e.y && clientClickX === e.x) {
      callback(e);
    }
  };

  return { handleMouseDown, handleMouseUp };
}
