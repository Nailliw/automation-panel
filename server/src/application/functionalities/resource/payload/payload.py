from flask_restx import Namespace, fields

# Namespaces
functionality_ns = Namespace("functionality")

# Payloads

perform_recycling_payload = functionality_ns.model(
    "PerformRecyclingModel", {
        "application": fields.String(required=True),
        "functionality": fields.String(required=True)
    }
)

# Headers
