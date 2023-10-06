from tortoise import Tortoise, run_async

TORTOISE_ORM = {
    "connections": {"default": "sqlite://database/db.sqlite3"},
    "apps": {
        "models": {
            "models": ["lunarwebsite.models"],
            "default_connection": "default",
        },
    },
}

