<template>
    <section class="toast-container">
        <div class="toast" :class="[visible?'fade-in':'fade-out']">
            <span>{{message}}</span>
        </div>
    </section>
</template>

<style lang="scss">
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.7);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.7);
    }
}
.toast-container {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:1000;
    display:flex;
    justify-content:center;
    align-items:center;
    .toast {
        .fade-in {
            animation-fill-mode: both;
            animation-name: fadeIn;
            animation-duration: 0.3s;
        }
        .fade-out {
            animation-fill-mode: both;
            animation-name: fadeOut;
            animation-duration: 0.3s;
        }
        line-height: 20px;
        text-align:center;
        background-color:rgba(0,0,0,0.7);
        border-radius:10px;
        span {
            display:block;
            padding: 20px;
            color: #ffffff;
        }
    }
}
</style>

<script>
export default {
    data () {
        return {
            visible: false,
            message: ''
        }
    }
}
</script>


