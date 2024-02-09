import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const router = express.Router();

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js TypeScript API with Swagger',
      version: '1.0.0',
      description: 'Exemplo de API com Node.js e TypeScript usando Swagger',
    },
  },
  apis: ["**/*.ts"], // Caminho para os arquivos de definição de rotas
};

const specs = swaggerJSDoc(options);
router.use('/', swaggerUi.serve, swaggerUi.setup(specs, { customCssUrl: CSS_URL }));

export default router;