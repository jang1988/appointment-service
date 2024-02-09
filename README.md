////////////////////////////////////////////////////
POST /api/doctors
Content-Type: application/json

{
  "name": "Доктор Иванов",
  "spec": "Окулист",
  "slots": ["2024-02-11T10:00:00", "2024-02-11T11:00:00"]
}

/////////////////////////////////////////////////////
POST /api/users
Content-Type: application/json

{
  "phone": "+380115550011",
  "name": "Иван"
}

///////////////////////////////////////////////////////
POST /api/appointments
Content-Type: application/json

{
  "user_id": "609bedbb2babbf4b35e4a798",
  "doctor_id": "609bedbf2babbf4b35e4a799",
  "slot": "2024-02-10T09:00:00"
}