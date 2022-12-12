import produceData from '../mockData/produce.json';

const POPULATE = 'produce/populate';
const TOGGLE_LIKE = 'produce/toggleLike';

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export const toggleLike = (id) => {
  return {
    type: TOGGLE_LIKE,
    id: id
  };
};

const produceReducer = (state = {}, action) => {
  switch (action.type) {
    case POPULATE:
      const newState = { ...state };
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });
      return newState;
    case TOGGLE_LIKE:
      const id = action.id;
      const toggleObj = { ...state };
      const toggleLike = toggleObj[id];
      toggleObj[id].liked = !toggleLike.liked;
      return toggleObj;
    default:
      return state;
  }
};

export const getAllProduce = (state) => Object.values(state.produce);

export default produceReducer;
