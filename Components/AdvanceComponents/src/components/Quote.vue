<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span name="subtitle">The subtitle</span>
        </div>
        <hr>
        <div class="content">
            <slot></slot>

        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2{
        color:blue;
    }

    .title{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>