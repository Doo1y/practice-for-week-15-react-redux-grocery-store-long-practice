import produceData from "../mockData/produce.json";

const POPULATE = "produce/populate";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
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
    default:
      return state;
  }
};

export default produceReducer;
