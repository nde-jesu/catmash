<template>
    <div class="classement">
        <ClassementCat v-for="(cat, index) of cats.slice(2)" :url="cat.url" :votes="cat.votes" :place="index + 1"/>
    </div>
</template>

<script lang="ts" setup>
    const cats = ref([]);
    const currentPage = ref(1);

    async function loadCats () {
        cats.value = await $fetch('/api/allcats', {
            query: {
                page: currentPage.value
            }
        });
    }

    onMounted(async () => {
        await loadCats();
    });
</script>

<style scoped>
    .classement {
        background-color: var(--main-color-1);
        padding: 20vh 5vh 10vh 5vh;

        display: flex;

        flex-wrap: wrap;
        justify-content: space-around;
        gap: 32px;
    }
</style>