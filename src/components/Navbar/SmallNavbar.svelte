<script>
    // cart button
    import CartButton from "../Cart/CartButton.svelte";
    import { link } from "svelte-routing";
    // global button
    import globalStore from "../../stores/globalStore";
    let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
    <div class="nav-center">
        <!-- slidebar toggle -->
        <button class="btn-sidebar-toggle" on:click="{() => openSidebar('sidebar', true)}">
            <i class="fas fa-bars" />
        </button>
        <!-- logo -->
        <a href="/" use:link class="nav-logo">
            <img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
        </a>
        <!-- cart button -->
        <CartButton />
    </div>
</nav>