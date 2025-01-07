<template>
    <header>
        CAT MASH
        <span>{{ route === 'classement' ? 'Le classement des chats' : 'Qui sera le plus beau chat ?' }}</span>
    </header>
    <slot />
    <footer>
        <NuxtLink :to="route === 'classement' ? '/' : '/classement'" class="classement">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            <span class="text">Accéder au {{ route === 'classement' ? 'vote' : 'classement' }}</span>
            <span class="votes">{{ totalVotes }} votes totaux</span>
        </NuxtLink>
    </footer>
</template>

<script lang="ts" setup>
    const route = computed(() => useRoute().name);

    const totalVotes = ref(0);

    onMounted(async () => {
        totalVotes.value = await $fetch('/api/allvotes');
    })
</script>

<style scoped>
    header {
        position: absolute;
        width: 100%;

        display: flex;
        font-family: Cat;

        flex-direction: column;
        
        align-items: center;
        justify-content: center;

        font-size: 60px;

        height: 16vh;
        background-color: var(--main-color-1);
    }

    header span {
        font-size: xx-large;
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-top: 10vh;

        font-family: Cat;
    }

    .classement {
        background-color: var(--main-color-1);

        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: center;

        height: 8vh;
        width: 30vw;
        padding: 4px;
        text-decoration: none;

        box-shadow: 0 0 0.5rem 0 var(--main-color-2);
        border-radius: 8px;

        transition: height 0.2s ease-out
    }

    .classement:hover {
        height: 9vh;
    }

    .classement svg {
        height: 16px;
    }

    .classement .text {
        color: var(--main-color-3);
        font-size: x-large;
        font-weight: bold;
    }
    .classement .votes {
        margin-top: 4px;
        font-size: smaller;
        font-weight: bold;
    }

    @media (max-width: 800px) {
        .classement {
            width: 60vw;
        }
    }

</style>