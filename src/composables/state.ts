import { readonly, ref } from "vue";
import type { UnwrapRef } from "vue";

export const useState = <T>(initialState: T) => {
  const state = ref(initialState);

  const setState = (newState: UnwrapRef<T>) => {
    state.value = newState;
  };

  return [readonly(state), setState];
};
