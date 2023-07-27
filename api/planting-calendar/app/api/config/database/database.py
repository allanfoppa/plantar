from os import getenv

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

host = getenv('DB_HOST')
username = getenv('DB_USER')
password = getenv('DB_PASSWORD')
database = getenv('DB_NAME')

sqlalchemy_database_url = (
  "postgresql://{user}:{pwd}@{host}/{db}".format(
    user=username,
    pwd=password,
    host=host,
    db=database
  )
)

engine = create_engine(sqlalchemy_database_url, echo=False)

SessionLocal = sessionmaker(
  autocommit=False, autoflush=False, bind=engine
)
