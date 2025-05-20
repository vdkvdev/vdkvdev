<template>
  <section>
    <h2>Projects</h2>
    <div class="cards">
      <a
        v-for="project in projects"
        :key="project.id"
        :href="project.url"
        target="_blank"
        class="card"
      >
        <img :src="project.image">
        <p class="title">{{ project.title }}</p>
        <p class="description">{{ project.description }}</p>
      </a>
    </div>
  </section>
</template>

<script>
import AES_V from '../img/AES_V.png';
import VILauncher from '../img/VILauncher.png';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          url: 'https://github.com/vdkvdev/AES-Vodka',
          image: AES_V,
          title: 'AES Vodka',
          description: 'An Electron application that allows users to encrypt and decrypt the contents of a selected folder using AES-256-GCM encryption.'
        },
        {
          id: 2,
          url: 'https://github.com/vdkvdev/VILauncher/',
          image: VILauncher,
          title: 'VILauncher',
          description: 'A custom Minecraft launcher. Built with Node.js, Electron and minecraft-launcher-core.'
        },
      ]
    };
  }
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 70px 0px;
    width: 600px;

    h2{
      color: #d1d1d1;
      font-weight: normal;
      font-size: 18px;
      margin-bottom: 15px;
    }

    .cards{
      display: flex;
      flex-direction: column;
      gap: 15px;

      .card{
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        padding: 20px;
        border: 1px solid #272729;
        border-radius: 4px;
        transition: 0.2s;

        img{
          width: 30px;
          border-radius: 4px;
        }

        .title{
          color: #d1d1d1;
          text-decoration: underline;
        }

        .description{
          color: #999999;
        }

        &:hover{
          background-color: #18181c;
        }
      }
    }
}
</style>