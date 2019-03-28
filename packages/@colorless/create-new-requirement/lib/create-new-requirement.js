'use strict';

const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const chalk = require('chalk');

const mkdir = promisify(fs.mkdir);

const DIR_LIST = [
    '需求文档',
    'UI资源',
    '后端技术文档',
    '前端技术文档',
    '测试用例',
    '其他'
];

async function createNewRequirement(productName, cwd = process.cwd()) {
    const targetDir = path.resolve(cwd, productName);
    if (fs.existsSync(targetDir) && fs.statSync(targetDir).isDirectory()) {
        console.log(`项目: ${chalk.yellow(productName)} 状态: ${chalk.green('已存在')}`);
        return;
    }
    fs.mkdirSync(targetDir);
    await Promise.all(
        DIR_LIST.map(dirname => mkdir(path.resolve(targetDir, dirname)))
    );
    console.log(`项目: ${chalk.yellow(productName)} 状态: ${chalk.green('创建成功！')}`);
}


module.exports = createNewRequirement;
module.exports.DIR_LIST = DIR_LIST;
