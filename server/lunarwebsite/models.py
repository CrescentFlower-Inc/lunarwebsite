from tortoise import fields, models
from hashlib import sha256
from datetime import datetime

class Session(models.Model):
	id = fields.IntField(pk=True, unique=True)

	user = fields.ForeignKeyField("models.User")
	token = fields.CharField(max_length=64, unique=True)

	expires = fields.DatetimeField()

	def serialize(self):
		days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
		months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

		expiry = self.expires.strftime(f"{ days[ self.expires.isoweekday()-1 ] }, %d { months[ self.expires.month-1 ] } %Y %H:%M:%S UTC")

		return {"token": self.token, "expires": expiry}

class User(models.Model):
	id = fields.IntField(pk=True, unique=True) # Account ID

	username = fields.CharField(max_length=32, unique=True) # Username
	email = fields.CharField(max_length=50, unique=True) # Email
	password = fields.CharField(max_length=64) # Hashed password

	admin = fields.BooleanField()
	banned = fields.BooleanField()
	created_at = fields.DatetimeField(auto_now_add=True)

	def authenticate(self, passwd) -> bool:
		if sha256(passwd.encode('utf-8')).hexdigest == self.password and not self.banned:
			Session
			return True
		else:
			return False

class Board(models.Model):
	id = fields.IntField(pk=True, unique=True)

	name = fields.CharField(max_length=50)



class PostStructure():
	id = fields.IntField(pk=True, unique=True)

	content = fields.CharField(max_length=1024)
	author = fields.ForeignKeyField("models.User")

	created_at = fields.DatetimeField(auto_now_add=True)


class FeedPost(PostStructure, models.Model):
	pass

class ForumPost(PostStructure, models.Model):
	board = fields.ForeignKeyField("models.Board")

class FeedReact(PostStructure, models.Model):
	feedpost = fields.ForeignKeyField("models.FeedPost")

