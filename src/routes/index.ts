import { NextFunction, Request, Response, Router } from "express";
import * as _ from "lodash";

/**
 * Classe responsável por gerenciar as rotas de Index.
 */
export class IndexRoute {

  private router: Router;

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor(router: Router) {

    this.router = router;
    this.routesForGET();
    this.routesForPOST();
    this.routesForPUT();
    this.routesForDELETE();
  }

  private routesForGET() {

    //Get Rota padrão (index)
    this.router.get("/", (req: Request, res: Response) => {

      //set options
      let options: Object = {
        "title": "Express",
      };

      var view: string = "index";
      res.render(view, { prop: options });
    });
  }

  private routesForPOST() {


  }

  private routesForPUT() {

  }

  private routesForDELETE() {

  }
}
