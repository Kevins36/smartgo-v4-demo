export const applyDrag = (arr: any[], dragResult: any) => {
  const { removedIndex, addedIndex } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  const [movedItem] = result.splice(removedIndex, 1);
  
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, movedItem);
  }

  return result;
};
