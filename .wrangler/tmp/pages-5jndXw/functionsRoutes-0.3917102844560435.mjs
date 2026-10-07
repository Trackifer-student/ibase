import { onRequestPost as __api_grade_js_onRequestPost } from "/workspaces/ibase/functions/api/grade.js"

export const routes = [
    {
      routePath: "/api/grade",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_grade_js_onRequestPost],
    },
  ]