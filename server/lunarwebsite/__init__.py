from lunarwebsite.api.account import app as accountsapp
from lunarwebsite.ormsettings import TORTOISE_ORM

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

from pathlib import Path
from tortoise.contrib.fastapi import register_tortoise

import uvicorn

HOST = "127.0.0.1"
DEVPORT = 8000

PRODPORT = 3000 # idk this lol

distfolder = Path(__file__).parents[2] / "client/dist"
assetsfolder = distfolder / "assets"
index = distfolder / "index.html"

app = FastAPI()

app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

app.mount("/api/account", accountsapp)

@app.get("/api")
async def root():
	return {"Location": "The moon", "Server": "UDN DuckServ 6.9", "Organization": "Crescent-Inc"}

app.mount("/assets/", StaticFiles(directory=str(assetsfolder)), name="static")

@app.get("/{duck}", response_class=HTMLResponse)
async def almost_true_root(duck):
	print(duck)
	with open(index) as f:
		return f.read()

@app.get("/", response_class=HTMLResponse)
async def true_root():
	with open(index) as f:
		return f.read()

register_tortoise(
	app,
	config=TORTOISE_ORM,
	generate_schemas=True
)


def dev():
	uvicorn.run("lunarwebsite:app", host=HOST, port=DEVPORT, reload=True)

def prod():
	uvicorn.run("lunarwebsite:app", host=HOST, port=PRODPORT)