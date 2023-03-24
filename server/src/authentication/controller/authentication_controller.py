from src.authentication.core.authentication_core import AuthenticationCore
from src.utils.http_response import HttpResponse


class AuthenticationController:
    def __init__(self, response: HttpResponse, data):
        self.response = response
        self.data = data

    def login(self):
        username = self.data.get('username')
        password = self.data.get('username')

        login_core = AuthenticationCore(username, password)

        return login_core.login()
