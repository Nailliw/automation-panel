FROM python:3.9

WORKDIR /code

COPY ../requirements.txt /code/requirements.txt

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY app /code/app
COPY main.py /code

CMD ["python", "main.py"]