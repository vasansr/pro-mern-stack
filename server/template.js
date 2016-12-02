export default function template(body, initialState) {
  return `<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Pro MERN Stack</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-signin-client_id"
    content="364319357978-g3jfccrecmrooetgpheesd3ko8s92rpg.apps.googleusercontent.com">
  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >
  <link rel="stylesheet" href="/react-select/react-select.css" >
  <style>
    .panel-title a {display: block; width: 100%; cursor: pointer; }
  </style>
</head>

<body>
  <div id="contents">${body}</div>    <!-- this is where our component will appear -->
  <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
  <script src="/vendor.bundle.js"></script>
  <script src="/app.bundle.js"></script>
</body>

</html>
`;
}
