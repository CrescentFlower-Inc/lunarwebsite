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

You can start the production server with
```bash
$ poetry run prod
```

OR

You can start the dev server with:
```bash
$ poetry run dev
```

Right now you can only configure these by changing the code in server/lunarwebsite/__init__.py

The backend serves the files in client/dist.
