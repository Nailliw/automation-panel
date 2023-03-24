from flask_restx import Namespace, fields

# Namespaces
authentication_ns = Namespace("login")

# Payloads

authentication_login_payload = authentication_ns.model(
    "LoginPayload", {
        "login": fields.String(required=True),
        "password": fields.String(required=True)
    }
)

# Headers
