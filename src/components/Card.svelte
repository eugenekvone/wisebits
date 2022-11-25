<script lang="ts">
    import Note from "./Note.svelte";

    export let origin: string;
    export let variety: string;
    export let notes: string;
    export let intensifier: string;
    export let blend_name: string;

    const notesArray: string[] = notes?.split(', ')
</script>

<div class="card">
    <div class="imageWrap">
        <svg class="preloader" xmlns="http://www.w3.org/2000/svg" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#a9a9a9" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>
        <img class="image" src={"https://loremflickr.com/500/500/coffee%20bean?" + Math.random()}
             alt="coffee" decoding="async">
        <p class="intensifier">{intensifier}</p>
    </div>
    <p class="origin">{origin}</p>
    <p class="title">{blend_name}</p>
    <p class="subtitle">{variety}</p>
    <div class="notes">
        {#each notesArray as note}
            <Note text={note}/>
        {/each}
    </div>
</div>

<style lang="less">
    .card {
        padding: 30px;
        border-radius: 20px;
        overflow: hidden;
        background-color: white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .origin {
        color: #a9a9a9;
        margin-bottom: 5px;
    }

    .origin, .subtitle {
        font-size: 20px;
    }

    .subtitle {
        margin-bottom: 20px;
    }

    .preloader {
      position: absolute;
    }

    .imageWrap {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        border-radius: 11px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }

    .intensifier {
        position: absolute;
        right: 15px;
        top: 15px;
        background-color: white;
        font-size: 18px;
        font-weight: lighter;
        border-radius: 7px;
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
        line-height: 28px;
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    .notes {
        display: flex;
        align-items: center;
        grid-gap: 20px;
        overflow-y: auto;
        padding: 10px 5px;
        margin: -10px 0 -10px -5px;

        &::-webkit-scrollbar {
            height: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #e9e9e9;
            border-radius: 6px;
        }
    }

    @media (max-width: 600px) {
      .title {
        font-size: 24px;
      }

      .origin, .subtitle {
        font-size: 16px;
      }

      .card {
        padding: 20px;
      }

      .imageWrap {
        height: 200px;
      }
    }
</style>