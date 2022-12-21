import { writable } from "svelte/store";

const globalStore = writable({
    sidebar: false,
    cart: false,
    alert: false
});

const store = {
    subscribe: globalStore.subscribe,
    // toggleCart: value => {
    //     globalStore.update(storeValues => {
    //         return { ...storeValues, cart: value };
    //     });
    //  } or
    toggleItem: (item, vlaue) => {
        globalStore.update(storeValues => {
            return { ...storeValues, [item]: vlaue };
        });
    }
};

export default store;