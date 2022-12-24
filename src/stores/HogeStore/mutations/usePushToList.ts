import { StateType } from "..";

export default (state: StateType) => {
  return (item: StateType["list"][number]) => {
    state.list.push(item);
  };
};
