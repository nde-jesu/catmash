<template>
    <div class="cat">
        <img :src="url" alt="Image de chat">
        <a @click="vote(id as string)" @mouseover="isHover = true" @mouseleave="isHover = false">Voter{{ isHover ? " pour lui ?" : '' }}</a>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        url: String,
        id: String
    });

    const isHover = ref(false);

    const emit = defineEmits(['reloadCats']);

    async function vote (id: String) {
        await $fetch('/api/voteforcat', {
            query: {
                id
            }
        });

        emit('reloadCats');
    }

</script>

<style scoped>
    .cat {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        width: 45%;
        gap: 16px;
    }

    img {
        border-radius: 8px;
        width: 80%;
        object-fit: cover;
        aspect-ratio: 1/1;
    }

    .cat a {
        border-radius: 8px;

        width: 60%;
        height: 32px; 

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Cat;
        font-size: medium;
        letter-spacing: 2px;
        color: var(--main-color-1);
        background-color: var(--main-color-2);

        transition: all 1s ease-out;
    }

    .cat a:hover {
        cursor: pointer;
        width: 80%;
    }

    @media (max-width: 1200px) {
        .cat {
            width: 100%;
        }
    }
</style>