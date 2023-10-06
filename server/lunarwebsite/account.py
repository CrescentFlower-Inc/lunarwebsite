from fastapi import FastAPI, Request, Response
from pydantic import BaseModel
from hashlib import sha256
from random import randbytes
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
	data = await request.json()

	if data["mode"]:
		user = await User.filter(email=data["username"])
	else:
		user = await User.filter(username=data["username"])

	if len(user) == 0:
		response.status_code = 401
		return {"successful": False, "error": "Username/Email not found!"}

	user = user[0]
	hash = sha256(data["password"].encode('utf-8')).hexdigest()

	if not hash == User.password:
		response.status_code = 401
		return {"succesful": False, "error": "Incorrect password!"}

	session = await Session.create(user=user, token=sha256(randbytes(32)).hexdigest())

	return {"successful": True, "session": session.serialize()}
