// this helper creates a deep clone of the objects to update the state immutably and keep the reducer functions more lean.
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
