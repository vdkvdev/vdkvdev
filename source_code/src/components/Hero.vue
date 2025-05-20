<template>
    <section>
        <img src="../img/vdkv.png">
  
        <div class="name">
            <h1 id="me">{{ currentText }}</h1>
            <p>@vdkvdev</p>
        </div>

        <p>I <span>design and build</span> websites, desktop and android <span>apps</span>, browser extensions, automation with <span>bots</span>, <span>games</span> and <span>more</span>. Check out my latest projects, skills, and maybe my <span>latest personal blog post</span>.</p>

        <div class="avalibre">
          <p><img src="../icons/map-pin.svg"> Santiago, CL</p>
          <p><img src="../icons/check.svg"> Available for work</p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      texts: ['vdkv', 'Frontend', 'Developer', 'Techie', 'Maker'],
      currentIndex: 0,
      currentText: '', // Texto que se muestra en pantalla
      isTyping: true // Estado: true para escribir, false para borrar
    };
  },
  mounted() {
    this.animate(); // Inicia la animación al montar el componente
  },
  methods: {
    animate() {
      if (this.isTyping) {
        const currentWord = this.texts[this.currentIndex];
        if (this.currentText.length < currentWord.length) {
          // Escribe un carácter
          this.currentText = currentWord.substring(0, this.currentText.length + 1);
          setTimeout(this.animate, 100); // Velocidad de escritura (100ms por carácter)
        } else {
          // Palabra completa, espera 3500ms
          setTimeout(() => {
            this.isTyping = false;
            this.animate();
          }, 3500); // Tiempo que la palabra permanece visible
        }
      } else {
        if (this.currentText.length > 0) {
          // Borra un carácter
          this.currentText = this.currentText.substring(0, this.currentText.length - 1);
          setTimeout(this.animate, 100); // Velocidad de borrado (100ms por carácter)
        } else {
          // Palabra borrada, pasa a la siguiente
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          this.isTyping = true;
          setTimeout(this.animate, 100);
        }
      }
    }
  }
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 70px 0px;
    height: 240px;
    width: 600px;

    img {
        width: 40px;
        border-radius: 5px;
    }

    .name{
        h1 {
            color: #d1d1d1;
            font-size: 35px;
            font-weight: normal;
            min-height: 42px;
        }

        p {
            margin-top: 5px;
            color: #999999;
            font-size: 18px;
        }
    }

    p {
        width: 100%;
        color: #999999;
        line-height: 24px;
        font-size: 17px;

        span {
            background-color: rgba(152, 170, 189, 0.08);
            border-radius: 5px;
            padding: 2px 5px;
        }
    }

    .avalibre{
      display: flex;
      justify-content: space-between;
      align-content: center;

      p{
        display: flex;
        align-content: center;
        width: auto;

        img{
          width: 20px;
          margin-right: 10px;
        }
      }
    }
}
</style>