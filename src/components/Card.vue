<template>
    <div class="card">
        <div class="card__body">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.card {
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 1px 5px 1px rgb(196, 196, 196);
}

.card__body {
    padding: 20px 0;
}
</style>