import { charts } from './modules/charts';
import { countThisStuff } from './modules/countThisStuff';
import { creation } from './modules/createInputs';

const modules = [
  creation,
  countThisStuff,
  charts,
];

const init = () => {
  modules.forEach((module: any) => {
    module.bindEvent();
  });
};

init();
