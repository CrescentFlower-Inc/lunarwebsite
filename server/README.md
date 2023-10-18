# Lunarian Federation Server

This is the backend to the lunarian website. It handles the backend forum stuff.

## Requirements:
- Poetry (^1.5.1)
- Python (^3.9)

## HOW TO SETUP:
First of all, install the packages:
```bash
$ poetry install
```

Enter a poetry shell:
```bash
$ poetry shell
```

You can start the uvicorn server like this for prod:
```bash
$ uvicorn lunarwebsite:app --host 0.0.0.0
```

OR

You can start the unicorn server like this for dev:
```bash
$ uvicorn lunarwebsite:app --host 0.0.0.0 --reload 
# You dont have to host it outside local host if you dont want to
```

The backend serves the files in client/dist.
