<script>
        import ExitScr from "$lib/img/icons/exit-black-icon.svg"


        const languages1 = ["English", "Norsk", "Deutsch", "Polski", "Français", "Português", "Svenska"]
        const languages2 = ["English", "Norsk", "Deutsch", "Polski", "Français", "Português", "Svenska"]
        const languages3 = ["English", "Norsk", "Deutsch", "Polski", "Français"]
        
         export let languageCont;


   
</script>

<div class="languages-background" bind:this={languageCont}>
    
    <div class="main-cont-languages">
        <div class="exitDiv">
            <div class="exitBtn" on:mousedown>
                <img class="exit-img" src={ExitScr} alt="">
            </div>
        </div>

        <div class="header-languages">
            <h1 role="" class="">Choose</h1>
            <h1 role="" class="">your language</h1>
        </div>
        <div class="all-languages">
            <div>
                {#each languages1 as language }
                <h3>{language}</h3>
                {/each}
            </div>
            <div>
                {#each languages2 as language }
                <h3>{language}</h3>
                {/each}
            </div>
            <div>
                {#each languages3 as language }
                <h3>{language}</h3>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .languages-background{
        display: none;
        position: fixed;
        z-index: 1000;
        background-color: rgba(33, 33, 33, 0.8);
        backdrop-filter: blur(4px); 
        height: 100%;
        width: 100%;
    }
    .main-cont-languages{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        height: 700px;
        width: 50%;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
    }
    .exitDiv{
        display: flex;
        justify-content: end;
        align-items: center;
        margin-top: 40px;
        margin-right: 40px;
    }
    .exitBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #efefef;
    }
    .exitBtn:hover{
        scale: 1.05;
        cursor: pointer;
        background-color: #f9f9f9;
    }

    .header-languages{
        margin-top: 15%;
        margin-left: 15%;
        display: flex;
        flex-direction: column;
    }
    .all-languages{
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 15%;
        margin-left: 15%;
    }
</style>