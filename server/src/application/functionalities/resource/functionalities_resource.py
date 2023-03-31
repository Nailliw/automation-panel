from flask import request
from flask_restx import Resource

from src.application.functionalities.controller.functionalities_controller import FunctionalitiesController
from src.application.functionalities.resource.payload.payload import functionality_ns, perform_recycling_payload
from src.utils.http_response import HttpResponse


class FunctionalitiesResource(Resource):
    @functionality_ns.doc(description="Endpoint para verificar status dos sistemas")
    def get(self):
        controller = FunctionalitiesController(response=HttpResponse(), payload=request.get_json())
        return controller.verify_status()

    @functionality_ns.doc(description="Endpoint para verificar status dos sistemas")
    @functionality_ns.expect(perform_recycling_payload, validate=True)
    def post(self):
        controller = FunctionalitiesController(response=HttpResponse(), payload=request.get_json())
        return controller.perform_recycling()
