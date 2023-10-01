from lunarwebsite.accounts import app as accountsapp
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from pathlib import Path

distfolder = Path(__file__).parents[2] / "client/dist"
assetsfolder = distfolder / "assets"
index = distfolder / "index.html"

app = FastAPI()

app.mount("/api/account", accountsapp)

@app.get("/api")
async def root():
	return {"Location": "The moon", "Server": "UDN DuckServ 6.9", "Organization": "Crescent-Inc"}

app.mount("/assets/", StaticFiles(directory=str(assetsfolder)), name="static")

@app.get("/{duck}", response_class=HTMLResponse)
async def almost_true_root(duck):
	with open(index) as f:
		return f.read()

@app.get("/", response_class=HTMLResponse)
async def true_root():
	with open(index) as f:
		return f.read()
