<script>
	import { auth, googleProvider } from "./firebase"
	import { authState } from "rxfire/auth"
	import Chatroom from "./Chatroom.svelte" 

	let user;

	const onsubscribe = authState(auth).subscribe(usr => user = usr)

	function loguin(){
		auth.signInWithPopup(googleProvider)
	}

	function logout (){
		auth.signOut()
	}
</script>

<main>
	<div class="wrapp">
		{#if user}
			<Chatroom user={user} />
		{:else}
			<div class="login-form">
				<button on:click={loguin}>
					<i class="fa-brands fa-google"></i>
					Entrar com o google
				</button>
			</div>
		{/if}
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		margin: 0 auto;
		box-shadow: 0 5px 10px rgba(0,0, 0, 0.05);
	}
	.wrapp {
		background: #fff;
		border: 1px solid #eee;
		width: 400px;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login-form {
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.login-form  button {
		padding: 10px;
		background: #fff;
		color: #111;
		font-size: 16px;
		cursor: pointer;
		outline: none;
		border: 1px solid #bbb;
	}
	.login-form  button i.fa {
		padding-right: 10px;
		border-right: 1px solid #ddd;
		color: #555;
	}

</style>