const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count == 1) {
        return findById(id);
      }
    });
}

function remove(id) {
  const deletedItem = findById(id).then(item => {
    return item;
  });
  console.log(deletedItem);
  return db("schemes")
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        return deletedItem;
      }
    });
}
