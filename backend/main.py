from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


origins = ["http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    name: str


items = []


@app.get("/items")
def get_items():
    return items


@app.post("/items")
def add_item(item: Item):
    new_item = {"name": item.name}
    items.append(new_item)
    return new_item
