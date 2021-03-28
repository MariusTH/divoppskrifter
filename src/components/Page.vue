<template>
	<div>
		<v-tabs>
			<v-tab
				v-for="kategori in kategorier"
				:key="kategori"
				v-on:click="select(kategori)"
				>{{ kategori }}</v-tab
			>
		</v-tabs>
		<div v-if="selectedKategori != ''">
			<v-tabs>
				<v-tab
					v-for="(oppskrift, i) in oppskrifter[selectedKategori]"
					:key="i"
					v-on:click="selectOppskrift(oppskrift)"
					>{{ oppskrift.navn }}</v-tab
				>
			</v-tabs>
		</div>
		<div v-if="selectedOppskrift">
			<div>
        <u>Ingredienser</u><br>
        <span v-html="selectedOppskrift.ingredienser"></span>
			</div>
      <br>
			<div>
        <u>Steg</u><br>
        <span v-html="selectedOppskrift.steg"></span>
			</div>
		</div>
	</div>
</template>

<script>
import { db } from "../firebase.js";

export default {
	name: "MainPage",
	data: function() {
		return {
			oppskrifter: {},
			kategorier: [],
			selectedKategori: "",
			selectedOppskrift: undefined,
		};
	},
	methods: {
		select: function(kategori) {
			this.selectedKategori = kategori;
      // Setting it back to undefined to avoid showing another recipe while looking for another.
      this.selectedOppskrift = undefined;
			console.log(this.oppskrifter);
		},
		selectOppskrift: function(oppskrift) {
			this.selectedOppskrift = oppskrift;
			console.log(oppskrift);
		},
	},
	mounted: async function() {
		const oppskrifter = await db.collection("oppskrifter").get();
		oppskrifter.docs.forEach(async (doc) => {
			const data = doc.data();
			const kategori = data.Kategori;
			const ingredienser = data.ingredienser;
			const navn = data.Navn;
			const steg = data.steg;
			this.kategorier.push(kategori);
			if (!this.oppskrifter[kategori]) {
				this.oppskrifter[kategori] = {};
			}
			this.oppskrifter[kategori][navn] = {
				navn: navn,
				ingredienser: ingredienser,
				steg: steg,
			};
		});
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
