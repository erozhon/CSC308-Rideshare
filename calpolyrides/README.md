# Back End Documentation

## Setup

### Prereq:
* Python 3
* Pip 3

### Optional: Create Post activate script (recommended)

Install virtualenv
https://virtualenv.pypa.io/en/latest/

Install virtualenvwrapper
https://virtualenvwrapper.readthedocs.io/en/latest/

Replace my paths with your paths<br/>
vim /Users/garrettlew/.virtualenvs/postactivate
```
#!/bin/bash
# This hook is sourced after every virtualenv is activated.

export DJANGO_SETTINGS_MODULE='calpolyrides.settings'
export PYTHONPATH='/Users/garrettlew/Documents/calpoly/CSC308-Rideshare/calpolyrides'
cd ~/Documents/calpoly/CSC308-Rideshare
```

deactivate env and reactivate to check if the script worked
```
Arthurs-MacBook-Pro:~ arthurknatt$ source env/bin/activate
(env) Arthurs-MacBook-Pro:~ arthurknatt$ deactivate
Arthurs-MacBook-Pro:~ arthurknatt$ source env/bin/activate
```

### Setup Environment
If have a virtual environment, to start virtual environment without using the wrapper:
```
source /PATH/TO/.virtualenvs/calpolyrides/bin/activate
```

Example:
```
source /Users/garrettlew/.virtualenvs/calpolyrides/bin/activate
```

### Be sure DJANGO_SETTINGS_MODULE and PYTHONPATH environment variables are set
If they aren't set:
```
export DJANGO_SETTINGS_MODULE='calpolyrides.settings'
export PYTHONPATH='/PATH/TO/PROJECT/CSC308-Rideshare/
```
See if DJANGO_SETTINGS_MODULE and PYTHONPATH environment variable has been set correctly
```
printenv
```

### Install: 
- Django in the virtual environment
```
pip3 install django
```

- Django rest framework
```
pip3 install djangorestframework
```

- cors headers
```
pip3 install django-cors-headers
```

- django-filter
```
pip3 install django-filter
```

### Start Django Server

1. Be in the outer calpolyrides folder
2. django-admin makemigrations
3. django-admin migrate
4. django-admin runserver
5. Go to http://localhost:8000/api/item/ to view site

If make changes to database items delete the database file that will be create locally: looks like db.sqlite3
Also delete all 00##_initial.py files in api/migrations/__pycache__

Using AWS to deploy the app
https://aws.amazon.com/getting-started/projects/deploy-python-application/


### Trouble shooting

#### django-admin does not work
Instead of using django-admin, go into the folder with manage.py (first calpolyrides):
1. python3 manage.py makemigrations
2. python3 manage.py migrate
3. python3 manage.py runserver

#### settings.py missing secret key
In the settings.py file put a secret key in:
```
SECRET_KET=''
```
Get the secret key from one of the team members if don't have.



