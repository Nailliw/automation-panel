from flask import Flask
from flask_cors import CORS
from flask_restx import Api

# initialization
from flask_marshmallow import Marshmallow

from src.application.functionalities.resource.functionalities_resource import FunctionalitiesResource
from src.application.functionalities.resource.payload.payload import functionality_ns
from src.sistemas.resources.resources import sistema_ns, SistemaResource

app = Flask(__name__)
cors = CORS(app)
api = Api(app)

Marshmallow().init_app(app)


# namespaces
api.add_namespace(sistema_ns)
api.add_namespace(functionality_ns)



# routes
sistema_ns.add_resource(SistemaResource, "")
functionality_ns.add_resource(FunctionalitiesResource, "")



# app.run(debug=True)
