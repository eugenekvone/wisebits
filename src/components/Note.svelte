<script lang="ts">
    const color = Math.floor(Math.random() * 0xFFFFFF).toString(16)

    export let text: string;
</script>


<p class="note" style="background-color: {'#' + color}">
    {text}
</p>

<style lang="less">
    .note {
        font-size: 18px;
        font-weight: lighter;
        border-radius: 7px;
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
        line-height: 28px;
        display: flex;
        align-items: center;
        padding: 0 10px 3px 10px;
        color: white;
        user-select: none;
        text-shadow: 1px 1px 2px black;
        white-space: nowrap;
    }
</style>