<template>
    <div class="vote">
        <VoteCat v-for="cat of cats" :url="cat.url" :id="cat.id" @reload-cats="loadCats" />
    </div>
</template>

<script lang="ts" setup>
    const cats = ref([]);

    async function loadCats () {
        cats.value = await $fetch('/api/randomcats');
    }

    onMounted(async () => {
        await loadCats();
    });
</script>

<style scoped>
    .vote {
        background-color: var(--main-color-1);
        display: flex;
        justify-content: space-around;
    }

    .vote div {
        height: 100vh;
    }

    @media (max-width: 800px) {
        .vote {
            flex-direction: column;
            gap: 40px;
            padding-top: 10vh;
            padding-bottom: 10vh;
        }

        .vote div {
            height: 50vh;
        }
    }

</style>