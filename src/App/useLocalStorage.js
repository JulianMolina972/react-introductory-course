import React, { useReducer } from "react";

function useLocalStorage(itemName, initialValue) {


  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { item, error, synchronizedItem, loading } = state;


  //ACTIONS CREATORS
  const onError = (error) => dispatch({
    type: actionTypes.error, 
    payload: error 
  });
  const onSuccess = (item) => dispatch({
    type: actionTypes.success, 
    payload: item 
  });

  const onSave = (item) => dispatch({
    type: actionTypes.save, 
    payload: item 
  });

  const onSynchronize = () => dispatch({
    type: actionTypes.synchronize, 
  
  });


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))  
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        onSuccess(parsedItem);
      } catch (error) {
        onError();
      }
    }, 3000)
  }, [synchronizedItem]);

  

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError();
    }
  
  };


  const synchronizeItem = () => {
    onSynchronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  synchronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  synchronize : 'SYNCHRONIZE',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
      }
    case actionTypes.success:
      return {
        ...state,
        error: false,
        loading: false,
        synchronizedItem: true,
        item: action.payload,
      }
    case actionTypes.save:
      return {
        ...state,
        item: action.payload,
      }
    case actionTypes.synchronize:
      return {
        ...state,
        error: false,
        loading: true,
        synchronizedItem: false,
      }

  }
}

export { useLocalStorage };