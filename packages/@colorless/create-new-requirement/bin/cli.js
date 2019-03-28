#!/usr/bin/env node
const createNewRequirement = require('../lib/create-new-requirement');
const inquirer = require('inquirer');
const prompts = require('../lib/prompts');

inquirer.prompt(prompts)
    .then(answers => {
        createNewRequirement(answers.productName);
    });
