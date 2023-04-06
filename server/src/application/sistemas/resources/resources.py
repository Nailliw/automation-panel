from flask_restx import Resource, Namespace

sistema_ns = Namespace("sistema")


class SistemaResource(Resource):
    @sistema_ns.doc(description="Endpoint de login")
    def get(self):
        return [{
            "name": "SINEP",
            "status": "Online"
        },
            {
                "name": "ATM",
                "status": "Erro"
            },
            {
                "name": "TESTE",
                "status": "Erro"
            }
        ]
