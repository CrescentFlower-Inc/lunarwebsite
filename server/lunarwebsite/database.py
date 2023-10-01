from pathlib import Path
from hashlib import sha256
import sqlite3 as sl # Later i'll switch to an ORM, but for now this'll do

DBURL = Path(__file__).parents[1] / "database/DATABASE.db"

class Database:
	def __init__(self):
		self.conn = sl.connect(str(DBURL))
		self.curr = self.conn.cursor()

		self.curr.execute("CREATE TABLE IF NOT EXISTS accounts (id INTEGER NOT NULL PRIMARY KEY, username VARCHAR(24), password CHAR(64));")
		self.conn.commit()

	def create_account(self, username, password):
		if not (self.curr.execute("SELECT username FROM accounts WHERE username=?;",(username,)).fetchone()) == Tuple():
			return False, "Username taken"

		theduck = username+password+username  # TODO: make this better later
		hash = sha256(theduck.encode('utf-8')).hexdigest()
		self.conn.execute("INSERT INTO accounts (username, password) VALUES (?,?);", (username,hash,))
		self.conn.commit()
		return True

db = Database()
