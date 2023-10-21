from lunarwebsite.models import User, Session
from datetime import datetime

async def refresh_sessions():
	sessions = await Session.all()
	for session in sessions:
		if session.expires < datetime.utcnow():
			await session.delete()
