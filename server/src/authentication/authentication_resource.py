from flask import request
from flask_restx import Resource

from src.authentication.controller.authentication_controller import AuthenticationController
from src.authentication.resource.payload import authentication_ns, authentication_login_payload
from src.utils.http_response import HttpResponse


class AuthenticationResource(Resource):
    @authentication_ns.doc(description="Endpoint de login")
    @authentication_ns.expect(authentication_login_payload, validate=True)
    def post(self):
        authentication_controller = AuthenticationController(
            HttpResponse(), request.get_json()
        )
        return authentication_controller.login()
