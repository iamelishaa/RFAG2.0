import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("ministries", "routes/ministries.tsx"),
  route("events", "routes/events.tsx"),
  route("sermons", "routes/sermons.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
