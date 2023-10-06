from fastapi import FastAPI, Request, Response
from pydantic import BaseModel
from hashlib import sha256
from lunarwebsite.models import User

app = FastAPI()

@app.post("/register")
async def register(request: Request, response: Response):
	data = await request.json()

	if len(await User.filter(username=data["username"])) > 0:
		response.status_code = 400
		return {"successful": False, "error": "Username already taken!"}

	if len(await User.filter(email=data["email"])) > 0:
		response.status_code = 400
		return {"succesful": False, "error": "Email already taken!"}

	hash = sha256(data["password"].encode('utf-8')).hexdigest()
	user = await User.create(username=data["username"], password=data["password"], email=data["email"], admin=False)
	return {"successful": True}

@app.post("/login")
async def login(request: Request, response: Response):
	return {"nig": True}
