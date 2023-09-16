from lunarwebsite.accounts import app as accountsapp
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pathlib import Path

staticfolder = Path(__file__).parents[2] / "client/dist"
index = staticfolder / "index.html"

app = FastAPI()

app.mount("/api/account", accountsapp)

@app.get("/api")
async def root():
	return {"Location": "The moon", "Server": "UDN DuckServ 6.9", "Organization": "Crescent-Inc"}

app.mount("/", StaticFiles(directory=str(staticfolder), html=True), name="static")
