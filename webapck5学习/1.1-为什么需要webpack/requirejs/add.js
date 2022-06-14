const add = (x, y) => {
  return x + y;
};

define([], function (require, factory) {
  'use strict';
  return add;
});
