# PULL PYTHON  VERSION
FROM python:3.11

# INSIDE CONTAINER, WE WORK AT
WORKDIR /usr/src/code/api/planting-calendar

# COPY PACKAGE AND PACKAGE-LOCK INSIDE CONTAINER
COPY ./api/planting-calendar/requirements.txt .

# INSTALL DEPENDENCIES
RUN pip install -r requirements.txt

# AFTER INSTALL COPY EVERYTHING TO CONTAINER
COPY . .

# EXPOSE PORT
EXPOSE 8000

# START THE APPLICATION
ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
