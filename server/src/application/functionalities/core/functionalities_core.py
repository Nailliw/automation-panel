import pdb
import subprocess

from src.ORM.tables import Application
from src.application.functionalities.repository.application_repository import ApplicationRepository
from src.application.functionalities.repository.functionality_repository import FunctionalityRepository


class FunctionalitiesCore:
    def __init__(self, payload):
        self.functionality_repository = FunctionalityRepository()
        self.application_repository = ApplicationRepository()
        self.payload = payload

    def verify_status(self):
        applications = self.application_repository.get_all(Application)
        lista = []

        for app in applications:
            if app.name == "SINEP":
                status_sinep = self.verify_status_sinep()
                lista.append({"SINEP": status_sinep})

            if app.name == "ATM":
                status_atm = self.verify_status_atm()
                lista.append({"ATM": status_atm})

        return lista

    def verify_status_sinep(self):
        return True

    def verify_status_atm(self):
        return True

    def perform_recycling(self):
        application = self.application_repository.get_application(model=Application,
                                                                  field=self.payload.get("application"))

        if not application:
            raise Exception

        func = [item.name for item in application.functionalities if item.name == self.payload.get("functionality")]

        if not func:
            raise Exception

        return self.execute_recycling(func[0])

    def execute_recycling(self, func):
        if func == "reciclagem_sinep":
            cmd = 'dir'
            result = subprocess.run(['powershell', '-Command',
                                     "src/application/functionalities/core/teste.ps"], capture_output=True, text=True)

            print(result.stdout)

        return "Executando Reciglagem"
