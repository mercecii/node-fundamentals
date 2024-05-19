#!/usr/bin/env node
// console.log("MY CLI TOOL");
// const yargs = require("yargs");

// const argv = yargs.argv;
// console.log("process.argv = ", process.argv);
// console.log(" yargs.argv = ", yargs.argv);

const inquirer = require("inquirer");

const getUrl = (pokeName) => `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

const getPokeDetails = async (pokeName) => {
  const res = await fetch(getUrl(pokeName));
  const pokemon = await res.json();
  const moves = pokemon.abilities.map((ability) => ability.ability.name);
  console.log(moves);
  return moves;
};

const init = async () => {
  const moves = await getPokeDetails(argv.pokemon);
  console.log(moves);
};

// init();

const prompt = inquirer.createPromptModule();
prompt({
  name: "pokemon",
  type: "input",
  message: "Enter a pokemon name to see abilities",
}).then((answers) => getPokeDetails(answers.pokemon));
