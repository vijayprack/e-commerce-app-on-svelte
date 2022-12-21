<script>
    export let title = "";
    import products, {featuredStore} from "../../stores/defaultProducts";
    import Product from "./Product.svelte";
    import Loading from "./Loading.svelte";
    // $: featured = $products.filter(item => item.featured === true);
</script>


<!-- {#if featured.length === 0}  or -->
{#if $featuredStore.length === 0}
    <Loading />
{:else}
    <section class="section">
        <h2 class="section-title">{title}</h2>
        <div class="products-center">
            <!-- {#each featured as product (product.id)}  or -->
            {#each $featuredStore as product (product.id)}
            <Product {product} />
            {:else}
            <Loading />
            {/each}
        </div>
    </section>
{/if}