<template>
  <div class="hello">
    asd
  </div>
</template>

<script>
import { db } from "../firebase.js";

export default {
  name: 'HelloWorld',
  data: function (){
    return {
      oppskrifter: {},
      kategorier: []
    }
  },
  mounted: async function () {
    const oppskrifter = await db.collection('oppskrifter').get();
    oppskrifter.docs.forEach(async (doc) => {
      const data = doc.data();
      const kategori = data.Kategori;
      const ingredienser = data.ingredienser;
      const steg = data.steg;
      this.kategorier.push(kategori);
      this.oppskrifter[kategori] = {
        "ingredienser": ingredienser,
        "steg": steg
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 40px 0 0;
  background-color: blueviolet;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
