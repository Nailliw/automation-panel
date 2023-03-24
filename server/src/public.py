from flask import Flask
from flask_cors import CORS
from flask_restx import Api

# initialization
from flask_marshmallow import Marshmallow

from src.authentication.authentication_resource import AuthenticationResource
from src.authentication.resource.payload import authentication_ns

app = Flask(__name__)
cors = CORS(app)
api = Api(app)

Marshmallow().init_app(app)


# namespaces
api.add_namespace(authentication_ns)



# routes
authentication_ns.add_resource(AuthenticationResource, " ")



# app.run(debug=True)
