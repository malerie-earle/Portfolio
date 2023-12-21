const jsonServer = require('json-server');
const jsonPort = 8000;

const jsonApp = jsonServer.create();
const jsonRouter = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

// Custom route example: returns posts of a specific category
jsonRouter.render = (req, res) => {
  const category = req.query.category;
  if (category) {
    const data = res.locals.data.filter(post => post.category === category);
    return res.json(data);
  }
  res.json(res.locals.data);
};

// Define rewriter rules
const rewriter = jsonServer.rewriter({
  '/words':'/', 
});

jsonApp.use(middlewares);
jsonApp.use(rewriter); // Add the rewriter middleware before the router
jsonApp.use(jsonRouter);

jsonApp.listen(jsonPort, () => {
  console.log(`JSON Server running at http://localhost:${jsonPort}`);
});
