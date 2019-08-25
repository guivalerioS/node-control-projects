const express = require("express");

const server = express();

server.use(express.json());

let countRequests = 0;
const projects = [];

server.use((req, res, next) => {
  countRequests++;

  console.log(`Number of requests: ${countRequests}`);

  return next();
});

function checkProjectExists(req, res, next) {
  const { id } = req.params; //desestruturação
  const project = projects.find(p => p.id == id); //find P como alias

  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }

  return next();
}
/*
function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }

  req.user = user;
  return next();
}
server.get("/users", (req, res) => {
  return res.json(users);
});
*/

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);

  return res.json(projects);
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title); //.tasks navega até taks e push

  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id); //find com alias P

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectId = projects.findIndex(p => p.id == id); //findIndex com alias P

  projects.splice(projectId, 1);

  return res.send();
});
server.listen(3000);
