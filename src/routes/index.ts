import { Router } from "express";
import { emailRouter } from "./email.routes";

class Routes {
    static define(router: Router): Router {
        router.use('/email', emailRouter);
        return router;
    }
}

export default Routes.define(Router());