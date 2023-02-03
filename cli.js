#!/usr/bin/env node

import minimist from 'minimist';
import fetch from 'node-fetch';
import timezone from 'moment-timezone';

const args = minimist(process.argv.slice(2));
console.log(args);
