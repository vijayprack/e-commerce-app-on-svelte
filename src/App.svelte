<script>
	// pages
	import About from "./pages/About.svelte";
	import Checkout from "./pages/Checkout.svelte";
	import Home from "./pages/Home.svelte";
	import Login from "./pages/Login.svelte";
	import Products from "./pages/Products.svelte";
	import ProductTemplates from "./pages/ProductTemplates.svelte";
	// router
	import { Router, Link, Route } from "svelte-routing";
	// components
	import Navbar from "./components/Navbar/Navbar.svelte";
	import Sidebar from "./components/Navbar/Sidebar.svelte";
	import Cart from "./components/Cart/Cart.svelte";
	// global store
	import globalStore from "./stores/globalStore";
</script>

<Router>
	<Navbar />
	{#if $globalStore.sidebar}
		<Sidebar />
	{/if}
	{#if $globalStore.cart}
		<Cart />
	{/if}
	<!-- <nav class="navbar">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/products">Products</Link>
	</nav> -->
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/products" component={Products} />
	<Route path="/products/:id" component={ProductTemplates} />
</Router>
