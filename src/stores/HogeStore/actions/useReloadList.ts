import { StateType } from "..";

export default (state: StateType) => {
  return async () => {
    state.list = [
      { id: 1, name: "hoge1" },
      { id: 2, name: "hoge2" },
      { id: 3, name: "hoge3" },
      { id: 4, name: "hoge4" },
    ];
  };
};
