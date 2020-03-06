#!/usr/bin/env node
"use strict";

const PACKAGE_LOCK_FILE = "package-lock.json";
const fs = require("fs");
const process = require("process");
const execSync = require("child_process").execSync;
const lockspot_path = require.resolve('lockspot');
const ANSI_YELLOW = "\x1b[33m";

if (!fs.existsSync(PACKAGE_LOCK_FILE)) {
    const package_name = require('./package.json').name;
    console.error(`${ANSI_YELLOW}Could not find ${PACKAGE_LOCK_FILE} when running ${package_name}.
${package_name} requires ${PACKAGE_LOCK_FILE} in order to work.`);
	process.exit(1);
}

try {
	execSync(`${lockspot_path} flat --pattern '^@financial-times/o-' --file "${PACKAGE_LOCK_FILE}"`, {
        encoding: "utf-8"
    });
} catch (e) {
	const depcount = execSync(`${lockspot_path} depcount --min 2 --pattern '^@financial-times/o-' --file "${PACKAGE_LOCK_FILE}"`, {
        encoding: "utf-8"
	});
	console.error(`${ANSI_YELLOW}Checking the ${PACKAGE_LOCK_FILE} file showed some FT components were included multiple times with different versions.
This is currently not supported by Origami components. 
This can result in client builds including multiple copies of the CSS/JS for those packages, increasing build size.
Please check the dependency ranges to ensure each dependency is only included once.

FT components included more than once, with their count:
${depcount}`);
    process.exit(1);
}
