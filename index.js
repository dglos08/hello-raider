import * as core from '@actions/core';

const name = core.getInput('name');
const outputVal = 'ello ${name)'
core.setOutput('greeting', 'output_value');