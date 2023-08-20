#!/usr/bin/env node

// import { program } from 'commander';
// import packages from '../package.json'
// console.log(packages)
const { Command } = require('commander')
const chalk = require('chalk');
const fs = require('fs-extra');
const minimist = require('minimist');
const inquirer = require('inquirer');
// const packages = require("../package.json");
const program = new Command();

// 定义当前版本
// program.version(
//   `spark: ${packages.version}`,
//   "-v, --version",
//   "output the current spark version"
// );

// 定义create命令
program
  .command('create <app-name>')
  .description('create a new project powered by spark-cli')
  .option('-f, --force', 'override')
  .action((name, cmd) => {
    console.log('name', name)
    console.log('cmd.options', cmd.options)
    console.log('cmd.args', cmd.args)
  })


// program.version(pkg.version).usage(`<command> [options]`)

// 解析运行参数(必须且要放在最后一行)
program.parse(process.argv)