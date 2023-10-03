from tortoise import fields, models
from hashlib import sha256

class Sessions(models.Model):
	id = fields.IntField(pk=True)

	user = fields.ForeignKey("models.User")
	token = fields.CharField(max_l

class User(models.Model):
	id = fields.IntField(pk=True) # Account ID

	username = fields.CharField(max_length=32, unique=True) # Username
	email = fields.CharField(max_length=50, unique=True) # Email
	password = fields.CharField(max_length=256, uniquer=True) # Hashed password

	admin = fields.BooleanField()
	created_at = fields.DatetimeField(auto_now=True)

	def authenticate(self, passwd) -> bool:
		if sha256(passwd.encode('utf-8')).hexdigest == self.password:
			return True
		else:
			return False
