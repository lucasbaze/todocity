export function useNonDragClick(callback: (any) => void) {
  let clientClickX = null;
  let clientClickY = null;

  const handleMouseDown = (e) => {
    clientClickX = e.x;
    clientClickY = e.y;
  };

  const handleMouseUp = (e) => {
    // 2 is a magic number to give a little wiggle room on drag
    // When clicking quickly, I've needed to click multiple times sometimes
    if (
      clientClickY < e.y + 2 &&
      clientClickY > e.y - 2 &&
      clientClickX < e.x + 2 &&
      clientClickX > e.x - 2
    ) {
      callback(e);
    }
  };

  return { handleMouseDown, handleMouseUp };
}
