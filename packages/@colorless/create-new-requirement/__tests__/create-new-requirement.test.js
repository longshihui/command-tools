'use strict';
const createNewRequirement = require('../lib/create-new-requirement');
const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const rm = require('rimraf');

const PROJECT_NAME = 'test-project';
const PROJECT_PATH = path.resolve(__dirname, PROJECT_NAME);

describe('create-new-requirement', () => {
    afterEach(function () {
        rm.sync(PROJECT_PATH);
    });
    it('当不存在项目时，正常创建', async () => {
        await createNewRequirement(PROJECT_NAME, __dirname);
        expect(fs.statSync(PROJECT_PATH).isDirectory()).to.be.true;
        expect(fs.readdirSync(PROJECT_PATH)).to.have.members(createNewRequirement.DIR_LIST);
    });
    it('当存在项目时，则不重新创建', async () => {
        fs.mkdirSync(PROJECT_PATH);
        await createNewRequirement(PROJECT_NAME, __dirname);
        expect(fs.readdirSync(PROJECT_PATH)).to.be.empty;
    });
});
