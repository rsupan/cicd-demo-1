"use strict";

module.exports.listTodos = async event => {
  const todos = ["Wake up at 3AM", "Workout", "Eat breakfast"];
  return {
    statusCode: 200,
    body: JSON.stringify({ todos }, null, 2)
  };
};
