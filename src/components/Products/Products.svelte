<script>
    export let title = "";

    // import { onMount, onDestroy } from "svelte";
    import products from "../../stores/defaultProducts";
    import Product from "./Product.svelte";
    import Loading from "./Loading.svelte";

    // let localProducts = []
    // let unsubscribe;
    // onMount(() => {
    //     unsubscribe = products.subscribe(value => {
    //         console.log("subscribed");
    //         localProducts = value;
    //     });
    // });
    // onDestroy(() => {
    //     unsubscribe();
    // });
</script>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        <!-- {#each localProducts as product} or -->
        {#each $products as product (product.id)}
            <!-- <h2>{product.title}</h2>  or -->
            <Product {product} />
        {:else}
            <Loading />
        {/each}
    </div>
</section>