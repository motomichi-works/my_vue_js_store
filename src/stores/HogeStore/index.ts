import useReloadList from "./actions/useReloadList";
import usePostPathToUrl from "./actions/usePostPathToUrl";
import usePushToList from "./mutations/usePushToList";

type HogeItemType = {
  id: number;
  name: string;
};

export type StateType = {
  list: HogeItemType[];
};

type HogeStoreType = {
  actions: {
    reloadList: () => Promise<void>;
    postPathToUrl: () => Promise<void>;
  };
  mutations: {
    pushToList: (item: HogeItemType) => void;
  };
  state: StateType;
};

let store = {} as HogeStoreType;

const state = reactive<StateType>({
  list: [],
});

const actions = {
  reloadList: useReloadList(state),
  postPathToUrl: usePostPathToUrl(state),
};

const mutations = {
  pushToList: usePushToList(state),
};

export const createHogeStore = () => {
  store = {
    actions,
    mutations,
    state,
  };
};

export const useHogeStore = () => {
  return {
    actions: store.actions,
    mutations: store.mutations,
    state: readonly(store.state),
  };
};
