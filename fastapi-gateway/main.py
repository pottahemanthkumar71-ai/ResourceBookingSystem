from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI(
    title="Resource Booking API Gateway"
)

SPRING_URL = "http://localhost:7500"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================
# AUTH APIs
# ==================

@app.post("/api/auth/signup")
async def signup(user: dict):

    response = requests.post(
        f"{SPRING_URL}/api/auth/signup",
        json=user
    )

    return response.json()


@app.post("/api/auth/login")
async def login(user: dict):

    response = requests.post(
        f"{SPRING_URL}/api/auth/login",
        json=user
    )

    return response.json()

# ==================
# RESOURCE APIs
# ==================
@app.get("/api/resources")
async def get_resources():

    response = requests.get(
        f"{SPRING_URL}/api/resources"
    )

    return response.json()


@app.post("/api/resources")
async def add_resource(resource: dict):

    response = requests.post(
        f"{SPRING_URL}/api/resources",
        json=resource
    )

    return response.json()


@app.delete("/api/resources/{resource_id}")
async def delete_resource(resource_id: int):

    response = requests.delete(
        f"{SPRING_URL}/api/resources/{resource_id}"
    )

    return {"message": "Resource Deleted"}

# ==================
# BOOKING APIs
# ==================

@app.get("/api/bookings")
async def get_bookings():

    response = requests.get(
        f"{SPRING_URL}/api/bookings"
    )

    return response.json()


@app.post("/api/bookings")
async def add_booking(booking: dict):

    response = requests.post(
        f"{SPRING_URL}/api/bookings",
        json=booking
    )

    return response.json()


@app.delete("/api/bookings/{booking_id}")
async def delete_booking(booking_id: int):

    response = requests.delete(
        f"{SPRING_URL}/api/bookings/{booking_id}"
    )

    return response.json()
# ==================
# USER APIs
# ==================

@app.get("/api/users")
async def get_users():

    response = requests.get(
        f"{SPRING_URL}/api/users"
    )

    return response.json()


@app.delete("/api/users/{user_id}")
async def delete_user(user_id: int):

    response = requests.delete(
        f"{SPRING_URL}/api/users/{user_id}"
    )

    return {
        "message": "User Deleted"
    }