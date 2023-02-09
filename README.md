# Skeleton - Painel de Automação

## Backend
 - Linguagem: Python
 - Framework: FastAPI

Instruções:

### Rodar sem Docker
- VENV
  - Criar VENV
  - Acessar VENV
  - Instalar requirements.txt
- Rodar projeto
<br>
  - Estando dentro do diretório:
    ````commandline
      python main
      ````

### Docker
Instruções:

- Para dar build na imagem docker
  ````commandline
  docker build -t automacao/<nome_do_projeto>:<versão> .
  ````
  Exemplo: docker build -t willianribeiro/fastapi-python:1.0 .
<br></br>
- Para criar o container
  ````commandline
  docker run -d -it --name <nome_da_imagem> -p 8000:8000 automacao/<nome_do_projeto>:<versão>
  ````
  Exemplo: docker run -d -it --name imagem_teste -p 8000:8000 willianribeiro/fastapi-python:1.0
<br></br>
- Para acessar o container
  ````commandline
  docker exec -it <nome_da_imagem> bash
  ````
  Exemplo: docker run -it imagem_teste bash