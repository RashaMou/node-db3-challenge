const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add
  // update,
  // remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(schemeId) {
  return db("steps")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .join("schemes", "steps.scheme_id", "schemes.id")
    .where("steps.scheme_id", schemeId);
}

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(newId => {
      const [id] = newId;
      return findById(id);
    });
}
