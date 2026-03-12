import { execSync } from 'child_process';
execSync('git checkout constants.ts');
console.log('Restored constants.ts');
