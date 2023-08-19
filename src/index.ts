#!/usr/bin/env node

import { Command } from "commander";

// Declare the program

const program = new Command();

// Add actions

program
  .action(() => {
    console.log("Hello!");
  })
  .description("Say hello");

// Execute!

program.parse(process.argv);
