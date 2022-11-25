<script lang="ts">
    export let disabled: boolean;
    export let onClick: () => void;
</script>

<button type="button" on:click={!disabled && onClick} class={disabled && 'disabled'}>
    {#if disabled}
        <svg xmlns="http://www.w3.org/2000/svg" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="36px" height="36px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#a9a9a9" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>
    {:else}
        <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#949494">
            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
            <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>
        </svg>
    {/if}
</button>

<style lang="less">
    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        transition: opacity 0.2s;
        border: unset;
        overflow: hidden;

        &:hover {
            opacity: 0.5;
        }

        &:active {
            opacity: 1;
            background-color: white;
        }
    }

    button.disabled {
      cursor: unset;
      opacity: 1;
    }
</style>