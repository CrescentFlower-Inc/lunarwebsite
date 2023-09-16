from fastapi import FastAPI
from hashlib import sha256

app = FastAPI()

@app.post("/register")
def amogus(username, password):
	return {"test": True}

