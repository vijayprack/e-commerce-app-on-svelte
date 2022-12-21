import { derived, writable, Writable } from "svelte/store";
import localProducts from "../localProducts";

// subscribe
// set
// update

// flatten products
function flattenProducts(data) {
    return data.map(item => {
        let image = item.image.url;
    return {...item, image};
    });
};

// featured store
const store = writable(flattenProducts([...localProducts]));
export const featuredStore = derived(store, $featured => {
    // console.log("Hello from drived");
    // console.log($featured);
    return $featured.filter(item => item.featured === true);
});
export default store;
