<script>
    import { db } from "./firebase"
    import { collectionData } from "rxfire/firestore"
    import { startWith } from "rxjs/operators"

    export let user
    export let logout
    let message = ""

    const query = db.collection("chats").orderBy("sentAt")
    const chats = collectionData(query, "id").pipe(startWith([]))

    function sendMessage() {
        db.collection("chats").add({
            uid: user.uid,
            message: message,
            avatar: user.photoURL,
            sentAt:+new Date()
        })
        message = "";
    }
</script>

<main>
    <div class="header">
        <div class="logo">Bate papo</div>
        <button on:click={logout}>Sair</button>
    </div>
    <div class="messages">

    </div>
    <div class="form">
        <input type="text" bind:value={message}>
        <button on:click={sendMessage} >
           
        </button>
    </div>
</main>

<style></style>