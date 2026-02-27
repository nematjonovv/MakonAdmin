import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./modules/auth/auth.route";
import servicesRouter from "./modules/services/services.route";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import { categoryRouter } from "./modules/categorys/category.route";
import { projectRouter } from "./modules/projects/project.route";
import { teamRouter } from "./modules/team/team.route";
import { testimonialRouter } from "./modules/testimonial/testimonial.route";
import { contactRouter } from "./modules/contact/contact.route";
import { userRouter } from "./modules/users/user.route";

const allowedOrigins = new Set([
  "http://localhost:3000", // client dev
  "http://localhost:3001", // admin dev
  "https://makon-design-studio.vercel.app",
  "https://makon-admin-six.vercel.app",
]);

export const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://makon-design-studio.vercel.app",
      "https://makon-admin-six.vercel.app"
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello, Makon Admin Server!");
});

const SwaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Makon Admin Server API",
      version: "1.0.0",
      description: "API documentation for Makon Admin Server",
    },
  },
  apis: ["./src/modules/**/**.route.ts"],
};

const theme = new SwaggerTheme();
const themeOptions = theme.getBuffer(SwaggerThemeNameEnum.MATERIAL);
const swaggerDocs = require("swagger-jsdoc")(SwaggerOptions);

app.use(
  "/docs",
  require("swagger-ui-express").serve,
  require("swagger-ui-express").setup(swaggerDocs, undefined, themeOptions),
);

// Routes***
app.use("/auth", authRouter);
app.use("/api", servicesRouter);
app.use("/api", categoryRouter);
app.use("/api", projectRouter);
app.use("/api", teamRouter);
app.use("/api", testimonialRouter);
app.use("/api", contactRouter);
app.use("/api", userRouter);
export default app;
