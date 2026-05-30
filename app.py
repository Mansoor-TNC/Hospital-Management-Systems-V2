from flask import Flask, render_template, request, session, jsonify, json, send_file
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import csv
import os


app = Flask(__name__)

app.secret_key = "my_secret_key"

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.sqlite3"
db = SQLAlchemy()
db.init_app(app)
app.app_context().push()


class User(db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.Integer, autoincrement = True, primary_key = True)
    user_name = db.Column(db.String, nullable = False)
    contact_no = db.Column(db.String, nullable = False)
    age = db.Column(db.Integer, nullable = False)
    gender = db.Column(db.String, nullable = False)
    user_email = db.Column(db.String, nullable = False)
    user_password = db.Column(db.String, nullable = False)
    user_role = db.Column(db.String, default = "patient")
    doctor_specialization = db.Column(db.Integer, db.ForeignKey('departments.department_id'), nullable = True)
    blacklist = db.Column(db.Boolean, default = False)
    department = db.relationship("Department", back_populates = "doctors")
    appointment_patient = db.relationship("Appointments", foreign_keys = "Appointments.patient_id", back_populates = "patients")
    appointment_doctor = db.relationship("Appointments", foreign_keys = "Appointments.doctor_id", back_populates = "doctors")
    available = db.relationship("Availability", back_populates = "doctor_availability")
    patient_treatment = db.relationship("Treatment", foreign_keys = "Treatment.patient_id", back_populates = "treatment_patient")
    doctor_treatment =  db.relationship("Treatment", foreign_keys = "Treatment.doctor_id", back_populates = "treatment_doctor")
    def user_dict(self):
        return {
            "id": self.user_id,
            "name": self.user_name,
            "email": self.user_email,
            "contact_no": self.contact_no,
            "age": self.age,
            "gender": self.gender,
            "role": self.user_role,
            "blacklist": self.blacklist,
            "doctor_department": self.department.department_name if self.department else None
        }


class Department(db.Model):
    __tablename__ = 'departments'
    department_id = db.Column(db.Integer, autoincrement = True, primary_key = True)
    department_name = db.Column(db.String, nullable = False)
    description = db.Column(db.Text)
    doctors= db.relationship("User", back_populates = "department")
    def department_dict(self):
        return {
            "id": self.department_id,
            "name": self.department_name,
            "description": self.description
        }

class Appointments(db.Model):
    __tablename__ = "appointments"
    appointment_id = db.Column(db.Integer, autoincrement = True, primary_key = True)
    patient_id = db.Column(db.Integer, db.ForeignKey('user.user_id'),nullable = False)
    doctor_id =  db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable = False)
    date = db.Column(db.Date, nullable = False)
    time = db.Column(db.String, nullable = False)
    status = db.Column(db.String, nullable = False)
    patients = db.relationship("User", foreign_keys = [patient_id], back_populates = "appointment_patient")
    doctors = db.relationship("User", foreign_keys = [doctor_id], back_populates = "appointment_doctor")
    treatments = db.relationship("Treatment", back_populates = "appointment")
    def appointments_dict(self):
        return {
            "id": self.appointment_id,
            "patient_id": self.patient_id,
            "patient_name": self.patients.user_name,
            "patient_age": self.patients.age,
            "patient_gender": self.patients.gender,
            "doctor_id": self.doctor_id,
            "doctor_name": self.doctors.user_name,
            "department": self.doctors.department.department_name if self.doctors and self.doctors.department else None,
            "date": self.date.strftime("%d-%m-%Y"),
            "time": self.time,
            "status": self.status
        }

class Treatment(db.Model):
    __tablename__ = "treatment"
    appointment_id = db.Column(db.Integer, db.ForeignKey('appointments.appointment_id'))
    treatment_id = db.Column(db.Integer, primary_key = True,  autoincrement = True)
    diagnosis = db.Column(db.String, nullable = False)
    prescription = db.Column(db.String, nullable = False)
    patient_id = db.Column(db.Integer, db.ForeignKey('user.user_id'),nullable = False)
    doctor_id =  db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable = False)
    date = db.Column(db.Date, nullable = False) 
    next_visit = db.Column(db.String, nullable = False)
    appointment = db.relationship("Appointments", back_populates = "treatments")
    treatment_patient = db.relationship("User", foreign_keys = [patient_id], back_populates = "patient_treatment")
    treatment_doctor = db.relationship("User", foreign_keys = [doctor_id], back_populates = "doctor_treatment")
    def treatment_dict(self):
        return {
            "id": self.treatment_id,
            "appointment_id": self.appointment_id,
            "patient_id": self.patient_id,
            "patient_name": self.treatment_patient.user_name,
            "patient_age": self.treatment_patient.age,
            "patient_gender": self.treatment_patient.gender,
            "doctor_id": self.doctor_id,
            "doctor_name": self.treatment_doctor.user_name,
            "diagnosis": self.diagnosis,
            "prescription": self.prescription,
            "next_visit" : self.next_visit,
            "date": self.date.strftime("%d-%m-%Y"),
        }

class Availability(db.Model):
    __tablename__ = "available_doctors"
    availability_id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    doctor_id =  db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable = False)
    date = db.Column(db.Date, nullable = False)
    time = db.Column(db.String, nullable = False)
    status = db.Column(db.String, nullable = False)
    doctor_availability = db.relationship("User", back_populates = "available")
    def availability_dict(self):
        return {
            "id": self.availability_id,
            "doctor_id": self.doctor_id,
            "doctor_name": self.doctor_availability.user_name,
            "date": self.date.strftime("%Y-%m-%d"),
            "time": self.time,
            "status": self.status
        }


@app.route("/")
def Index():
    return render_template("index.html") 

@app.route("/api/signup", methods = ["POST"])
def SignUp():
    data = request.get_json()
    user_name = data.get("user_name")
    user_email = data.get("user_email")
    contact_no = data.get("contact_no")
    age = data.get("age")
    gender = data.get("gender")
    user_password = data.get("user_password") 

    existing_user = User.query.filter_by(user_email = user_email).first()

    if existing_user:
        return jsonify( {"error": "Email Already Exists"} ),409 

    new_user = User(user_name = user_name, contact_no = contact_no, age = age, gender = gender, user_email = user_email, user_password = user_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify( {"success": "Account created Successfully"} )


@app.route("/api/login", methods = ["POST"])
def Login():
    data = request.get_json()
    user_email = data.get("user_email")
    user_password = data.get("user_password")
    correct_email = User.query.filter_by(user_email = user_email).first()
    correct_password = User.query.filter_by(user_email = user_email,user_password = user_password).first()

    if correct_email:

        if correct_password and correct_email.user_role == "patient":
            if correct_email.blacklist:
                return jsonify( {"error": "You are Blocked! Contact the Admin"} ),403
            session["user_role"] = correct_email.user_role
            session["user_name"] = correct_email.user_name
            session["user_id"] = correct_email.user_id
            session["gender"] = correct_email.gender
            session["user_email"] = correct_email.user_email
    
        elif correct_password and correct_email.user_role == "doctor":
            if correct_email.blacklist:
                return jsonify( {"error": "You are Blocked! Contact the Admin"} ),403
            session["user_role"] = correct_email.user_role
            session["user_name"] = correct_email.user_name
            session["user_id"] = correct_email.user_id
            session["gender"] = correct_email.gender
            session["user_email"] = correct_email.user_email
            print(session)
    
        elif correct_password and correct_email.user_role == "admin":
            session["user_role"] = correct_email.user_role
            session["user_name"] = correct_email.user_name
            session["user_email"] = correct_email.user_email
        
        elif not correct_password:
            return jsonify ({"error": "Incorrect Password"} ),401

    else:
        return jsonify( {"error": "Email does not Exist"} ),404
    
    return jsonify( {"success": True, "user_role": correct_email.user_role, "user_name": correct_email.user_name, } )

@app.route("/api/logout", methods = ["POST"])
def Logout():
    session.clear()
    return jsonify({"error":"Logged Out"})
    


@app.route("/api/patient_dashboard", methods = ["GET","POST"])
def Patient_Dashboard():
    if "user_role" not in session or session["user_role"] != "patient":
        return jsonify( {"error": "Login or Sign up to Access"}),401
    
    patient_id = session.get("user_id")
    today = datetime.today().date()
    now = datetime.now()
    time_now = now.time()
    missed = Appointments.query.filter(Appointments.date <= today, Appointments.status == "Booked").all()
    for appointment in missed:
        if appointment.date < today:
            appointment.status = "Missed"
        elif appointment.date == today:
            time = datetime.strptime(appointment.time, "%I:%M %p").time()
            if time < time_now:
                appointment.status = "Missed"

    upcoming = Appointments.query.filter(Appointments.date >= today, Appointments.patient_id == patient_id ).all()
    doctors = User.query.filter_by(user_role="doctor", blacklist = False ).all()
    departments = Department.query.all()
    live = Appointments.query.filter(Appointments.date >= today, Appointments.status == "Booked", Appointments.patient_id == patient_id).count()
    cancelled_appointments = Appointments.query.filter_by(patient_id = patient_id, status = "Cancelled by Patient").count()
    treatments = Treatment.query.filter_by(patient_id = patient_id).all()

    upcoming_appointments = []
    for i in upcoming:
        upcoming_appointments.append(i.appointments_dict())

    treatment = []
    for t in treatments:
        treatment.append({"id": t.treatment_id,
            "doctor_name": t.treatment_doctor.user_name,
            "diagnosis": t.diagnosis,
            "date": t.date.strftime("%d-%m-%Y"),
            "prescription": json.loads(t.prescription),
            "next_visit": t.next_visit})

    doctors = [i.user_dict() for i in doctors]
    departments = [i.department_dict() for i in departments]
    db.session.commit()
    data = {"user_name": session.get("user_name"), "user_email": session.get("user_email"), "gender": session.get("gender"), "upcoming_appointments": upcoming_appointments, "treatments": treatment, "id":patient_id, "live": live, "doctors": doctors, "departments": departments, "cancelled": cancelled_appointments}
    return jsonify(data)

@app.route("/api/patient_check_availability/<int:id>", methods = ["GET"])
def patient_check_availability(id):
    today = datetime.today().date()
    Availability.query.filter(Availability.date <= today).delete()
    availabe_slots = Availability.query.filter_by(doctor_id = id, status = "available")
    availability = {}
    doc = User.query.filter_by(user_id = id).first()
    for slot in availabe_slots:
        date = slot.date.strftime("%Y-%m-%d")
        if date not in availability:
            availability[date] = []
        availability[date].append(slot.time)
    doctor = doc.user_dict()
    db.session.commit()
    return jsonify({ "availability":availability, "doctor": doctor })

@app.route("/api/book_appointment", methods = ["POST"])
def Book_appointment():
    patient_in_department = False
    data = request.get_json()
    doctor_id = data.get("doctor_id")
    date_of_appointment = data.get("date")
    date = datetime.strptime(date_of_appointment, "%Y-%m-%d").date()
    time = data.get("time")
    doctor = User.query.get(doctor_id)
    department = doctor.doctor_specialization
    appointment_present = Appointments.query.filter_by(doctor_id = doctor_id, date = date, time = time, status = "Booked").first()
    already_appointment = Appointments.query.filter_by(patient_id = session.get("user_id"), doctor_id = doctor_id, status = "Booked").first()
    
    doctors_in_department = User.query.filter_by(doctor_specialization = department).all()
    doctors = []
    for doc in doctors_in_department:
        doctors.append(doc.user_id)
    
    for d in doctors:
        if Appointments.query.filter(Appointments.patient_id == session.get("user_id"), Appointments.status == "Booked", Appointments.doctor_id == d ).first():
            patient_in_department = True
            break

    
    if appointment_present:
        return jsonify({ "error": "This Slot is Already Booked" }),403
    if already_appointment:
        return jsonify({ "error": "You Already Have an Appointment with this Doctor" }),403
    if patient_in_department:
        return jsonify({ "error": "You Already Have an Appointment with a Doctor in this Department" }),403
    

    new_appointment = Appointments(patient_id = session.get("user_id"), doctor_id = doctor_id, date = date, time = time, status ="Booked")
    booked_availability = Availability.query.filter_by(doctor_id = doctor_id, date = date, time = time).first()
    booked_availability.status = "Booked"
    db.session.add(new_appointment)
    db.session.commit()
    return jsonify({ "success": True})

@app.route("/api/patient_cancel", methods = ["POST"])
def Patient_Cancel():
    data = request.get_json()
    id = data.get("id")
    date = data.get("date")
    date_format = datetime.strptime(date,"%d-%m-%Y").date()
    time = data.get("time")
    doctor_id = data.get("doctor_id")
    appointment = Appointments.query.filter_by(appointment_id = id).first()
    available = Availability.query.filter_by(doctor_id = doctor_id, date = date_format, time = time).first()
    appointment.status = "Cancelled by Patient"
    available.status = "available"
    db.session.add(available)
    db.session.commit()
    
    return jsonify({ "success": True })

@app.route("/api/patient_view_doctors/<int:id>", methods=["GET"])
def Patient_View_doctors(id):
    doctors = User.query.filter_by(doctor_specialization = id, blacklist = False).all()
    department = Department.query.filter_by(department_id = id).first()
    department_name = department.department_name 
    doctor_list = [doctor.user_dict() for doctor in doctors]
    return jsonify({ "doctors": doctor_list, "department" :department_name })

@app.route("/api/download", methods=["GET"])
def download_report():
    patient_id = session.get("user_id")
    treatments = Treatment.query.filter_by(patient_id = patient_id).all()
    
    file_path = "report.csv"
    with open(file_path, "w", newline="") as file:
        writer = csv.writer(file)
    
        writer.writerow(["Doctor Name", "Date", "Diagnosis", "Prescription", "Next Visit"])
        for t in treatments:
            med = json.loads(t.prescription)
            prescription_text = ""
            for p in med:
                prescription_text += f"{p['name']} ({p['breakfast']}) - ({p['lunch']}) - ({p['dinner']})"

            writer.writerow([
                t.treatment_doctor.user_name,
                t.date.strftime("%d-%m-%Y"),
                t.diagnosis,
                prescription_text,
                t.next_visit
            ])

    return send_file(file_path, as_attachment=True)


@app.route("/api/doctor_dashboard", methods = ["GET"])
def Doctor_Dashboard():
    if "user_role" not in session or session["user_role"] != "doctor":
        return jsonify( {"error": "Login or Sign up to Access"}),401
    
    doctor_id = session.get("user_id")

    today = datetime.today().date()
    now = datetime.now()
    time_now = now.time()
    todays = Appointments.query.filter(Appointments.date == today, Appointments.doctor_id == doctor_id).all()
    Availability.query.filter(Availability.date <= today).delete()
    missed = Appointments.query.filter(Appointments.date <= today, Appointments.status == "Booked").all()
    for appointment in missed:
        if appointment.date < today:
            appointment.status = "Missed"
        elif appointment.date == today:
            time = datetime.strptime(appointment.time, "%I:%M %p").time()
            if time < time_now:
                appointment.status = "Missed"
    upcoming = Appointments.query.filter(Appointments.date > today, Appointments.status == "Booked", Appointments.doctor_id == doctor_id ).all()
    patients = User.query.filter_by(user_role="patient").all()
    treatments = Treatment.query.filter_by(doctor_id = doctor_id).all()
    cancelled_appointments = Appointments.query.filter(Appointments.doctor_id == doctor_id, Appointments.status == "Cancelled by Doctor").count()
    missed_appointments = Appointments.query.filter(Appointments.doctor_id == doctor_id, Appointments.status == "Missed").count()
    provided_slots = Availability.query.filter_by(doctor_id=doctor_id).count()
    slots = Availability.query.filter_by(doctor_id=doctor_id, status = "available").all()
    booked = Availability.query.filter_by(doctor_id=doctor_id, status = "Booked").all()

    availability = {}
    for slot in slots:
        date = slot.date.strftime("%Y-%m-%d")
        if date not in availability:
            availability[date] = []
        availability[date].append(slot.time)

    booked_slots = {}
    for slot in booked:
        date = slot.date.strftime("%Y-%m-%d")
        if date not in booked_slots:
            booked_slots[date] = []
        booked_slots[date].append(slot.time)
    upcoming_appointments = []
    for i in upcoming:
        upcoming_appointments.append(i.appointments_dict())

    todays_appointments = []
    for i in todays:
        todays_appointments.append(i.appointments_dict())

    patients = [i.user_dict() for i in patients]    

    treatment = []

    for t in treatments:
        treatment.append({"id": t.treatment_id,
            "patient_name": t.treatment_patient.user_name,
            "diagnosis": t.diagnosis,
            "date": t.date.strftime("%d-%m-%Y"),
            "prescription": json.loads(t.prescription),
            "next_visit": t.next_visit})

    db.session.commit()
    data = {"user_name": session.get("user_name"), "user_email": session.get("user_email"), "gender": session.get("gender"), "upcoming_appointments": upcoming_appointments, "booked_slots":booked_slots, "cancelled_appointments": cancelled_appointments, "treatments": treatment, "missed_appointments":missed_appointments, "slots": provided_slots, "availability": availability, "todays_appointments": todays_appointments, "patients": patients }

    return jsonify(data)


@app.route("/api/doctor_availability", methods = ["POST"])
def Doctor_Availability():
    doctor_id = session.get("user_id")
    data = request.json.get("availability",{})
    Availability.query.filter_by(doctor_id = doctor_id, status = "available").delete()

    for date, slots in data.items():
        for slot in slots:
            new_availability = Availability(doctor_id = doctor_id, date = datetime.strptime(date,"%Y-%m-%d").date(), time = slot, status = "available")
            db.session.add(new_availability)
    
    db.session.commit()
    return jsonify({ "success": True })

@app.route("/api/doctor_cancel", methods = ["POST"])
def Doctor_Cancel():
    data = request.get_json()
    id = data.get("id")
    appointment = Appointments.query.filter_by(appointment_id = id).first()
    appointment.status = "Cancelled by Doctor"
    db.session.commit()
    return jsonify({ "success": True })

@app.route("/api/doctor_view_history/<int:id>", methods = ["GET"])
def Doctor_View_History(id):
    pat = User.query.filter_by(user_id = id).first()
    patient = pat.user_dict()
    treatment = Treatment.query.filter_by(patient_id = id).all()
    history = []
    for t in treatment:
        history.append({"id": t.treatment_id,
            "doctor_name": t.treatment_doctor.user_name,
            "diagnosis": t.diagnosis,
            "date": t.date.strftime("%d-%m-%Y"),
            "prescription": json.loads(t.prescription),
            "next_visit": t.next_visit})
        
    print(history)
    return jsonify({ "history": history, "patient": patient })

@app.route("/api/treatment", methods = ["POST"])
def Doctor_Treatment():
    print("api hit")
    doctor_id = session.get("user_id")
    data = request.get_json()
    diagnosis = data.get("diagnosis")
    prescription = data.get("prescription")
    next_visit = data.get("next_visit")
    patient_id = data.get("patient_id")
    appointment_id = data.get("appointment_id")
    date = data.get("date")
    format_date = datetime.strptime(date, "%d-%m-%Y").date()

    appointment = Appointments.query.filter_by(appointment_id = appointment_id).first()
    db.session.delete(appointment)
    new_treatment = Treatment(appointment_id = appointment_id,diagnosis = diagnosis, prescription = json.dumps(prescription), patient_id = patient_id, doctor_id = doctor_id, date = format_date, next_visit = next_visit)
    db.session.add(new_treatment)
    db.session.commit()
    return jsonify({ "success": True })

@app.route("/api/admin_dashboard", methods = ["GET"])
def Admin_Dashboard():
    if "user_role" not in session or session["user_role"] != "admin":
        return jsonify( {"error": "Login or Sign up to Access"}),401
    
    blacklist_count = User.query.filter_by(blacklist = True).count()
    today = datetime.today().date()
    todays = Appointments.query.filter( Appointments.date == today, Appointments.status == "Booked").all()
    upcoming = Appointments.query.filter(Appointments.date != today, Appointments.status == "Booked" ).all()
    previous = Appointments.query.filter(Appointments.status != "Booked" ).all()
    doctors = User.query.filter_by(user_role="doctor").all()
    patients = User.query.filter_by(user_role="patient").all()
    departments = Department.query.all()
    blacklist_doctors = User.query.filter_by(user_role = "doctor", blacklist = True).all()
    blacklist_patients = User.query.filter_by(user_role = "patient", blacklist = True).all()
    print(today,todays)
        
    upcoming_appointments = []
    for i in upcoming:
        upcoming_appointments.append(i.appointments_dict())

    todays_appointments = []
    for i in todays:
        todays_appointments.append(i.appointments_dict())

    previous_appointments = []
    for i in previous:
        previous_appointments.append(i.appointments_dict())
    
    doctors = [i.user_dict() for i in doctors]
    patients = [i.user_dict() for i in patients]
    departments = [i.department_dict() for i in departments]
    blacklist_doctors = [i.user_dict() for i in blacklist_doctors]
    blacklist_patients = [i.user_dict() for i in blacklist_patients]

    data = {"user_name": session.get("user_name"), "user_email": session.get("user_email"), "previous_appointments": previous_appointments, "blacklist_count": blacklist_count, "upcoming_appointments": upcoming_appointments, "todays_appointments": todays_appointments, "doctors": doctors, "patients": patients, "departments": departments, "blacklist_doctors": blacklist_doctors, "blacklist_patients": blacklist_patients}
    
    return jsonify(data)

@app.route("/api/add_doctor", methods = ["POST"])
def Add_Doctor():
    data = request.get_json()
    user_name = data.get("user_name")
    user_email = data.get("user_email")
    contact_no = data.get("contact_no")
    age = data.get("age")
    gender = data.get("gender")
    department_id = data.get("department")
    user_password = data.get("user_password") 

    existing_user = User.query.filter_by(user_email = user_email).first()

    if existing_user:
        return jsonify( {"error": "Email Already Exists"} ),409 

    new_doctor = User(user_name = user_name, contact_no = contact_no, age = age, gender = gender, user_email = user_email, user_password = user_password, doctor_specialization = department_id, user_role = "doctor")
    db.session.add(new_doctor)
    db.session.commit()
    return jsonify( {"success": "Doctor Created Successfully"} )

@app.route("/api/edit_doctor/<int:id>", methods=["GET", "POST"])
def Edit_doctor(id):
    doctor = User.query.get(id)

    if request.method == "GET":
        return jsonify({ "id": doctor.user_id, "user_name": doctor.user_name, "user_email": doctor.user_email, "user_password": doctor.user_password, "contact_no": doctor.contact_no, "age": doctor.age, "gender": doctor.gender, "department": doctor.doctor_specialization })

    if request.method == "POST":
        data = request.get_json()
        doctor.user_name = data.get("user_name")
        doctor.contact_no = data.get("contact_no")
        doctor.age = data.get("age")
        doctor.gender = data.get("gender")
        doctor.user_email = data.get("user_email")
        doctor.user_password = data.get("user_password")
        doctor.doctor_specialization = data.get("department")

        db.session.commit()
        return jsonify({"success": "Doctor Updated Successfully"})
    
@app.route("/api/delete_doctor", methods = ["POST"])
def Delete_doctor():
    data = request.get_json()
    user_id = data.get("user_id")
    doctor_present = Appointments.query.filter_by(doctor_id = user_id).first() or Availability.query.filter_by(doctor_id = user_id).first()
    if doctor_present:
        return jsonify({ "error": "Cannot delete Doctor. Has Appointments or Availabilty" })
    user = User.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"success": True })

@app.route("/api/blacklist", methods = ["POST"])
def Blacklist():
    data = request.get_json()
    user_id = data.get("user_id")
    blacklist = data.get("blacklist")

    user = User.query.get(user_id)

    if blacklist:
        user.blacklist = False
    else:
        user.blacklist = True
    db.session.commit()
    return jsonify({"success": True })

@app.route("/api/add_department", methods = ["POST"])
def Add_Department():
    data = request.get_json()
    department_name = data.get("department_name")
    description = data.get("description")

    existing_department = Department.query.filter_by(department_name = department_name).first()

    if existing_department:
        return jsonify( {"error": "Department Already Exists"} ),409 

    new_department = Department(department_name = department_name, description = description)
    db.session.add(new_department)
    db.session.commit()
    return jsonify( {"success": "Department Created Successfully"} )

@app.route("/api/edit_department/<int:id>", methods=["GET", "POST"])
def Edit_department(id):
    department = Department.query.get(id)

    if request.method == "GET":
        return jsonify({ "id": department.department_id, "department_name": department.department_name, "description": department.description })

    if request.method == "POST":
        data = request.get_json()
        department.department_name = data.get("department_name")
        department.description = data.get("description")

        db.session.commit()
        return jsonify({"success": "Department Updated Successfully"})
    
@app.route("/api/delete_department", methods = ["POST"])
def Delete_department():
    data = request.get_json()
    department_id = data.get("department_id")

    doctor_exists = User.query.filter_by(doctor_specialization = department_id).first()
    if doctor_exists:
        return jsonify( {"error":"Doctor Present in the Department"} ),403

    department = Department.query.get(department_id)
    db.session.delete(department)
    db.session.commit()
    return jsonify({"success": True })

@app.route("/api/view_doctors/<int:id>", methods=["GET"])
def View_doctors(id):
    doctors = User.query.filter_by(doctor_specialization = id).all()
    department = Department.query.filter_by(department_id = id).first()
    department_name = department.department_name 
    doctor_list = [doctor.user_dict() for doctor in doctors]
    return jsonify({ "doctors": doctor_list, "department" :department_name })

if __name__ == "__main__":
    db.create_all()
    if not User.query.filter_by(user_role = "admin").first():
        admin = User(user_name = "Admin", user_email = "admin@gmail.com", user_password = "admin", contact_no = "123", age = "20", gender = "Male", user_role = "admin")
        db.session.add(admin)
        db.session.commit()

    app.run(debug = True)        

    