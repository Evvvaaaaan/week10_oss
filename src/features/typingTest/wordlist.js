export const wordList = [
  "algorithm", "array", "boolean", "branch", "browser", "buffer",
  "cache", "callback", "class", "client", "closure", "code",
  "commit", "compiler", "component", "condition", "constant", "context",
  "cookie", "database", "debug", "deploy", "dependency", "design",
  "document", "element", "event", "export", "expression", "fetch",
  "filter", "function", "handler", "hook", "import", "index",
  "input", "instance", "interface", "iteration", "javascript", "json",
  "kernel", "layout", "library", "loop", "memory", "method",
  "module", "network", "object", "operator", "output", "package",
  "parameter", "parser", "pointer", "promise", "property", "protocol",
  "query", "queue", "react", "recursion", "reducer", "reference",
  "render", "repository", "request", "response", "return", "route",
  "runtime", "scope", "script", "server", "session", "software",
  "source", "stack", "state", "string", "syntax", "terminal",
  "token", "variable", "vector", "version",
];

export function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}
