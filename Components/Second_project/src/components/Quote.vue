<template>
    <div >
        <div class="card quote" style="width: 15rem;">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.quote{
    cursor:pointer;
}
.quote:hover{
    background-color:#ffe2e2;
}
</style>