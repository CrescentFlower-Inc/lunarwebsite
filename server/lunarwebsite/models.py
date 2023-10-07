from tortoise import fields, models
from hashlib import sha256

class Session(models.Model):
	id = fields.IntField(pk=True)

	user = fields.ForeignKeyField("models.User")
	token = fields.CharField(max_length=64, unique=True)

	expires = fields.DatetimeField()

	def serialize(self):
		return {"token": self.token}

class User(models.Model):
	id = fields.IntField(pk=True) # Account ID

	username = fields.CharField(max_length=32, unique=True) # Username
	email = fields.CharField(max_length=50, unique=True) # Email
	password = fields.CharField(max_length=64, unique=True) # Hashed password

	admin = fields.BooleanField()
	created_at = fields.DatetimeField(auto_now_add=True)

	def authenticate(self, passwd) -> bool:
		if sha256(passwd.encode('utf-8')).hexdigest == self.password:
			Session
			return True
		else:
			return False
