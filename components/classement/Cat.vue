<template>
    <div class="cat">
        <img :src="url" alt="Image de chat">
        <div class="text">
            <span>#{{ place }}</span>
            <span> {{ votes }} vote{{ votes > 1 ? 's' : '' }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        url: String,
        votes: Number,
        place: Number
    });
</script>

<style scoped>
    .cat {
        flex: 1 0 21%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;
    }

    img {
        border-radius: 8px;
        width: 16vw;
        object-fit: cover;
        aspect-ratio: 1/1;

        justify-self: center;

        overflow: hidden;

        transition: transform .2s;
    }

    img:hover {
        transform: scale(1.5);
    }

    .text {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: larger;
        font-family: SourGummy;
        width: 16vw;
        font-weight: 300;
    }

    @media (max-width: 1200px) {
        img:hover {
            transform: scale(2.5);
        }
    }
</style>