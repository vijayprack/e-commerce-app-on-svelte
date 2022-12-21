<script>
    import Hero from "../components/Products/Hero.svelte";
    // import { Link } from "svelte-routing"  or;
    import { link } from "svelte-routing";
    // featured products
    import Featured from "../components/Products/Featured.svelte";

    // function getProps() {
    //     return { class: "btn btn-primary btn-hero" };
    // };
</script>

<Hero>
    <!-- <Link to="/products" {getProps}>shop now</Link>   or -->
    <a href="/products" class="btn btn-primary btn-hero" use:link>shop now</a>
</Hero>

<Featured title="Featured Products" />