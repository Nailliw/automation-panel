from src.ORM.tables import Application, Functionality, Log
from src.service.connection import AbstractRepository


class ApplicationRepository(AbstractRepository):
    def create_application(self, model):
        self.session.add(model)
        self.session.commit()


lista = [
    {"name": "SINEP"},
    {"name": "ATM"},
    {"name": "Teste"},
]

lista_functionality = [
    {
        "name": "reciclagem_sinep",
        "application_id": "fa19ecae-3377-46ef-9a84-047c009ca1ae"
    },
    {
        "name": "reciclagem_atm",
        "application_id": "fa19ecae-3377-46ef-9a84-047c009ca1ae"
    },
]

lista_logs = [
    {
        "name": "log_teste",
        "functionality_id": "8b6fd7dc-31af-4e80-8289-61318d14b16d",
        "log": {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
    }
]


def create_application(lista):
    for item in lista:
        ApplicationRepository().create_application(Application(name=item.get("name")))
        print(item.get("name"))


def create_functionality(lista):
    for item in lista:
        ApplicationRepository().create_application(Functionality(
            name=item.get("name"),
            application_id=item.get("application_id")
        ))


def create_log(lista):
    for item in lista:
        ApplicationRepository().create_application(Log(
            name=item.get("name"),
            functionality_id=item.get("functionality_id"),
            log=item.get("log")
        ))


def list_log():
    logs = ApplicationRepository().get_all(Log)
    for log in logs:
        print(log.functionalities.APPLICATIONS.name)


def execute_bash_script():
    import subprocess

    subprocess.call('dir', shell=True)


if __name__ == '__main__':
    # create_application(lista)
    # create_functionality(lista_functionality)
    # create_log(lista_logs)
    # list_log():
    execute_bash_script()