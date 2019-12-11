const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps
  // add,
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

/* 
select s.id, 
      s.step_number, 
      s.instructions, 
      sch.scheme_name 
      from steps as s
join schemes as sch 
  on s.scheme_id = sch.id
where s.scheme_id = 2
*/

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
