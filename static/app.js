
const index = {
    template: `
    <div>
        <div class = "name">
            <p class = "error" style = "left: 50%; font-size: 50%; animation: error 6s ease-in-out forwards; background: rgb(255, 13, 13);" v-if = "error">
                \{\{ error }}
            </p>
            Hospital Management Systems
            <div class = "actions">
                <button class="box" @click = "login()">Login</button> 
                <button class="box" @click = "signup()">Sign up</button>
            </div>
        </div>
        <div class = "question" style = "position: relative">
            <div style = "width:100%; display:flex; justify-content:center">
                <img class ="image" style = "animation: fade 1.5s ease forwards; animation-delay: 1s; width: 85%; margin-top: 7%; margin-bottom: 5%; box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5)" src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg" alt="">
                <div style="font-size:80%; position: absolute; animation: show 3s ease-in forwards; top: 50%; left: 50%; font-weight: bold; transform: translate(-50%, -50%); font-family:lora; color: black; text-shadow: 0px 0px 0px rgba(0,0,0); text-align: center; padding:10px;">
                    Better care starts with better access<br>
                    Book appointments, access records, and get seamless support.<br>
                    Everything is just a click away!<br>
                    <button class = "appointment" style = "background-color: rgb(4, 168, 1); color: white" @click = "login()" type = "submit">Book an Appointment</button>
                </div>
            </div>
        </div>
        <div class="points">
            <p class = "question">
                What is Hospital Management Systems ?
            </p>
            <div class = "content">
                <div>
                    <p class = "text">                  
                        A hospital management system (HMS) is a software based solution that integrates and automates the administrative, financial, and clinical 
                        operations of a healthcare facility. It acts as a centralized platform for tasks such as patient registration, appointment scheduling,
                        managing electronic health records and staff management, making daily operations more efficient. 
                        <br><br>
                    </p>
                    <p class = "question" style = "font-size:120%">
                        Why Hospital Management Systems ?
                    </p><br>
                    <ul>
                        <li>Real-time data access allows doctors to adjust treatment faster and with higher accuracy.</li>
                        <br>
                        <li>24/7 appointment booking, instant notifications for higher patient engagement.</li>
                        <br>
                        <li>Robust security protocols and data privacy policy safeguards customer data, ensuring confidentiality.</li>
                    </ul>
                    <br>
                </div>
                <img class="image" src="/static/image.png" alt="">
            </div>
        </div>
        <footer class = "footer">
            Hospital Management Systems | 2024 Batch | copyright 2025
        </footer>
    </div>
    `,
    data(){
        return {
            error : ""
        }
    },

    async mounted(){
        if(this.$route.query.error){
            this.error = this.$route.query.error
            this.$router.replace({query:{}})
        }
    },

    methods: {
        login(){
            this.$router.push("/login")
        },

        signup(){
            this.$router.push("/signup")
        }
    }
}

const signup = {
    template: `
    <div>
        <router-link to = "/" class = "heading">
            Hospital Management Systems
        </router-link> 
        <div style="position:relative; margin:40px; padding:5px;">
            <div style = "position:absolute; width:100%; height:100%; z-index: 0; filter:blur(10px); background: url('https://images.pexels.com/photos/30348333/pexels-photo-30348333.jpeg') center/cover no-repeat;"></div>
                <div class = "signup_box" style = "position:relative; z-index:1">
                    <h1>
                        Create an Account
                    </h1>
                    <p class = "error" style = "left: 50%; font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                        \{\{ error }}
                    </p>
                    <p class = "error" style = "left: 50%; font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
                        \{\{ success }}
                    </p>  
                    <div>
                        <input class = "signup_input" v-model = "user_name" placeholder="Full name" required/><br>
                        <input class = "signup_input" v-model = "contact_no" placeholder="Contact No" required/><br>
                        <div style = "display:flex; width:95%; justify-content:space-between">
                            <select style = "flex:3; width:100%;" v-model = "gender">
                                <option  disabled value = "">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input class = "signup_input" v-model.number = "age" type = "number" placeholder="Age" min = "1" style = "flex:2; width:100%" required/>
                        </div>
                        <input class = "signup_input" v-model = "user_email" placeholder="Email Address" required/><br>
                        <input class = "signup_input" v-model = "user_password" placeholder="Set a Password" required/><br>
                        <input class = "signup_input" v-model = "confirm_password" type = "password" placeholder="Confirm Password" required/><br>
                        <div class = "box">
                            <button class = "submit" type = "button" @click = "signup_submit()">Submit</button><br>
                            <router-link to="/login" style="font-size: 65%;"> already have an account? Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class = "footer">
            Hospital Management Systems | 2024 Batch | copyright 2025
        </footer>
    </div>`,
    data(){
        return {
            user_name : "",
            contact_no: "",
            age: "",
            gender: "",
            user_email : "",
            user_password : "",
            confirm_password : "",
            error:"",
            success:""
        }
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async signup_submit(){
            this.error = ""

            if(this.user_name === "" || this.user_email === "" || this.user_password === "" || this.age === "" || this.gender === "" || this.confirm_password === "" || this.contact_no === ""){
            this.error_msg("Please fill in all details")
            return
            }

            if(this.contact_no.length !==  10 || isNaN(this.contact_no)){
            this.error_msg("Enter a Valid Contact Number")
            return
            }

            if(this.age > 100 || this.age < 1 || isNaN(this.age)){
                this.error_msg("Enter a Valid Age")
                return
            }

            if(this.user_password !== this.confirm_password){
            this.error_msg("Confirm Password did not match")
            return
            }

            try{
                await axios.post("/api/signup", {
                    user_name : this.user_name,
                    user_email : this.user_email,
                    contact_no : this.contact_no,
                    age : this.age,
                    gender : this.gender,
                    user_password : this.user_password
                })
                this.$router.push({ path : "/login", query: {success:"Account Created Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}

const login = {
    template: `
    <div>
        <router-link to = "/" class = "heading">
            Hospital Management Systems
        </router-link> 
        <div style="position:relative; margin:40px; padding:5px;">
            <div style = "position:absolute; width:100%; height:100%; z-index: 0; filter:blur(10px); background: url('https://images.pexels.com/photos/30348333/pexels-photo-30348333.jpeg') center/cover no-repeat;"></div>
                <div class = "signup_box" style = "position:relative; z-index:1">
                    <h1>
                        Sign In
                    </h1>
                    <p class = "error" style = "left: 50%; font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                        \{\{ error }}
                    </p>
                    <p class = "error" style = "left: 50%; font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
                        \{\{ success }}
                    </p>  
                    <div>
                        <input class = "signup_input" v-model = "user_email" placeholder = "Email Address" required/><br>
                        <input class = "signup_input" type = "password" v-model = "user_password" placeholder = "Password" required/><br>
                        <div class = "box">
                            <button class = "submit" @click = "login_submit()">Submit</button><br>
                            <router-link to="/signup" style="font-size: 65%;"> Dont have an account? Sign Up</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class = "footer">
            Hospital Management Systems | 2024 Batch | copyright 2025
        </footer>
    </div>`,

    data(){
        return {
            user_email : "",
            user_password : "",
            user_role : "",
            error : "",
            success : ""
        }
    },

    async mounted(){
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async login_submit(){
            this.error = ""

            if(this.user_email === "" || this.user_password === ""){
            this.error_msg("Please fill in all details")
            return
            }

            try{
                const info = await axios.post("/api/login", {
                    user_email : this.user_email,
                    user_password : this.user_password
                })

                this.user_role = info.data.user_role

                if (this.user_role === "admin"){
                this.$router.push("/admin_dashboard")
                }
                else if (this.user_role === "doctor"){
                this.$router.push("/doctor_dashboard")
                } 
                else if (this.user_role === "patient"){
                this.$router.push("/patient_dashboard")
                }
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }

    }
}

const admin_dashboard = {
    template: `
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Home</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors, Patients, Departments">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 && search_patient.length === 0 && search_department.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>
                                        <div>
                                            \{\{doctor.name}} (Doctor)
                                            <p v-if = "doctor.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p>
                                        </div>
                                    </td>
                                    <td>\{\{doctor.contact_no}}</td>
                                    <td>\{\{doctor.email}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_doctor', query: { id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "patient in search_patient" :key="patient.id" style = "color:black">
                                    <td>\{\{patient.name}} (Patient)<br><p v-if = "patient.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p></td>
                                    <td>\{\{patient.contact_no}}</td>
                                    <td>\{\{patient.email}}</td>
                                    <td>  </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_patient', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "patient.blacklist === false" @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_patient(patient)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "department in search_department" :key="department.id" style = "color:black">
                                    <td>\{\{department.name}}<br>(Department) </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_department', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_department(department)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">🗑️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "$router.push({path:'/view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div style = "display:flex; flex-wrap:wrap; margin:3%; gap:1%; width:95%; justify-content:center; color:rgb(0, 158, 232)">
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0"> \{\{patients.length}} </p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Patients</p>
                            </div>
                            <img style = "padding:4px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/patient.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{doctors.length}}</p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Doctors</p>
                            </div>
                            <img style = "padding:3px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/doctor.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{departments.length}}</p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Departments</p>
                            </div>
                            <img style = "width:30%;" src = "/static/departments.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{blacklist_count}}</p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Blacklisted</p>
                            </div>
                            <img style = "padding:4px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/blacklist.png">
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div class = "appointments_content">
                        <div>
                            Todays Appointments
                        </div>
                        <div style = "margin-right: 5%">
                            \{\{todays_appointments.length}}
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Department</th>
                            <th>time</th>
                            <th>status</th>
                        </tr>
                        <tr v-if="todays_appointments.length !== 0" v-for="appointment in todays_appointments" :key = "appointment.id"  :style = "{color: appointment.status !== 'Booked' ? 'red' : 'black'}">
                            <td>\{\{appointment.id}}</td>
                            <td>\{\{appointment.patient_name}}</td>
                            <td>\{\{appointment.doctor_name}}</td>
                            <td>\{\{appointment.department}}</td>
                            <td>\{\{appointment.time}}</td>
                            <td>\{\{appointment.status}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Patients</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button>
            </div>
        </div>

    </div>`,

    data(){
        return{
            error: "",
            success:"",
            user_name: "",
            user_email:"",
            show_menu: false,
            blacklist_count:"",
            previous_appointments: [], 
            upcoming_appointments: [], 
            todays_appointments: [], 
            doctors: [], 
            patients: [], 
            departments: [],
            search:"",
            search_doctor:[],
            search_patient:[],
            search_department:[],
        }
    },

    async mounted(){
        try{
            this.load_page()
            const needed_data = await axios.get("/api/admin_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.previous_appointments = needed_data.data.previous_appointments 
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.doctors = needed_data.data.doctors          
            this.patients = needed_data.data.patients
            this.blacklist_count = needed_data.data.blacklist_count
            this.departments = needed_data.data.departments
            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/admin_dashboard")
            this.previous_appointments = needed_data.data.previous_appointments 
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.doctors = needed_data.data.doctors          
            this.patients = needed_data.data.patients
            this.blacklist_count = needed_data.data.blacklist_count
            this.departments = needed_data.data.departments
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_patient = []
                this.search_department = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_patient = result_patient
            this.search_department = result_department
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_patient = []
                this.search_department = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_patient = result_patient
            this.search_department = result_department
            this.load_page()
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },

        async blacklist(doctor){
            try{
                await axios.post("/api/blacklist",{
                    user_id: doctor.id,
                    blacklist: doctor.blacklist
                })
                doctor.blacklist = !doctor.blacklist
            }catch(err){
                this.error = "Something Went Wrong"
            }
        }, 

        async delete_doctor(doctor){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: doctor.id 
                })
                this.load_page()
                this.doctors = this.doctors.filter(doc => doc.id !== doctor.id)
                this.search_doctor = this.search_doctor.filter(doc => doc.id !== doctor.id)
                this.success = "Doctor Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async delete_patient(patient){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: patient.id 
                })
                this.load_page()
                this.patients = this.patients.filter(pat => pat.id !== patient.id)
                this.search_patient = this.search_patient.filter(pat => pat.id !== patient.id)
                this.success = "Patient Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async delete_department(department){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_department",{
                    department_id: department.id 
                })
                this.load_page()
                this.departments = this.departments.filter(dept => dept.id !== department.id)
                this.search_department = this.search_department.filter(dept => dept.id !== department.id)
                this.success = "Department Deleted Successfully"
            }catch(err){
                this.error = err.response?.data?.error || "Something Went Wrong"
            }
        },
    }
}

const admin_doctors = {
    template:`
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>    
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Doctors</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>\{\{doctor.id}}</td>
                                    <td>
                                        <div>
                                            \{\{doctor.name}} 
                                            <p v-if = "doctor.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p>
                                        </div>
                                    </td>
                                    <td>\{\{doctor.contact_no}}</td>
                                    <td>\{\{doctor.email}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_doctor', query: { id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div class = "appointments_content">
                        <div>
                            All Doctors ( \{\{doctors.length}} )
                        </div>
                        <button @click = "$router.push('/add_doctor')" class = "logout admin_logout" style = "margin-right: 2%; color:white; background-color: rgb(0, 158, 232); font-size: 60%; padding:0.5%">
                            ╋ Add Doctor
                        </button>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th style = "width:15%">Events</th>
                        </tr>
                        <tr v-if = "doctors.length !== 0"  v-for = "doctor in doctors" :key = "doctor.id" style = "font-size:70%; color:black">
                            <td>\{\{doctor.id}}</td>
                            <td>\{\{doctor.name}}<br><p v-if = "doctor.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p></td>
                            <td>\{\{doctor.age}}</td>
                            <td>\{\{doctor.contact_no}}</td>
                            <td>\{\{doctor.email}}</td>
                            <td>\{\{doctor.doctor_department}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_doctor', query: { id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✏️</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                    </div>
                                    <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">⊘</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                    </div>
                                    <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✓</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                    </div>
                                    <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                    <p style = "font-size:80%; margin:0;">🗑️</p>
                                    <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="7" style = "padding:2%"> No Doctors Found </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Patients</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error : "",
            doctors : [],
            success : "",
            show_menu:false,
            user_email:"",
            user_name:"",
            search:"",
            search_doctor:[],
        }
    },

    async mounted(){
        this.load_page()
        const needed_data = await axios.get("/api/admin_dashboard")
        this.doctors = needed_data.data.doctors
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
        if(this.$route.query.error){
            this.success = this.$route.query.error
            this.$router.replace({query:{}})
        }
        try{
            const needed_data = await axios.get("/api/admin_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
        }catch(err){
            this.error = "Something Went Wrong"
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/admin_dashboard")
            this.doctors = needed_data.data.doctors
        },

        async blacklist(doctor){
            try{
                await axios.post("/api/blacklist",{
                    user_id: doctor.id,
                    blacklist: doctor.blacklist
                })
                doctor.blacklist = !doctor.blacklist
            }catch(err){
                this.error = "Something Went Wrong"
            }
        }, 

        async delete_doctor(doctor){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: doctor.id 
                })
                this.load_page()
                this.doctors = this.doctors.filter(doc => doc.id !== doctor.id)
                this.search_doctor = this.search_doctor.filter(doc => doc.id !== doctor.id)
                this.success = "Doctor Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.load_page()
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            
            this.search_doctor = result_doctor
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }

}

const add_doctor = {
    template:`
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex; justify-content:center; align-items:center">
            <div class = "signup_box" style = "background-color: rgb(200,230,255); color: rgb(0,100,100); box-shadow: 0px 10px 40px rgb(0, 49, 70); border: 5px solid rgb(0, 51, 59);">
                <h1>
                    Add Doctor
                </h1>
                <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                    \{\{ error }}
                </p>
                <div>
                    <div>
                        <input class = "signup_input" v-model = "user_name" placeholder="Full name" required/><br>
                        <input class = "signup_input" v-model = "contact_no" placeholder="Contact No" required/><br>
                        <div class = "signup_input" style = "font-size:110%; background-color: rgb(200,230,255); display:flex; justify-content:space-between; padding:0; margin:0">
                            <select style = "flex:3; width:100%;" v-model = "gender">
                                <option  disabled value = "">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input class = "signup_input" v-model.number = "age" type = "number" placeholder="Age" min = "1" style = "flex:2; width:100%" required/>
                        </div>
                        <select class = "signup_input" style = "font-size:90%; padding-bottom:2%; padding-top:2%" v-model = "department">
                            <option disabled value = "">Department</option>
                            <option v-for = "department in departments" :key = "department.id" :value = "department.id">\{\{department.name}}</option>
                        </select><br>
                        <input class = "signup_input" v-model = "user_email" placeholder="Email Address" required/><br>
                        <input class = "signup_input" v-model = "user_password" placeholder="Set a Password" required/><br>
                        <input class = "signup_input" v-model = "confirm_password" type = "password" placeholder="Confirm Password" required/><br>
                        <div class = "box" style = "display:flex; justify-content:space-between; margin-top:10%">
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:20%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "$router.push('/admin_doctors')">Back</button><br>
                            </div>
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:12%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "add_doctor()">Submit</button><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            success : "",
            user_name : "",
            contact_no: "",
            age: "",
            gender: "",
            user_email : "",
            user_password : "",
            confirm_password : "",
            error:"",
            departments:[],
            department:""
        }
    },

    async mounted(){
        const needed_data = await axios.get("/api/admin_dashboard")
        this.departments = needed_data.data.departments 
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async add_doctor(){
            this.error = ""

            if(this.user_name === "" || this.user_email === "" || this.user_password === "" || this.age === "" || this.gender === "" || this.confirm_password === "" || this.contact_no === "" || this.department === ""){
            this.error_msg("Please fill in all details")
            return
            }

            if(this.contact_no.length !==  10 || isNaN(this.contact_no)){
            this.error_msg("Enter a Valid Contact Number")
            return
            }

            if(this.age > 100 || this.age < 1 || isNaN(this.age)){
                this.error_msg("Enter a Valid Age")
                return
            }

            if(this.user_password !== this.confirm_password){
            this.error_msg("Confirm Password did not match")
            return
            }

            try{
                await axios.post("/api/add_doctor", {
                    user_name : this.user_name,
                    user_email : this.user_email,
                    contact_no : this.contact_no,
                    age : this.age,
                    gender : this.gender,
                    user_password : this.user_password,
                    department : this.department
                })
                this.$router.push({ path: "/admin_doctors", query: {success: "Doctor Added Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}

const edit_doctor = {
    template:`
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex; justify-content:center; align-items:center">
            <div class = "signup_box" style = "background-color: rgb(200,230,255); color: rgb(0,100,100); box-shadow: 0px 10px 40px rgb(0, 49, 70); border: 5px solid rgb(0, 51, 59);">
                <h1>
                    Edit Doctor
                </h1>
                <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                    \{\{ error }}
                </p>
                <div>
                    <div>
                        <input class = "signup_input" v-model = "user_name" placeholder="Full name" required/><br>
                        <input class = "signup_input" v-model = "contact_no" placeholder="Contact No" required/><br>
                        <div class = "signup_input" style = "font-size:110%; background-color: rgb(200,230,255); display:flex; justify-content:space-between; padding:0; margin:0">
                            <select style = "flex:3; width:100%;" v-model = "gender">
                                <option  disabled value = "">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input class = "signup_input" v-model.number = "age" type = "number" placeholder="Age" min = "1" style = "flex:2; width:100%" required/>
                        </div>
                        <select class = "signup_input" style = "font-size:90%; padding-bottom:2%; padding-top:2%" v-model = "department">
                            <option disabled value = "">Department</option>
                            <option v-for = "department in departments" :key = "department.id" :value = "department.id">\{\{department.name}}</option>
                        </select><br>
                        <input class = "signup_input" v-model = "user_email" placeholder="Email Address" required/><br>
                        <input class = "signup_input" v-model = "user_password" placeholder="Set a Password" required/><br>
                        <input class = "signup_input" v-model = "confirm_password" type = "password" placeholder="Confirm Password" required/><br>
                        <div class = "box" style = "display:flex; justify-content:space-between; margin-top:10%">
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:20%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "$router.push('/admin_doctors')">Back</button><br>
                            </div>
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:12%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "edit_doctor()">Submit</button><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            success : "",
            user_name : "",
            contact_no: "",
            age: "",
            gender: "",
            user_email : "",
            user_password : "",
            confirm_password : "",
            error:"",
            departments:[],
            department:""
        }
    },

    async mounted(){
        const id = this.$route.query.id
        const needed_data = await axios.get(`/api/edit_doctor/${id}`)
        this.user_name = needed_data.data.user_name
        this.user_email = needed_data.data.user_email
        this.contact_no = needed_data.data.contact_no
        this.age = needed_data.data.age
        this.gender = needed_data.data.gender
        this.user_password = needed_data.data.user_password
        this.department = needed_data.data.department
        
        const dept = await axios.get("/api/admin_dashboard")
        this.departments = dept.data.departments
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async edit_doctor(){
            this.error = ""

            if(this.user_name === "" || this.user_email === "" || this.user_password === "" || this.age === "" || this.gender === "" || this.confirm_password === "" || this.contact_no === "" || this.department === ""){
            this.error_msg("Please fill in all details")
            return
            }

            if(this.contact_no.length !==  10 || isNaN(this.contact_no)){
            this.error_msg("Enter a Valid Contact Number")
            return
            }

            if(this.age > 100 || this.age < 1 || isNaN(this.age)){
                this.error_msg("Enter a Valid Age")
                return
            }

            if(this.user_password !== this.confirm_password){
            this.error_msg("Confirm Password did not match")
            return
            }

            try{
                const id = this.$route.query.id
                await axios.post(`/api/edit_doctor/${id}`, {
                    user_name : this.user_name,
                    user_email : this.user_email,
                    contact_no : this.contact_no,
                    age : this.age,
                    gender : this.gender,
                    user_password : this.user_password,
                    department : this.department
                })
                this.$router.push({ path: "/admin_doctors", query: {success: "Doctor Updated Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}

const admin_departments = {
    template:`
    <div style = "font-family:lora; background-color: rgb(240, 249, 253); min-height:100vh">
        <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
            \{\{ error }}
        </p>
        <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
            \{\{ success }}
        </p>    
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}} 
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Departments</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Departments">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_department.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th style = "width:120px">Events</th>
                                </tr>
                                <tr v-for = "department in search_department" :key="department.id" style = "color:black">
                                    <td>\{\{department.id}}</td>
                                    <td>\{\{department.name}}</td>
                                    <td>\{\{department.description}} </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_department', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_department(department)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">🗑️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "$router.push({path:'/view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div class = "appointments_content">
                        <div>
                            All Departments ( \{\{departments.length}} )
                        </div>
                        <button @click = "$router.push('/add_department')" class = "logout admin_logout" style = "margin-right: 2%; color:white; background-color: rgb(0, 158, 232); font-size: 60%; padding:0.5%">
                            ╋ Add Department
                        </button>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th style = "width:15%">Events</th>
                        </tr>
                        <tr v-if = "departments.length !== 0"  v-for = "department in departments" :key = "department.id" style = "font-size:70%; color:black">
                            <td>\{\{department.id}}</td>
                            <td>\{\{department.name}}</td>
                            <td style = "white-space:normal">\{\{department.description}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_department', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✏️</p>
                                        <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                    </div>
                                    <div type = "button" class = "admin_logout" @click = "delete_department(department)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">🗑️</p>
                                        <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                    </div>
                                    <div type = "button" class = "admin_logout" @click = "$router.push({path:'/view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">👁</p>
                                        <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="4" style = "padding:2%"> No Departments Found </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Patients</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            error : "",
            success : "",
            show_menu:false,
            departments:[],
            user_name:"",
            user_email:"",
            search:"",
            search_department:[],
        }
    },

    async mounted(){
        this.load_page()
        const needed_data = await axios.get("/api/admin_dashboard")
        this.departments = needed_data.data.departments
        this.user_name = needed_data.data.user_name
        this.user_email = needed_data.data.user_email
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/admin_dashboard")
            this.departments = needed_data.data.departments
        },

        async delete_department(department){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_department",{
                    department_id: department.id 
                })
                this.load_page()
                this.departments = this.departments.filter(dept => dept.id !== department.id)
                this.search_department = this.search_department.filter(dept => dept.id !== department.id)
                this.success = "Department Deleted Successfully"
            }catch(err){
                this.error = err.response?.data?.error || "Something Went Wrong"
            }
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_department = []
                return;
            }

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
    
            this.search_department = result_department
            this.load_page()
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_department = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            
            this.search_department = result_department
            this.load_page()
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const add_department = {
    template:`
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex; justify-content:center; align-items:center">
            <div class = "signup_box" style = "background-color: rgb(200,230,255); color: rgb(0,100,100); box-shadow: 0px 10px 40px rgb(0, 49, 70); border: 5px solid rgb(0, 51, 59);">
                <h1>
                    Add Department
                </h1>
                <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                    \{\{ error }}
                </p>
                <div>
                    <div>
                        <input class = "signup_input" v-model = "department_name" placeholder="Name" required/><br>
                        <textarea class = "signup_input" style = "height:100px;" v-model = "description" placeholder="About the Department" required/></textarea><br>                            
                        <div class = "box" style = "display:flex; justify-content:space-between; margin-top:10%">
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:20%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "$router.push('/admin_departments')">Back</button><br>
                            </div>
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:12%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "add_department()">Submit</button><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            success: "",
            department_name: "",
            description:"",
            error:"",
        }
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async add_department(){
            this.error = ""

            if(this.department_name === "" || this.description === ""){
            this.error_msg("Please fill in all details")
            return
            }

            try{
                await axios.post("/api/add_department", {
                    department_name : this.department_name,
                    description : this.description,
                })
                this.$router.push({ path: "/admin_departments", query: {success: "Department Created Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}

const edit_department = {
    template:`
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex; justify-content:center; align-items:center">
            <div class = "signup_box" style = "background-color: rgb(200,230,255); color: rgb(0,100,100); box-shadow: 0px 10px 40px rgb(0, 49, 70); border: 5px solid rgb(0, 51, 59);">
                <h1>
                    Edit Department
                </h1>
                <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                    \{\{ error }}
                </p>
                <div>
                    <div>
                        <input class = "signup_input" v-model = "department_name" placeholder="Name" required/><br>
                        <textarea class = "signup_input" style = "height:100px;" v-model = "description" placeholder="About the Department" required/></textarea><br>                            
                        <div class = "box" style = "display:flex; justify-content:space-between; margin-top:10%">
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:20%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "$router.push('/admin_departments')">Back</button><br>
                            </div>
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:12%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "edit_department()">Submit</button><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            success: "",
            department_name: "",
            description:"",
            error:"",
        }
    },

    async mounted(){
        const id = this.$route.query.id
        const needed_data = await axios.get(`/api/edit_department/${id}`)
        this.department_name = needed_data.data.department_name
        this.description = needed_data.data.description
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async edit_department(){
            this.error = ""

            if(this.department_name === "" || this.description === ""){
            this.error_msg("Please fill in all details")
            return
            }

            try{
                const id = this.$route.query.id
                await axios.post(`/api/edit_department/${id}`, {
                    department_name : this.department_name,
                    description : this.description,
                })
                this.$router.push({ path: "/admin_departments", query: {success: "Department Updated Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}

const view_doctors = {
    template: `
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>    
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Department</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>\{\{doctor.id}}</td>
                                    <td>
                                        <div>
                                            \{\{doctor.name}} (Doctor)
                                            <p v-if = "doctor.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p>
                                        </div>
                                    </td>
                                    <td>\{\{doctor.contact_no}}</td>
                                    <td>\{\{doctor.email}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_doctor', query: { id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div class = "appointments_content">
                        <div>
                            \{\{department}} ( \{\{doctors.length}} )
                        </div>
                        <button @click = "$router.push('/add_doctor')" class = "logout admin_logout" style = "margin-right: 2%; color:white; background-color: rgb(0, 158, 232); font-size: 60%; padding:0.5%">
                            ╋ Add Doctor
                        </button>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th style = "width:15%">Events</th>
                        </tr>
                        <tr v-if = "doctors.length !== 0"  v-for = "doctor in doctors" :key = "doctor.id" style = "font-size:70%; color:black">
                            <td>\{\{doctor.id}}</td>
                            <td>\{\{doctor.name}}<br><p v-if = "doctor.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p></td>
                            <td>\{\{doctor.age}}</td>
                            <td>\{\{doctor.contact_no}}</td>
                            <td>\{\{doctor.email}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_doctor', query: { id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✏️</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                    </div>
                                    <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">⊘</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                    </div>
                                    <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✓</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                    </div>
                                    <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                    <p style = "font-size:80%; margin:0;">🗑️</p>
                                    <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="7" style = "padding:2%"> No Doctors Found </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Patients</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error : "",
            doctors : [],
            success : "",
            show_menu:false,
            user_email:"",
            user_name:"",
            department:"",
            search:"",
            search_doctor:[],
        }
    },

    async mounted(){
        this.load_page()
        const id = this.$route.query.id
        const needed_data = await axios.get(`/api/view_doctors/${id}`)
        this.doctors = needed_data.data.doctors
        this.department = needed_data.data.department
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
        try{
            const needed_data = await axios.get("/api/admin_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
        }catch(err){
            this.error = "Something Went Wrong"
        }
    },

    methods: {
        async load_page(){
            const id = this.$route.query.id
            const needed_data = await axios.get(`/api/view_doctors/${id}`)
            this.doctors = needed_data.data.doctors
        },

        async blacklist(doctor){
            try{
                await axios.post("/api/blacklist",{
                    user_id: doctor.id,
                    blacklist: doctor.blacklist
                })
                doctor.blacklist = !doctor.blacklist
            }catch(err){
                this.error = "Something Went Wrong"
            }
        }, 

        async delete_doctor(doctor){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{ user_id: doctor.id })
                this.load_page()
                this.doctors = this.doctors.filter(doc => doc.id !== doctor.id)
                this.search_doctor = this.search_doctor.filter(doc => doc.id !== doctor.id)
                this.success = "Doctor Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.load_page()
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            
            this.search_doctor = result_doctor
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const admin_patients = {
    template:`
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>    
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Patients</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Patients">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_patient.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "patient in search_patient" :key = "patient.id" style = "color:black">
                                    <td>\{\{patient.id}}</td>
                                    <td>
                                        <div>
                                            \{\{patient.name}}
                                            <p v-if = "patient.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p>
                                        </div>
                                    </td>
                                    <td>\{\{patient.contact_no}}</td>
                                    <td>\{\{patient.email}}</td>
                                    <td>\{\{patient.gender}}</td>
                                    <td>\{\{patient.age}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_patient', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "patient.blacklist === false" @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_patient(patient)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div class = "appointments_content">
                        <div>
                            All Patients ( \{\{patients.length}} )
                        </div>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Events</th>
                        </tr>
                        <tr v-if = "patients.length !== 0"  v-for = "patient in patients" :key = "patient.id" style = "font-size:70%; color:black">
                            <td>\{\{patient.id}}</td>
                            <td>\{\{patient.name}}<br><p v-if = "patient.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p></td>
                            <td>\{\{patient.age}}</td>
                            <td>\{\{patient.contact_no}}</td>
                            <td>\{\{patient.email}}</td>
                            <td>\{\{patient.gender}}</td>
                            <td>\{\{patient.age}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_patient', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✏️</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                    </div>
                                    <div v-if = "patient.blacklist === false" @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">⊘</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                    </div>
                                    <div v-else @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✓</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                    </div>
                                    <div type = "button" class = "admin_logout" @click = "delete_patient(patient)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                    <p style = "font-size:80%; margin:0;">🗑️</p>
                                    <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="8" style = "padding:2%"> No Patients Found </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_Doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error : "",
            patients : [],
            success : "",
            show_menu:false,
            user_email:"",
            user_name:"",
            search:"",
            search_patient:[],
        }
    },

    async mounted(){
        this.load_page()
        const needed_data = await axios.get("/api/admin_dashboard")
        this.patients = needed_data.data.patients
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
        try{
            const needed_data = await axios.get("/api/admin_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
        }catch(err){
            this.error = "Something Went Wrong-loading"
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/admin_dashboard")
            this.patients = needed_data.data.patients
        },

        async blacklist(patient){
            try{
                await axios.post("/api/blacklist",{
                    user_id: patient.id,
                    blacklist: patient.blacklist
                })
                patient.blacklist = !patient.blacklist
            }catch(err){
                this.error = "Something Went Wrong-blacklist"
            }
        }, 

        async delete_patient(patient){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: patient.id 
                })
                this.load_page()
                this.patients = this.patients.filter(doc => doc.id !== patient.id)
                this.search_patient = this.search_patient.filter(doc => doc.id !== patient.id)
                this.success = "Patient Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                return;
            }

            const result_patient = this.patients.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            this.search_patient = result_patient
            this.load_page()
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_patient = this.patients.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            
            this.search_patient = result_patient
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

    const edit_patient = {
    template:`
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex; justify-content:center; align-items:center">
            <div class = "signup_box" style = "background-color: rgb(200,230,255); color: rgb(0,100,100); box-shadow: 0px 10px 40px rgb(0, 49, 70); border: 5px solid rgb(0, 51, 59);">
                <h1>
                    Edit Patient
                </h1>
                <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                    \{\{ error }}
                </p>
                <div>
                    <div>
                        <input class = "signup_input" v-model = "user_name" placeholder="Full name" required/><br>
                        <input class = "signup_input" v-model = "contact_no" placeholder="Contact No" required/><br>
                        <div class = "signup_input" style = "font-size:110%; background-color: rgb(200,230,255); display:flex; justify-content:space-between; padding:0; margin:0">
                            <select style = "flex:3; width:100%;" v-model = "gender">
                                <option  disabled value = "">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input class = "signup_input" v-model.number = "age" type = "number" placeholder="Age" min = "1" style = "flex:2; width:100%" required/>
                        </div>
                        <input class = "signup_input" v-model = "user_email" placeholder="Email Address" required/><br>
                        <input class = "signup_input" v-model = "user_password" placeholder="Set a Password" required/><br>
                        <input class = "signup_input" v-model = "confirm_password" type = "password" placeholder="Confirm Password" required/><br>
                        <div class = "box" style = "display:flex; justify-content:space-between; margin-top:10%">
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:20%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "$router.push('/admin_patients')">Back</button><br>
                            </div>
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout admin_logout" style= "font-size:95%; padding:12%; width:fit-content; background-color: rgb(0, 158, 232); color: rgb(255,255,255)" type = "button" @click = "edit_doctor()">Submit</button><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            success : "",
            user_name : "",
            contact_no: "",
            age: "",
            gender: "",
            user_email : "",
            user_password : "",
            confirm_password : "",
            error:"",
            department:""
        }
    },

    async mounted(){
        const id = this.$route.query.id
        const needed_data = await axios.get(`/api/edit_doctor/${id}`)
        this.user_name = needed_data.data.user_name
        this.user_email = needed_data.data.user_email
        this.contact_no = needed_data.data.contact_no
        this.age = needed_data.data.age
        this.gender = needed_data.data.gender
        this.user_password = needed_data.data.user_password
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async edit_doctor(){
            this.error = ""

            if(this.user_name === "" || this.user_email === "" || this.user_password === "" || this.age === "" || this.gender === "" || this.confirm_password === "" || this.contact_no === "" ){
            this.error_msg("Please fill in all details")
            return
            }

            if(this.contact_no.length !==  10 || isNaN(this.contact_no)){
            this.error_msg("Enter a Valid Contact Number")
            return
            }

            if(this.age > 100 || this.age < 1 || isNaN(this.age)){
                this.error_msg("Enter a Valid Age")
                return
            }

            if(this.user_password !== this.confirm_password){
            this.error_msg("Confirm Password did not match")
            return
            }

            try{
                const id = this.$route.query.id
                await axios.post(`/api/edit_doctor/${id}`, {
                    user_name : this.user_name,
                    user_email : this.user_email,
                    contact_no : this.contact_no,
                    age : this.age,
                    gender : this.gender,
                    user_password : this.user_password,
                    department : this.department
                })
                this.$router.push({ path: "/admin_patients", query: {success: "Patient Updated Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}

const admin_appointments = {
    template: `
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Appointments</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors, Patients, Departments">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 && search_patient.length === 0 && search_department.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>
                                        <div>
                                            \{\{doctor.name}} (Doctor)
                                            <p v-if = "doctor.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p>
                                        </div>
                                    </td>
                                    <td>\{\{doctor.contact_no}}</td>
                                    <td>\{\{doctor.email}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_doctor', query: { id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "patient in search_patient" :key="patient.id" style = "color:black">
                                    <td>\{\{patient.name}} (Patient)<br><p v-if = "patient.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p></td>
                                    <td>\{\{patient.contact_no}}</td>
                                    <td>\{\{patient.email}}</td>
                                    <td>  </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_patient', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "patient.blacklist === false" @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_patient(patient)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "department in search_department" :key="department.id" style = "color:black">
                                    <td>\{\{department.name}}<br>(Department) </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_department', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_department(department)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">🗑️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "$router.push({path:'/view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div style = "text-align:center">   
                        <button class ="logout admin_logout" @click = "$router.push('/admin_previous_appointments')" type = "button" style = "width:60%; padding:1%; margin:1%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Previous Appointments</button>    
                    </div>
                    <div class = "appointments_content">
                        <div>
                            Upcoming Appointments
                        </div>
                        <div style = "margin-right: 5%">
                            \{\{upcoming_appointments.length}}
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Department</th>
                            <th>time</th>
                            <th>status</th>
                        </tr>
                        <tr v-if="upcoming_appointments.length !== 0" v-for="appointment in upcoming_appointments" :key = "appointment.id"  :style = "{color: appointment.status !== 'Booked' ? 'red' : 'black'}">
                            <td>\{\{appointment.id}}</td>
                            <td>\{\{appointment.patient_name}}</td>
                            <td>\{\{appointment.doctor_name}}</td>
                            <td>\{\{appointment.department}}</td>
                            <td>\{\{appointment.time}} / \{\{appointment.date}}</td>
                            <td>\{\{appointment.status}}</td>
                        </tr>
                        <tr v-else style = "color:red;">
                            <td colspan="6" style = "padding:2%"> No Upcoming Appointments </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Patients</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button>
            </div>
        </div>

    </div>`,

    data(){
        return{
            error: "",
            success:"",
            user_name: "",
            user_email:"",
            show_menu: false,
            blacklist_count:"",
            previous_appointments: [], 
            upcoming_appointments: [], 
            todays_appointments: [], 
            doctors: [], 
            patients: [], 
            departments: [],
            search:"",
            search_doctor:[],
            search_patient:[],
            search_department:[],
        }
    },

    async mounted(){
        try{
            this.load_page()
            const needed_data = await axios.get("/api/admin_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.previous_appointments = needed_data.data.previous_appointments 
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.doctors = needed_data.data.doctors          
            this.patients = needed_data.data.patients
            this.blacklist_count = needed_data.data.blacklist_count
            this.departments = needed_data.data.departments
            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/admin_dashboard")
            this.previous_appointments = needed_data.data.previous_appointments 
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.doctors = needed_data.data.doctors          
            this.patients = needed_data.data.patients
            this.blacklist_count = needed_data.data.blacklist_count
            this.departments = needed_data.data.departments
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_patient = []
                this.search_department = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_patient = result_patient
            this.search_department = result_department
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_patient = []
                this.search_department = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_patient = result_patient
            this.search_department = result_department
            this.load_page()
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },

        async blacklist(doctor){
            try{
                await axios.post("/api/blacklist",{
                    user_id: doctor.id,
                    blacklist: doctor.blacklist
                })
                doctor.blacklist = !doctor.blacklist
            }catch(err){
                this.error = "Something Went Wrong"
            }
        }, 

        async delete_doctor(doctor){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: doctor.id 
                })
                this.load_page()
                this.doctors = this.doctors.filter(doc => doc.id !== doctor.id)
                this.search_doctor = this.search_doctor.filter(doc => doc.id !== doctor.id)
                this.success = "Doctor Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async delete_patient(patient){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: patient.id 
                })
                this.load_page()
                this.patients = this.patients.filter(pat => pat.id !== patient.id)
                this.search_patient = this.search_patient.filter(pat => pat.id !== patient.id)
                this.success = "Patient Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async delete_department(department){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_department",{
                    department_id: department.id 
                })
                this.load_page()
                this.departments = this.departments.filter(dept => dept.id !== department.id)
                this.search_department = this.search_department.filter(dept => dept.id !== department.id)
                this.success = "Department Deleted Successfully"
            }catch(err){
                this.error = err.response?.data?.error || "Something Went Wrong"
            }
        },
    }
}

const admin_previous_appointments = {
    template: `
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Appointments</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors, Patients, Departments">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 && search_patient.length === 0 && search_department.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>
                                        <div>
                                            \{\{doctor.name}} (Doctor)
                                            <p v-if = "doctor.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p>
                                        </div>
                                    </td>
                                    <td>\{\{doctor.contact_no}}</td>
                                    <td>\{\{doctor.email}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_doctor', query: { id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "patient in search_patient" :key="patient.id" style = "color:black">
                                    <td>\{\{patient.name}} (Patient)<br><p v-if = "patient.blacklist === true" style = "color:red; margin:0; font-size:60%">blacklisted</p></td>
                                    <td>\{\{patient.contact_no}}</td>
                                    <td>\{\{patient.email}}</td>
                                    <td>  </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_patient', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div v-if = "patient.blacklist === false" @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_patient(patient)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "department in search_department" :key="department.id" style = "color:black">
                                    <td>\{\{department.name}}<br>(Department) </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_department', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✏️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_department(department)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">🗑️</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "$router.push({path:'/view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div class = "appointments_content">
                        <div>
                            Previous Appointments
                        </div>
                        <div style = "margin-right: 5%">
                            \{\{previous_appointments.length}}
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Department</th>
                            <th>time</th>
                            <th>status</th>
                        </tr>
                        <tr v-if="previous_appointments.length !== 0" v-for="appointment in previous_appointments" :key = "appointment.id"  :style = "{color: appointment.status !== 'Booked' ? 'red' : 'black'}">
                            <td>\{\{appointment.id}}</td>
                            <td>\{\{appointment.patient_name}}</td>
                            <td>\{\{appointment.doctor_name}}</td>
                            <td>\{\{appointment.department}}</td>
                            <td>\{\{appointment.time}} / \{\{appointment.date}}</td>
                            <td>\{\{appointment.status}}</td>
                        </tr>
                        <tr v-else style = "color:red;">
                            <td colspan="6" style = "padding:2%"> No Previous Appointments </td>
                        </tr>
                    </table>
                    <div style = "text-align:center">   
                        <button class ="logout admin_logout" @click = "$router.push('/admin_appointments')" type = "button" style = "width:60%; padding:1%; margin:3%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Back</button>    
                    </div>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Patients</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_blacklists')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Blacklists</button>
            </div>
        </div>

    </div>`,

    data(){
        return{
            error: "",
            success:"",
            user_name: "",
            user_email:"",
            show_menu: false,
            blacklist_count:"",
            previous_appointments: [], 
            upcoming_appointments: [], 
            todays_appointments: [], 
            doctors: [], 
            patients: [], 
            departments: [],
            search:"",
            search_doctor:[],
            search_patient:[],
            search_department:[],
        }
    },

    async mounted(){
        try{
            this.load_page()
            const needed_data = await axios.get("/api/admin_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.previous_appointments = needed_data.data.previous_appointments 
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.doctors = needed_data.data.doctors          
            this.patients = needed_data.data.patients
            this.blacklist_count = needed_data.data.blacklist_count
            this.departments = needed_data.data.departments
            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/admin_dashboard")
            this.previous_appointments = needed_data.data.previous_appointments 
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.doctors = needed_data.data.doctors          
            this.patients = needed_data.data.patients
            this.blacklist_count = needed_data.data.blacklist_count
            this.departments = needed_data.data.departments
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_patient = []
                this.search_department = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_patient = result_patient
            this.search_department = result_department
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_patient = []
                this.search_department = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_patient = result_patient
            this.search_department = result_department
            this.load_page()
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },

        async blacklist(doctor){
            try{
                await axios.post("/api/blacklist",{
                    user_id: doctor.id,
                    blacklist: doctor.blacklist
                })
                doctor.blacklist = !doctor.blacklist
            }catch(err){
                this.error = "Something Went Wrong"
            }
        }, 

        async delete_doctor(doctor){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: doctor.id 
                })
                this.load_page()
                this.doctors = this.doctors.filter(doc => doc.id !== doctor.id)
                this.search_doctor = this.search_doctor.filter(doc => doc.id !== doctor.id)
                this.success = "Doctor Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async delete_patient(patient){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{
                    user_id: patient.id 
                })
                this.load_page()
                this.patients = this.patients.filter(pat => pat.id !== patient.id)
                this.search_patient = this.search_patient.filter(pat => pat.id !== patient.id)
                this.success = "Patient Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async delete_department(department){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_department",{
                    department_id: department.id 
                })
                this.load_page()
                this.departments = this.departments.filter(dept => dept.id !== department.id)
                this.search_department = this.search_department.filter(dept => dept.id !== department.id)
                this.success = "Department Deleted Successfully"
            }catch(err){
                this.error = err.response?.data?.error || "Something Went Wrong"
            }
        },
    }
}

const admin_blacklists = {
    template:`
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>    
    <div style = "min-height: 100vh; background-color: rgb(240, 249, 253);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png"><br>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                    <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Blacklists</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors or Patients">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(200,230,255); color: rgb(0,100,100)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_patient.length === 0 && search_doctor.length === 0" style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "patient in search_patient" :key = "patient.id" style = "color:black">
                                    <td>\{\{patient.id}}</td>
                                    <td>
                                        <div>
                                            \{\{patient.name}} (Patient)
                                        </div>
                                    </td>
                                    <td>\{\{patient.contact_no}}</td>
                                    <td>\{\{patient.email}}</td>
                                    <td>\{\{patient.gender}}</td>
                                    <td>\{\{patient.age}}</td>
                                    <td>  </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div v-if = "patient.blacklist === false" @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_patient(patient)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>\{\{doctor.id}}</td>
                                    <td>
                                        <div>
                                            \{\{doctor.name}} (Doctor)
                                        </div>
                                    </td>
                                    <td>\{\{doctor.contact_no}}</td>
                                    <td>\{\{doctor.email}}</td>
                                    <td>\{\{doctor.gender}}</td>
                                    <td>\{\{doctor.age}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">⊘</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                            </div>
                                            <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                                <p style = "font-size:80%; margin:0;">✓</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                            </div>
                                            <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                            <p style = "font-size:80%; margin:0;">🗑️</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color:rgb(0, 158, 232)">
                    <div class = "appointments_content">
                        <div>
                            All Blacklists
                        </div>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color:rgb(200,230,255); color:rgb(0,100,100);">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Events</th>
                        </tr>
                        <tr v-if = "patients.length !== 0" v-for = "patient in patients" :key = "patient.id" style = "font-size:70%; color:black">
                            <td>\{\{patient.id}}</td>
                            <td>\{\{patient.name}} (Patient)</td>
                            <td>\{\{patient.contact_no}}</td>
                            <td>\{\{patient.email}}</td>
                            <td>\{\{patient.gender}}</td>
                            <td>\{\{patient.age}}</td>
                            <td>  </td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/edit_patient', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✏️</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Edit</p>
                                    </div>
                                    <div v-if = "patient.blacklist === false" @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">⊘</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                    </div>
                                    <div v-else @click = "blacklist(patient)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✓</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                    </div>
                                    <div type = "button" class = "admin_logout" @click = "delete_patient(patient)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                    <p style = "font-size:80%; margin:0;">🗑️</p>
                                    <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="doctors.length !== 0" v-for = "doctor in doctors" :key = "doctor.id" style = "font-size:70%; color:black">
                            <td>\{\{doctor.id}}</td>
                            <td>\{\{doctor.name}} (Doctor)</td>
                            <td>\{\{doctor.contact_no}}</td>
                            <td>\{\{doctor.email}}</td>
                            <td>\{\{doctor.gender}}</td>
                            <td>\{\{doctor.age}}</td>
                            <td>\{\{doctor.doctor_department}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div v-if = "doctor.blacklist === false" @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">⊘</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Blacklist</p>
                                    </div>
                                    <div v-else @click = "blacklist(doctor)" type = "button" class = "admin_logout" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                        <p style = "font-size:80%; margin:0;">✓</p>
                                        <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Allowlist</p>
                                    </div>
                                    <div type = "button" class = "admin_logout" @click = "delete_doctor(doctor)" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(200,230,255);">
                                    <p style = "font-size:80%; margin:0;">🗑️</p>
                                    <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Delete</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="doctors.length === 0 && patients.length === 0" style = "color:red; text-align:center; font-size:120%">
                            <td colspan="8" style = "padding:2%"> Nobody is Blacklisted </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/admin_logo.png">
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout admin_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(200,230,255); color: rgb(0,100,100)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout admin_logout" @click = "$router.push('/admin_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_Doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_patients')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Patients</button><br>
                <button class = "logout admin_logout" @click = "$router.push('/admin_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout admin_logout" @click = "$router.push('/admin_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Appointments</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error : "",
            doctors : [],
            patients : [],
            success : "",
            show_menu:false,
            user_email:"",
            user_name:"",
            search:"",
            search_patient:[],
            search_doctor: []
        }
    },

    async mounted(){
        this.load_page()
        const needed_data = await axios.get("/api/admin_dashboard")
        this.patients = needed_data.data.blacklist_patients
        this.doctors = needed_data.data.blacklist_doctors

        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
        try{
            const needed_data = await axios.get("/api/admin_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
        }catch(err){
            this.error = "Something Went Wrong-loading"
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/admin_dashboard")
            this.patients = needed_data.data.blacklist_patients
            this.doctors = needed_data.data.blacklist_doctors
        },

        async blacklist(patient){
            try{
                await axios.post("/api/blacklist",{
                    user_id: patient.id,
                    blacklist: patient.blacklist
                })
                patient.blacklist = !patient.blacklist
                this.patients = this.patients.filter(pat => pat.id !== patient.id)
                this.search_patient = this.search_patient.filter(pat => pat.id !== patient.id)
            }catch(err){
                this.error = "Something Went Wrong-blacklist"
            }
        }, 

        async blacklist(doctor){
            try{
                await axios.post("/api/blacklist",{
                    user_id: doctor.id,
                    blacklist: doctor.blacklist
                })
                doctor.blacklist = !doctor.blacklist
                this.doctors = this.doctors.filter(doc => doc.id !== doctor.id)
                this.search_doctor = this.search_doctor.filter(doc => doc.id !== doctor.id)
            }catch(err){
                this.error = "Something Went Wrong-blacklist"
            }
        }, 

        async delete_patient(patient){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{ user_id: patient.id })
                this.load_page()
                this.patients = this.patients.filter(pat => pat.id !== patient.id)
                this.search_patient = this.search_patient.filter(pat => pat.id !== patient.id)
                this.success = "Patient Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async delete_doctor(doctor){
            try{
                this.success = ""
                this.error = ""
                await axios.post("/api/delete_doctor",{user_id: doctor.id })
                this.load_page()
                this.doctors = this.doctors.filter(doc => doc.id !== doctor.id)
                this.search_doctor = this.search_doctor.filter(doc => doc.id !== doctor.id)
                this.success = "Doctor Deleted Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                this.search_doctor = []
                return;
            }

            const result_patient = this.patients.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            this.search_doctor = result_doctor
            this.search_patient = result_patient
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                this.search_doctor = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_patient = this.patients.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            
            this.search_doctor = result_doctor
            this.search_patient = result_patient
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}


const doctor_dashboard = {
    template: `
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(253, 240, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{ user_email }} </p>
                    <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_upcoming_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Upcoming Appointments</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu doctor_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Home</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Patients">
                        <button type = "button" class = "logout doctor_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_patient.length === 0" style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color: rgb(255, 200, 200); color: rgb(100, 0, 0);">
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>History</th>
                                </tr>
                                <tr v-for = "patient in search_patient" :key="patient.id" style = "color:black">
                                    <td>\{\{patient.name}}</td>
                                    <td>\{\{patient.age}}</td>
                                    <td>\{\{patient.gender}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "doctor_logout" @click = "$router.push({path:'/doctor_view_history', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(255, 200, 200);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div style = "display:flex; flex-wrap:wrap; margin:3%; gap:1%; width:95%; justify-content:center; color: rgb(143, 3, 3);">
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{ treatments.length }} </p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Patients</p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Treated</p>
                            </div>
                            <img style = "padding:4px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/patient.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{slots}} </p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Slots</p>
                                <p style="margin-bottom:0; color:black; font-size:40%">Next 7 Days</p>
                            </div>
                            <img style = "padding:5px; width:35%; background-color:rgb(0,0,0,0.2)" src = "/static/slots.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{missed}} </p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Missed Appointments</p>
                            </div>
                            <img style = "padding:3px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/appointments.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{cancelled}} </p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Cancelled Appointments</p>
                            </div>
                            <img style = "padding:4px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/cancelled_appointments.png">
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(143, 3, 3)">
                    <div class = "appointments_content">
                        <div>
                            Todays Appointments
                        </div>
                        <div style = "margin-right: 5%">
                            \{\{todays_appointments.length}}
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color: rgb(255, 200, 200); color: rgb(100, 0, 0);">
                            <th>Patient</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>History</th>
                            <th>Treatment</th>
                        </tr>
                        <tr v-if="todays_appointments.length !== 0" v-for="appointment in todays_appointments" :key = "appointment.id" style = "font-size:70%;" :style = "{color: appointment.status !== 'Booked' ? 'red' : 'black'}">
                            <td>\{\{appointment.patient_name}}</td>
                            <td>\{\{appointment.patient_age}}</td>
                            <td>\{\{appointment.patient_gender}}</td>
                            <td>\{\{appointment.time}} / \{\{appointment.date}}</td>
                            <td>\{\{appointment.status}}</td>
                            <td>
                                <button v-if = "appointment.status === 'Booked'" @click = "cancel(appointment)" class = "doctor_logout" style="border-radius:50px; font-size:150%; border:0;">🚫<p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Cancel</p></button>
                            </td>
                            <td>
                                <button @click = "$router.push({path:'/doctor_view_history', query: { id: appointment.patient_id} })" class = "doctor_logout" style="border-radius:50px; font-size:150%; border:0;">👁</button>
                            </td>
                            <td>
                                <button v-if = "appointment.status === 'Booked'" @click = "$router.push({path:'/attend_patient', query: { patient_id: appointment.patient_id, date: appointment.date, appointment_id: appointment.id} })" class = "doctor_logout" style="border-radius:50px; font-size:150%; border:0;">🩺<p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Attend</p></button>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="8" style = "padding:2%"> No Appointments Today </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "doctor_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_upcoming_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Upcoming Appointments</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
            </div>
        </div>

    </div>`,

    data(){
        return{
            error: "",
            user_name: "",
            user_email:"",
            gender:"",
            slots:0,
            show_menu: false,
            cancelled: 0,
            missed:0,
            upcoming_appointments: [], 
            todays_appointments: [], 
            patients: [], 
            treatments: [],
            search:"",
            search_patient:[],
        }
    },

    async mounted(){
        try{
            this.load_page()
            
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.patients = needed_data.data.patients
            this.slots = needed_data.data.slots
            this.cancelled = needed_data.data.cancelled_appointments 
            this.missed = needed_data.data.missed_appointments
            this.treatments = needed_data.data.treatments
            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.todays_appointments = needed_data.data.todays_appointments 
            this.patients = needed_data.data.patients
            
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                return;
            }

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            this.search_patient = result_patient
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            this.search_patient = result_patient
            return
        },

        async cancel(appointment){
            try{
                await axios.post("/api/doctor_cancel",{ id: appointment.id })
                this.load_page()
                this.success = "Appointment Cancelled Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const doctor_upcoming_appointments = {
    template:`
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(253, 240, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{ user_email }} </p>
                    <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu doctor_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Upcoming Appointments</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Patients">
                        <button type = "button" class = "logout doctor_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_patient.length === 0" style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color: rgb(255, 200, 200); color: rgb(100, 0, 0);">
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>History</th>
                                </tr>
                                <tr v-for = "patient in search_patient" :key="patient.id" style = "color:black">
                                    <td>\{\{patient.name}}</td>
                                    <td>\{\{patient.age}}</td>
                                    <td>\{\{patient.gender}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "doctor_logout" @click = "$router.push({path:'/doctor_view_history', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(255, 200, 200);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(143, 3, 3)">
                    <table class = "appointment_table">
                        <tr style = "background-color: rgb(255, 200, 200); color: rgb(100, 0, 0);">
                            <th>Patient</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>History</th>
                        </tr>
                        <tr v-if="upcoming_appointments.length !== 0" v-for="appointment in upcoming_appointments" :key = "appointment.id" style = "font-size:70%;">
                            <td>\{\{appointment.patient_name}}</td>
                            <td>\{\{appointment.patient_age}}</td>
                            <td>\{\{appointment.patient_gender}}</td>
                            <td>\{\{appointment.time}}</td>
                            <td>\{\{appointment.date}}</td>
                            <td>\{\{appointment.status}}</td>
                            <td>
                                <button v-if = "appointment.status === 'Booked'" @click = "cancel(appointment)" class = "doctor_logout" style="border-radius:50px; font-size:150%; border:0;">🚫<p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Cancel</p></button>
                            </td>
                            <td>
                                <button @click = "$router.push({path:'/doctor_view_history', query: { id: appointment.patient_id} })" class = "doctor_logout" style="border-radius:50px; font-size:150%; border:0;">👁</button>
                            </td>
                            <td>
                                <button v-if = "appointment.status === 'Booked'" @click = "$router.push({path:'/attend_patient', query: { patient_id: appointment.patient_id, date: appointment.date, appointment_id: appointment.id} })" class = "doctor_logout" style="border-radius:50px; font-size:150%; border:0;">🩺<p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%;">Attend</p></button>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="8" style = "padding:2%"> No Appointments Found </td>
                        </tr>
                    </table>
                    <div style = "text-align:center">   
                        <button class ="logout doctor_logout" @click = "$router.push('/doctor_dashboard')" type = "button" style = "width:20%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Back</button>    
                    </div>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "doctor_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error: "",
            user_name: "",
            user_email:"",
            gender:"",
            upcoming_appointments:[],
            search:"",
            search_patient:[],
            patients: [], 
            show_menu: false,
        }
    },

    async mounted(){
        try{
            const id = this.$route.query.id
            this.load_page()
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.upcoming_appointments = needed_data.data.upcoming_appointments
            this.patients = needed_data.data.patients

            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.upcoming_appointments = needed_data.data.upcoming_appointments
            this.patients = needed_data.data.patients

        },

        
        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                return;
            }

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            this.search_patient = result_patient
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            this.search_patient = result_patient
            return
        },

        async cancel(appointment){
            try{
                await axios.post("/api/doctor_cancel",{ id: appointment.id })
                this.load_page()
                this.success = "Appointment Cancelled Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const doctor_treatments = {
    template:`
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(253, 240, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{ user_email }} </p>
                    <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu doctor_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Treatments</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Patients">
                        <button type = "button" class = "logout doctor_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_patient.length === 0" style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color: rgb(255, 200, 200); color: rgb(100, 0, 0);">
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>History</th>
                                </tr>
                                <tr v-for = "patient in search_patient" :key="patient.id" style = "color:black">
                                    <td>\{\{patient.name}}</td>
                                    <td>\{\{patient.age}}</td>
                                    <td>\{\{patient.gender}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "doctor_logout" @click = "$router.push({path:'/doctor_view_history', query: { id: patient.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(255, 200, 200);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(143, 3, 3)">
                    <div class = "appointments_content">
                        <div>
                            Treatments 
                        </div>
                        <div style = "margin-right: 5%">
                            \{\{treatments.length}}
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color: rgb(255, 200, 200); color: rgb(100, 0, 0);">
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Diagnosis</th>
                            <th>Prescription</th>
                            <th>Next Visit</th>
                        </tr>
                        <tr v-if="treatments.length !== 0" v-for="treatment in treatments" :key = "treatment.id" style = "font-size:70%;">
                            <td>\{\{treatment.patient_name}}</td>
                            <td>\{\{treatment.date}}</td>
                            <td>\{\{treatment.diagnosis}}</td>
                            <td>
                                <div v-for="(med,i) in treatment.prescription" :key="i">
                                    <template v-if="med && med.name">
                                        \{\{ med.name }}
                                        <span v-if="med.breakfast">
                                            - Morning (\{\{ med.breakfast_quantity || 0 }})
                                        </span>
                                        <span v-if="med.lunch">
                                            - Afternoon (\{\{ med.lunch_quantity || 0 }})
                                        </span>
                                        <span v-if="med.dinner">
                                            - Night (\{\{ med.dinner_quantity || 0 }})
                                        </span>
                                    </template>
                                </div>
                            </td>
                            <td>\{\{treatment.next_visit}}</td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="7" style = "padding:2%"> No Treatments Found </td>
                        </tr>
                    </table>
                    <div style = "text-align:center">   
                        <button class ="logout doctor_logout" @click = "$router.push('/doctor_dashboard')" type = "button" style = "width:20%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Back</button>    
                    </div>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "doctor_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error: "",
            user_name: "",
            user_email:"",
            gender:"",
            treatments:[],
            search:"",
            search_patient:[],
            patients: [], 
            show_menu: false,
        }
    },

    async mounted(){
        try{
            const id = this.$route.query.id
            this.load_page()
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.treatments = needed_data.data.treatments
            this.patients = needed_data.data.patients

            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.treatments = needed_data.data.treatments
            this.patients = needed_data.data.patients

        },

        
        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                return;
            }

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            this.search_patient = result_patient
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_patient = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_patient = this.patients.filter(pat =>
                pat.name.toLowerCase().startsWith(search)
            )

            this.search_patient = result_patient
            return
        },

        async cancel(appointment){
            try{
                await axios.post("/api/doctor_cancel",{ id: appointment.id })
                this.load_page()
                this.success = "Appointment Cancelled Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const doctor_provide_availability = {
    template: `
    <div>
        <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
            \{\{ error }}
        </p>
        <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
            \{\{ success }}
        </p>  
        <div style = "min-height: 100vh; background-color: rgb(253, 240, 240);">
            <div style = "display:flex">
                <div class="side_bar">
                    <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                        <div v-if="gender === 'Male'">
                            <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                        </div>
                        <div v-if="gender === 'Female'">
                            <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                        </div>
                        \{\{user_name}}
                        <p style = "font-weight:normal; font-size:55%"> \{\{ user_email }} </p>
                        <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>
                    </div>
                    <div class = "side_bar_options">
                        <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                        <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                        <button class = "logout doctor_logout" @click = "$router.push('/doctor_upcoming_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Upcoming Appointments</button><br>
                    </div>
                </div>
                <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                    <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                        <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                            <button class="side_menu doctor_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                            <p style = "width:200px; margin:0; font-size: 180%; font-weight:bold; ">Provide Availability</p>
                        </div>
                    </div>
                    <div class = "appointments" style = "color: rgb(143, 3, 3)">
                        <div style = "display:flex; justify-content:center; align-items:center; flex-direction:column;">
                            <div style = "margin-bottom:3%; border-bottom:1px solid rgb(0,0,0,0.5); width:100%; display:flex; justify-content:center; flex-direction:column; align-items:center" >
                                <p style = "margin-bottom:0;">Provide Availability for the Next 7 Days</p>
                                <p style = "margin-bottom:1%; font-size:60%; color:black">You can Edit Them Later</p>
                            </div>
                            <div style="display:flex; gap:20px; width:80%; align-items:center; flex-wrap:wrap; justify-content:center">
                                <div v-for="day in days" :key="day.date" style="display:flex; flex-wrap:wrap; flex-direction:column; border:2px solid rgb(0,0,0); padding:10px; border-radius:10px;">
                                    <div style="font-weight:bold; margin-bottom:10px; border-bottom:1px solid rgb(0,0,0,0.5); font-size:68%; display:flex; justify-content:center; flex-direction:column; align-items:center">
                                        <p style = "margin:0">\{\{ day.display }}</p>
                                        <button @click = "select_all(day.date)" style = "padding:5px;font-size:70%; border-radius:10px;width:90%; margin:2%;" :style="{background: availability[day.date]?.length ? 'rgb(0,0,0,0.1)' : 'rgb(27, 200, 0)', color: availability[day.date]?.length ? 'rgb(0,0,0)' : 'rgb(255,255,255)' }">
                                            \{\{ availability[day.date]?.length ? "Clear All" : "Select All" }}
                                        </button>
                                    </div>
                                    <div style="display:flex;flex-direction:column; gap:10px;font-size:70%">
                                        <button v-for="slot in slots" :key="slot" @click="select_slot(day.date, slot)" :style="{padding:'8px', borderRadius:'5px', background: booked(day.date, slot) || selected(day.date, slot) ? 'rgb(0,0,0,0.2)' : 'white', border: booked(day.date, slot) ? '3px solid red' : (selected(day.date, slot) ? '3px solid rgb(10, 202, 0)' : '1px solid black'), cursor: booked(day.date, slot) ? 'not-allowed':'pointer' }">
                                            \{\{ slot }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style = "text-align:center">   
                            <button class ="logout doctor_logout" @click = "provide_availability()" type = "button" style = " padding:2%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Confirm</button>    
                        </div>
                    </div>
                </div>
            </div>
            <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
            <div class="mobile_menu" :class="{ show: show_menu }">
                <div style = "text-align:right; margin-right:5%; margin-top:5%">
                    <button @click="show_menu = false" class = "doctor_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
                </div>
                <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                    <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                    <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                    <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                        \{\{user_name}}
                        <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                    </div>
                </div>
                <div style = "text-align:center">   
                    <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>    
                </div>
                <div class = "side_bar_options" style = "text-align:center">
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_upcoming_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Upcoming Appointments</button>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button>
                </div>
            </div>
        </div>
    </div>`,  
    
    data(){
        return{
            error: "",
            user_name: "",
            user_email:"",
            gender:"",
            show_menu: false,
            booked_slots:{},
            availability:{},
            days:[],
            slots:["10:00 AM","11:00 AM","12:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"]
        }
    },

    async mounted(){
        try{
            this.days = this.get_days()
            this.load_page()
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.availability = needed_data.data.availability || {}
            this.booked_slots = needed_data.data.booked_slots || {}
            
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.availability = needed_data.data.availability || {}
            this.booked_slots = needed_data.data.booked_slots || {}

        },

        get_days(){
            const days = []
            const today = new Date()
            for(let i = 0; i <= 7; i++){
                const day = new Date()
                day.setDate(today.getDate() + i)
                const date_format = day.toLocaleDateString("en-CA")
                days.push({ date: date_format, display: day.toDateString() })
            }

            return days
        },

        booked(date, time){
            return this.booked_slots[date]?.includes(time)
        },

        selected(date, time){
            return this.availability[date]?.includes(time) || false
        },

        select_slot(date,time){
            if (!this.availability[date]){
                this.availability[date] = []
            }

            const slot = this.availability[date].indexOf(time)
            if(slot > -1){
                this.availability[date].splice(slot,1)
                if(this.availability[date].length === 0){
                    delete this.availability[date]
                }
            }else{
                this.availability[date].push(time)
                this.availability[date].sort()
            }
        },

        select_all(date){
            if (!this.availability[date] || this.availability[date].length === 0){
                
                this.availability[date] = []
                for(let i = 0; i < this.slots.length; i++){
                    this.availability[date].push(this.slots[i])
                }
            }else{
                delete this.availability[date]
            }

            },
            

        async provide_availability(){
            try{
                await axios.post("/api/doctor_availability", { availability: this.availability})
                this.$router.push({ path: "/doctor_dashboard", query: {success: "Availability Provided Successfully"} })
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const doctor_view_history = {
    template: `
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(253, 240, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{ user_email }} </p>
                    <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_upcoming_appointments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Upcoming Appointments</button><br>
                    <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu doctor_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">History</p>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(143, 3, 3)">
                    <div class = "appointments_content">
                        <div>
                            <p style= "margin:0;">Name : \{\{ patient.name }}</p>
                            <p style= "margin:0">Age : \{\{ patient.age }}</p> 
                            <p style= "margin:0">Gender : \{\{ patient.gender }}</p>
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color: rgb(255, 200, 200); color: rgb(100, 0, 0);">
                            <th>Treated By</th>
                            <th>date</th>
                            <th>diagnosis</th>
                            <th>prescription</th>
                            <th>Next Visit</th>
                        </tr>
                        <tr v-if="history.length !== 0" v-for="hist in history" :key = "hist.id" style = "font-size:70%;">
                            <td>\{\{hist.doctor_name}}</td>
                            <td>\{\{hist.date}}</td>
                            <td>\{\{hist.diagnosis}}</td>
                            <td>
                                <div v-for="(med,i) in hist.prescription" :key="i">
                                    <template v-if="med && med.name">
                                        \{\{ med.name }}
                                        <span v-if="med.breakfast">
                                            - Morning (\{\{ med.breakfast_quantity || 0 }})
                                        </span>
                                        <span v-if="med.lunch">
                                            - Afternoon (\{\{ med.lunch_quantity || 0 }})
                                        </span>
                                        <span v-if="med.dinner">
                                            - Night (\{\{ med.dinner_quantity || 0 }})
                                        </span>
                                    </template>
                                </div>
                            </td>
                            <td> \{\{hist.next_visit}}</td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="4" style = "padding:2%"> No History Found </td>
                        </tr>
                    </table>
                    <div style = "text-align:center">   
                        <button class ="logout doctor_logout" @click = "$router.push('/doctor_dashboard')" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Back</button>    
                    </div>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "doctor_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_doctor_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_doctor_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout doctor_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_upcoming_appointments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Upcoming Appointments</button>
                <button class = "logout doctor_logout" @click = "$router.push('/doctor_provide_availability')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Provide Availability</button>
            </div>
        </div>

    </div>`,

    data(){
        return{
            error: "",
            user_name: "",
            user_email:"",
            gender:"",
            history:[],
            patient:{},
            show_menu: false,
        }
    },

    async mounted(){
        try{
            const id = this.$route.query.id
            this.load_page()
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            const data = await axios.get(`/api/doctor_view_history/${id}`)
            this.history = data.data.history
            this.patient = data.data.patient
            
            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const id = this.$route.query.id
            const needed_data = await axios.get("/api/doctor_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            const data = await axios.get(`/api/doctor_view_history/${id}`)
            this.history = data.data.history
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const attend_patient = {
    template:`
    <div style = "min-height: 100vh; background-color: rgb(253, 240, 240); display:flex; justify-content:center;">
        <div style = "display:flex; justify-content:center; align-items:center;width:90%">
            <div style = "width:90%; display:flex; border-radius:20px; justify-content:center; align-items:center; flex-direction:column; background-color: rgb(255, 200, 200); color: rgb(100, 0, 0); box-shadow: 0px 10px 40px rgb(70, 0, 0); border: 5px solid rgb(59, 0, 0);">
                <h1>
                    Treatment
                </h1>
                <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                    \{\{ error }}
                </p>
                <div style = "width:100%">
                    <input style="width:95%" class = "signup_input" v-model = "diagnosis" placeholder="Diagnosis" required/><br>
                    <div>
                        <div v-if="add_medicine" v-for="(med, index) in prescription" :key="index" style="display:flex; gap:10px">
                            <input style= "width:50%" class = "signup_input" v-model = "med.name" placeholder="Medicine Name" />
                            <label style= "display:flex; flex-direction:column; align-items:center; font-size:50%;">
                                <select v-model="med.breakfast_quantity" style="padding:5px; width:80%; font-size:120%">
                                    <option disabled value="">Quantity</option>
                                    <option>½</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                <input type="checkbox" v-model="med.breakfast"><span>Breakfast</span>
                            </label>
                            <label style= "display:flex; flex-direction:column; align-items:center; font-size:50%">
                                <select v-model="med.lunch_quantity" style="padding:5px; width:80%; font-size:120%">
                                    <option disabled value="">Quantity</option>
                                    <option>½</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                <input type="checkbox" v-model="med.lunch"><span>Lunch</span>
                            </label>
                            <label style= "display:flex; flex-direction:column; align-items:center; font-size:50%">
                                <select v-model="med.dinner_quantity" style="padding:5px; width:80%; font-size:120%">
                                    <option disabled value="">Quantity</option>
                                    <option>½</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                <input type="checkbox" v-model="med.dinner"><span>Dinner</span>
                            </label>
                        </div>
                    </div>
                    <button style = "width:20%; margin-left:2%; margin-bottom:5%; background-color: rgb(245, 102, 102);  color: rgb(100, 0, 0)" class = "logout doctor_logout" @click="add_prescription" type="button">➕ Add Medicine</button>
                    <div class = "signup_input" style = "width:95%;font-size:110%; background-color: rgb(255, 200, 200); display:flex; justify-content:space-between; padding:0; margin:0">
                        <select style = "flex:3; width:100%;" v-model = "next_visit">
                            <option  disabled value = "">Next Visit</option>
                            <option>Not Required</option>
                            <option>Tomorrow</option>
                            <option>2 Days</option>
                            <option>3 Days</option>
                            <option>1 Week</option>
                        </select>
                    </div>
                    <div class = "box" style = "display:flex; justify-content:space-between; margin-top:10%">
                        <div style = "display:flex; justify-content:center">
                            <button class = "logout doctor_logout" style= "font-size:95%; padding:20%; width:fit-content; background-color: rgb(245, 102, 102); color: rgb(100, 0, 0)" type = "button" @click = "$router.push('/doctor_dashboard')">Back</button><br>
                        </div>
                        <div style = "display:flex; justify-content:center">
                            <button class = "logout doctor_logout" style= "font-size:95%; padding:12%; width:fit-content; background-color: rgb(245, 102, 102);  color: rgb(100, 0, 0)" type = "button" @click = "attend_patient()">Submit</button><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            add_medicine:false,
            success : "",
            diagnosis:"",
            prescription:[],
            next_visit:"",
            error:"",
        }
    },

    async mounted(){
        const patient_id = this.$route.query.patient_id
        const date = this.$route.query.date
        const appointment_id = this.$route.query.appointment_id
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        add_prescription(){
            this.add_medicine = true
            this.prescription.push({ name:"", breakfast: false, lunch: false, dinner: false, quantity: "", breakfast_quantity: "", lunch_quantity: "", dinner_quantity: "" })
        },

        async attend_patient(){
            this.error = ""

            if(this.diagnosis === "" || this.next_visit === "" ){
            this.error_msg("Please fill in all details")
            return
            }

            this.prescription.forEach(medicine => {
                medicine.breakfast_quantity = medicine.breakfast_quantity || 0
                medicine.lunch_quantity = medicine.lunch_quantity || 0
                medicine.dinner_quantity = medicine.dinner_quantity || 0
            });

            try{
                const patient_id = this.$route.query.patient_id
                const appointment_id = this.$route.query.appointment_id
                const date = this.$route.query.date
                
                await axios.post("/api/treatment", {
                    patient_id: patient_id,
                    appointment_id: appointment_id,
                    date: date,
                    diagnosis: this.diagnosis,
                    prescription: this.prescription,
                    next_visit: this.next_visit
                })
                this.$router.push({ path: "/doctor_dashboard", query: {success: "Treatment Added Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}

const patient_dashboard = {
    template: `
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(253, 253, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout patient_logout" @click = "$router.push({ path: '/patient_edit' , query: {id:id} })" type = "button" style = "width:fit-content; padding:3%; margin-bottom:5%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">✏️ Edit Profile</button><br>
                    <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:50%; padding:3%; margin-bottom:10%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_treatments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu patient_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Home</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors, Departments">
                        <button type = "button" class = "logout patient_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(254, 255, 168); color: rgb(152, 155, 0)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 && search_department.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>
                                        <div>
                                            \{\{doctor.name}} (Doctor)
                                        </div>
                                    </td>
                                    <td>\{\{doctor.gender}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "patient_logout" @click = "$router.push({ path: '/check_availability', query: {id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 191);">
                                            <p style = "font-size:80%; margin:0;">📅</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Check Availability</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for = "department in search_department" :key="department.id" style = "color:black">
                                    <td>\{\{department.name}}<br>(Department)</td>
                                    <td>\{\{department.description}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "patient_logout" @click = "$router.push({path:'/patient_view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 191);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div style = "display:flex; flex-wrap:wrap; margin:3%; gap:1%; width:95%; justify-content:center; color: rgb(152, 155, 0)">
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{treatments.length}} </p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Visits</p>
                            </div>
                            <img style = "padding:4px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/visits.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{doctors.length}}</p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Doctors</p>
                            </div>
                            <img style = "padding:3px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/doctor.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{departments.length}}</p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Departments</p>
                            </div>
                            <img style = "width:30%;" src = "/static/departments.png">
                        </div>
                    </div>
                    <div class = "logout boxes_content">
                        <div class = "boxes">
                            <div>
                                <p style = "margin:0">\{\{ cancelled }}</p>
                                <p style = " margin-bottom:0; color:black; font-size:60%">Appointments Cancelled</p>
                            </div>
                            <img style = "padding:4px; width:30%; background-color:rgb(0,0,0,0.2)" src = "/static/cancelled_appointments.png">
                        </div>
                    </div>
                </div>
                <div style = "text-align:center; display:flex; justify-content:center; margin-bottom:3%; width:80%">   
                    <button class ="logout patient_logout" @click = "$router.push('/patient_departments')" type = "button" style = "width:90%; padding:1%; font-size:120%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Book Appointment</button>    
                </div>
                <div class = "appointments" style = "color: rgb(152, 155, 0)">
                    <div class = "appointments_content">
                        <div>
                            Upcoming Appointments
                        </div>
                        <div style = "margin-right: 5%">
                            \{\{live}}
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0);">
                            <th>Doctor</th>
                            <th>Department</th>
                            <th>Date</th>
                            <th>time</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                        <tr v-if="upcoming_appointments.length !== 0" v-for="appointment in upcoming_appointments" style = "font-size:70%" :style = "{color: appointment.status !== 'Booked' ? 'red' : 'black'}">
                            <td>\{\{appointment.doctor_name}}</td>
                            <td>\{\{appointment.department}}</td>
                            <td>\{\{appointment.date}}</td>
                            <td>\{\{appointment.time}}</td>
                            <td>\{\{appointment.status}}</td>
                            <td>
                                <button v-if = "appointment.status === 'Booked'" @click = "cancel(appointment)" class = "patient_logout" style="border-radius:50px; font-size:150%; border:0;">🚫<p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">Cancel</p></button>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="6" style = "padding:2%"> No Appointments Booked </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "patient_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout patient_logout" @click = "$router.push({ path: '/patient_edit' , query: {id:id} })" type = "button" style = "width:40%; padding:2%; margin-top:5%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">✏️ Edit Profile</button><br>
                <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin-bottom:5%; margin-top:2%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
            </div>
        </div>

    </div>`,

    data(){
        return{
            error: "",
            success:"",
            id:0,
            user_name: "",
            user_email:"",
            gender:"",
            cancelled:0,
            live:0,
            show_menu: false,
            upcoming_appointments: [], 
            treatments:[],
            doctors: [], 
            departments: [],
            search:"",
            search_doctor:[],
            search_department:[],
        }
    },

    async mounted(){
        try{
            this.load_page()
            const needed_data = await axios.get("/api/patient_dashboard")
            this.id = needed_data.data.id
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.doctors = needed_data.data.doctors          
            this.departments = needed_data.data.departments
            this.cancelled = needed_data.data.cancelled
            this.live = needed_data.data.live
            this.treatments = needed_data.data.treatments
            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.doctors = needed_data.data.doctors          
            this.departments = needed_data.data.departments
            this.treatments = needed_data.data.treatments

        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_department = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_department = result_department
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.search_department = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.search_department = result_department
            this.load_page()
            return
        },

        async cancel(appointment){
            try{
                await axios.post("/api/patient_cancel",{ id: appointment.id, date: appointment.date, time: appointment.time, doctor_id: appointment.doctor_id })
                this.load_page()
                this.success = "Appointment Cancelled Successfully"
            }catch(err){
                this.error = "Something Went Wrong"
            }
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        
        }
    }
}


const patient_edit= {
    template:`
    <div style = "min-height: 100vh; background-color: rgb(253, 253, 240);">
        <div style = "display:flex; justify-content:center; align-items:center">
            <div class = "signup_box" style = "background-color: rgb(254, 255, 191);  color: rgb(124, 126, 1); box-shadow: 0px 10px 40px rgb(70, 70, 0); border: 5px solid rgb(59, 55, 0);">
                <h1>
                    Edit Profile
                </h1>
                <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
                    \{\{ error }}
                </p>
                <div>
                    <div>
                        <input class = "signup_input" v-model = "user_name" placeholder="Full name" required/><br>
                        <input class = "signup_input" v-model = "contact_no" placeholder="Contact No" required/><br>
                        <div class = "signup_input" style = "font-size:110%; background-color: rgb(254, 255, 191); display:flex; justify-content:space-between; padding:0; margin:0">
                            <select style = "flex:3; width:100%;" v-model = "gender">
                                <option  disabled value = "">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input class = "signup_input" v-model.number = "age" type = "number" placeholder="Age" min = "1" style = "flex:2; width:100%" required/>
                        </div>
                        <input class = "signup_input" v-model = "user_email" placeholder="Email Address" required/><br>
                        <input class = "signup_input" v-model = "user_password" placeholder="Set a Password" required/><br>
                        <input class = "signup_input" v-model = "confirm_password" type = "password" placeholder="Confirm Password" required/><br>
                        <div class = "box" style = "display:flex; justify-content:space-between; margin-top:10%">
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout patient_logout" style= "font-size:95%; padding:20%; width:fit-content; background-color: rgb(242, 245, 102);  color: rgb(124, 126, 1)" type = "button" @click = "$router.push('/patient_dashboard')">Back</button><br>
                            </div>
                            <div style = "display:flex; justify-content:center">
                                <button class = "logout patient_logout" style= "font-size:95%; padding:12%; width:fit-content; background-color: rgb(242, 245, 102);  color: rgb(124, 126, 1)" type = "button" @click = "edit_patient()">Submit</button><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            success : "",
            user_name : "",
            contact_no: "",
            age: "",
            gender: "",
            user_email : "",
            user_password : "",
            confirm_password : "",
            error:"",
        }
    },

    async mounted(){
        const id = this.$route.query.id
        const needed_data = await axios.get(`/api/edit_doctor/${id}`)
        this.user_name = needed_data.data.user_name
        this.user_email = needed_data.data.user_email
        this.contact_no = needed_data.data.contact_no
        this.age = needed_data.data.age
        this.gender = needed_data.data.gender
        this.user_password = needed_data.data.user_password
    },

    methods: {
        error_msg(error){
            this.error = error
            setTimeout(() => {
                this.error = ""
            }, 5000)
        },

        async edit_patient(){
            this.error = ""

            if(this.user_name === "" || this.user_email === "" || this.user_password === "" || this.age === "" || this.gender === "" || this.confirm_password === "" || this.contact_no === "" ){
            this.error_msg("Please fill in all details")
            return
            }

            if(this.contact_no.length !==  10 || isNaN(this.contact_no)){
            this.error_msg("Enter a Valid Contact Number")
            return
            }

            if(this.age > 100 || this.age < 1 || isNaN(this.age)){
                this.error_msg("Enter a Valid Age")
                return
            }

            if(this.user_password !== this.confirm_password){
            this.error_msg("Confirm Password did not match")
            return
            }

            try{
                const id = this.$route.query.id
                await axios.post(`/api/edit_doctor/${id}`, {
                    user_name : this.user_name,
                    user_email : this.user_email,
                    contact_no : this.contact_no,
                    age : this.age,
                    gender : this.gender,
                    user_password : this.user_password,
                })
                this.$router.push({ path: "/patient_dashboard", query: {success: "Profile Updated Successfully"}})
            }
            catch(err){
                this.error_msg(err.response?.data?.error || "Something Went Wrong")
            }
        }
    }
}


const patient_departments ={
    template: `
    <div style = "font-family:lora; background-color: rgb(253, 253, 240); min-height:100vh">
        <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
            \{\{ error }}
        </p>
        <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
            \{\{ success }}
        </p>    
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_treatments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Departments</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Departments">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(254, 255, 168); color: rgb(152, 155, 0)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_department.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0);">
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th style = "width:120px">Events</th>
                                </tr>
                                <tr v-for = "department in search_department" :key="department.id" style = "color:black">
                                    <td>\{\{department.name}}</td>
                                    <td>\{\{department.description}} </td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "patient_logout" @click = "$router.push({path:'/patient_view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 168);">
                                                <p style = "font-size:80%; margin:0;">👁</p>
                                                <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(152, 155, 0)">
                    <div class = "appointments_content">
                        <div>
                            All Departments ( \{\{departments.length}} )
                        </div>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0)">
                            <th>Name</th>
                            <th>Description</th>
                            <th style = "width:15%">Events</th>
                        </tr>
                        <tr v-if = "departments.length !== 0"  v-for = "department in departments" :key = "department.id" style = "font-size:70%; color:black">
                            <td>\{\{department.name}}</td>
                            <td style = "white-space:normal">\{\{department.description}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "patient_logout" @click = "$router.push({path:'/patient_view_doctors', query: { id: department.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 168);">
                                        <p style = "font-size:80%; margin:0;">👁</p>
                                        <p style = "font-size:70%; margin:0; padding-left:2%; padding-right:2%;">View Doctors</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="3" style = "padding:2%"> No Departments Found </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
            </div>
        </div>
    </div>
    `,

    data(){
        return{
            error : "",
            success : "",
            show_menu:false,
            departments:[],
            user_name:"",
            user_email:"",
            gender:"",
            search:"",
            search_department:[],
        }
    },

    async mounted(){
        this.load_page()
        const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.upcoming_appointments = needed_data.data.upcoming_appointments 
            this.departments = needed_data.data.departments
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/patient_dashboard")
            this.departments = needed_data.data.departments
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_department = []
                return;
            }

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
    
            this.search_department = result_department
            this.load_page()
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_department = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_department = this.departments.filter(dept =>
                dept.name.toLowerCase().startsWith(search)
            )
            
            this.search_department = result_department
            this.load_page()
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const patient_doctors ={
    template:`
    <div>
        <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>    
    <div style = "min-height: 100vh; background-color: rgb(253, 253, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button><br>
                    <button class = "logout patient_logout" @click = "view_appointments()" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Doctors</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors">
                        <button type = "button" class = "logout patient_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(254, 255, 168); color: rgb(152, 155, 0)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0);">
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>
                                        <div>
                                            \{\{doctor.name}} 
                                        </div>
                                    </td>
                                    <td>\{\{doctor.gender}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "admin_logout" @click = "$router.push({ path: '/check_availability', query: {id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 191);">
                                                <p style = "font-size:80%; margin:0;">📅</p>
                                                <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Check Availability</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(152, 155, 0)">
                    <div class = "appointments_content">
                        <div>
                            All Doctors ( \{\{doctors.length}} )
                        </div>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0)">
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th style = "width:15%">Events</th>
                        </tr>
                        <tr v-if = "doctors.length !== 0"  v-for = "doctor in doctors" :key = "doctor.id" style = "font-size:70%; color:black">
                            <td>\{\{doctor.name}}</td>
                            <td>\{\{doctor.gender}}</td>
                            <td>\{\{doctor.doctor_department}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "patient_logout" @click = "$router.push({ path: '/check_availability', query: {id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 191);">
                                    <p style = "font-size:80%; margin:0;">📅</p>
                                    <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Check Availability</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="4" style = "padding:2%"> No Doctors Found </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            error : "",
            doctors : [],
            success : "",
            gender:"",
            show_menu:false,
            user_email:"",
            user_name:"",
            search:"",
            search_doctor:[],
        }
    },

    async mounted(){
        this.load_page()
        const needed_data = await axios.get("/api/patient_dashboard")
        this.doctors = needed_data.data.doctors
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
        try{
            const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
        }catch(err){
            this.error = "Something Went Wrong"
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/patient_dashboard")
            this.doctors = needed_data.data.doctors
        },

        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.load_page()
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            
            this.search_doctor = result_doctor
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const patient_treatments={
    template:`
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>  
    <div style = "min-height: 100vh; background-color: rgb(253, 253, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{ user_email }} </p>
                    <button class ="logout patient_logout" @click = "$router.push({ path: '/patient_edit' , query: {id:id} })" type = "button" style = "width:fit-content; padding:3%; margin-bottom:5%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">✏️ Edit Profile</button><br>
                    <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:50%; padding:3%; margin-bottom:10%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu patient_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Treatments</p>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(152, 155, 0)">
                    <div class = "appointments_content">
                        <div>
                            Treatments 
                            
                            <button class = "patient_logout" @click = "download"  style = "display:flex; justify-content:center; border-radius:10px; margin-left:10%; align-items:center;font-size:50%; background-color: rgb(252, 255, 72); border:1px solid black; color: rgb(0, 0, 0)">
                                <a style = "text-decoration: none; color:black" href = "http://127.0.0.1:5000/api/download">
                                    Download 
                                </a>
                            </button>    
                        </div>
                        <div style = "margin-right: 5%">
                            \{\{treatments.length}}
                        </div>
                    </div>
                    <table class = "appointment_table">
                        <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0);">
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Diagnosis</th>
                            <th>Prescription</th>
                            <th>Next Visit</th>
                        </tr>
                        <tr v-if="treatments.length !== 0" v-for="treatment in treatments" :key = "treatment.id" style = "font-size:70%;">
                            <td>\{\{treatment.doctor_name}}</td>
                            <td>\{\{treatment.date}}</td>
                            <td>\{\{treatment.diagnosis}}</td>
                            <td>
                                <div v-for="(med,i) in treatment.prescription" :key="i">
                                    <template v-if="med && med.name">
                                        \{\{ med.name }}
                                        <span v-if="med.breakfast">
                                            - Morning (\{\{ med.breakfast_quantity || 0 }})
                                        </span>
                                        <span v-if="med.lunch">
                                            - Afternoon (\{\{ med.lunch_quantity || 0 }})
                                        </span>
                                        <span v-if="med.dinner">
                                            - Night (\{\{ med.dinner_quantity || 0 }})
                                        </span>
                                    </template>
                                </div>
                            </td>
                            <td>\{\{treatment.next_visit}}</td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="7" style = "padding:2%"> No Treatments Found </td>
                        </tr>
                    </table>
                    <div style = "text-align:center">   
                        <button class ="logout patient_logout" @click = "$router.push('/patient_dashboard')" type = "button" style = "width:20%; padding:1%; margin:5%; font-size:70%; background-color: rgb(242, 245, 102);  color: rgb(124, 126, 1)">Back</button>    
                    </div>
                </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "doctor_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error: "",
            success:"",
            user_name: "",
            user_email:"",
            gender:"",
            treatments:[],
            show_menu: false,
        }
    },

    async mounted(){
        try{
            this.load_page()
            const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.treatments = needed_data.data.treatments
            this.patients = needed_data.data.patients

            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            this.treatments = needed_data.data.treatments
        },

        download(){
            this.success =  "Downloading"
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}

const patient_view_doctors = {
    template: `
    <div>
    <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
        \{\{ error }}
    </p>
    <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
        \{\{ success }}
    </p>    
    <div style = "min-height: 100vh; background-color: rgb(253, 253, 240);">
        <div style = "display:flex">
            <div class="side_bar">
                <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                    <div v-if="gender === 'Male'">
                        <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                    </div>
                    <div v-if="gender === 'Female'">
                        <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                    </div>
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%"> \{\{user_email}} </p>
                    <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>
                </div>
                <div class = "side_bar_options">
                    <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                    <button class = "logout patient_logout" @click = "view_appointments()" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                </div>
            </div>
            <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                    <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                        <button class="side_menu admin_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                        <p style = "margin:0; font-size: 180%; font-weight:bold; ">Department</p>
                    </div>
                    <div class = "search_box" style = "gap:1%; position:relative">
                        <input class = "search_input" v-model = "search" @input = "search_input" placeholder = "Search Doctors">
                        <button type = "button" class = "logout admin_logout" @click = "search_input_button()" style = "width:25px; padding:1%; border-radius: 0 10px 10px 0; font-size:80%; background-color: rgb(254, 255, 168); color: rgb(152, 155, 0)">🔍︎</button>
                        <div v-if="search.trim() !== ''" class = "search_input" style = "padding:0;position:absolute; background:white; border:1px solid rgb(0,0,0,0.3); max-height:250px; top:100%; width:100%; left:0; overflow-y:auto; z-index:1;">
                            <div v-if = "search_doctor.length === 0 " style="padding:10px; text-align:center; color:red;">
                                No Results Found
                            </div>
                            <table v-else class = "appointment_table" style = "width:100%; font-size:90%">
                                <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0)">
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Events</th>
                                </tr>
                                <tr v-for = "doctor in search_doctor" :key = "doctor.id" style = "color:black">
                                    <td>
                                        \{\{doctor.name}}        
                                    </td>
                                    <td>\{\{doctor.gender}}</td>
                                    <td>\{\{doctor.doctor_department}}</td>
                                    <td style = "padding-left:5%; padding-right:5%;">
                                        <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                            <div type = "button" class = "patient_logout" @click = "$router.push({ path: '/check_availability', query: {id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 191);">
                                            <p style = "font-size:80%; margin:0;">📅</p>
                                            <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Check Availability</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "appointments" style = "color: rgb(152, 155, 0)">
                    <div class = "appointments_content">
                        <div>
                            \{\{department}} ( \{\{doctors.length}} )
                        </div>
                    </div>
                    <table class = "appointment_table" style = "width:100%;">
                        <tr style = "background-color: rgb(254, 255, 168); color: rgb(152, 155, 0);">
                            <th>Name</th>
                            <th>Gender</th>
                            <th style = "width:15%">Events</th>
                        </tr>
                        <tr v-if = "doctors.length !== 0"  v-for = "doctor in doctors" :key = "doctor.id" style = "font-size:70%; color:black">
                            <td>\{\{doctor.name}}</td>
                            <td>\{\{doctor.gender}}</td>
                            <td style = "padding-left:5%; padding-right:5%;">
                                <div style = "display:flex; justify-content:center; width:100%; gap:10%">
                                    <div type = "button" class = "patient_logout" @click = "$router.push({ path: '/check_availability', query: {id: doctor.id} })" style = "display:flex; margin:1%;padding:5%; flex-direction:column;justify-content:center; align-items:center; font-size:100%; border-radius:5px; background-color: rgb(254, 255, 191);">
                                    <p style = "font-size:80%; margin:0;">📅</p>
                                    <p style = "font-size:60%; margin:0; padding-left:2%; padding-right:2%">Check Availability</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-else style = "color:red; text-align:center; font-size:120%">
                            <td colspan="3" style = "padding:2%"> No Doctors Found </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
        <div class="mobile_menu" :class="{ show: show_menu }">
            <div style = "text-align:right; margin-right:5%; margin-top:5%">
                <button @click="show_menu = false" class = "admin_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
            </div>
            <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                    \{\{user_name}}
                    <p style = "font-weight:normal; font-size:55%; margin:0"> \{\{user_email}} </p>
                </div>
            </div>
            <div style = "text-align:center">   
                <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>    
            </div>
            <div class = "side_bar_options" style = "text-align:center">
                <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                <button class = "logout patient_logout" @click = "$router.push('/patient_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
            </div>
        </div>
    </div>`,

    data(){
        return{
            error : "",
            doctors : [],
            success : "",
            show_menu:false,
            user_email:"",
            user_name:"",
            department:"",
            gender:"",
            search:"",
            search_doctor:[],
        }
    },

    async mounted(){
        this.load_page()
        const id = this.$route.query.id
        const needed_data = await axios.get(`/api/patient_view_doctors/${id}`)
        this.doctors = needed_data.data.doctors
        this.department = needed_data.data.department
        if(this.$route.query.success){
            this.success = this.$route.query.success
            this.$router.replace({query:{}})
        }
        try{
            const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
        }catch(err){
            this.error = "Something Went Wrong"
        }
    },

    methods: {
        async load_page(){
            const id = this.$route.query.id
            const needed_data = await axios.get(`/api/patient_view_doctors/${id}`)
            this.doctors = needed_data.data.doctors
        },


        search_input(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            this.search_doctor = result_doctor
            this.load_page()
            return
        },

        search_input_button(){
            const search = this.search.toLowerCase().trim()
            
            if (search === "") {
                this.search_doctor = []
                this.error = "Enter Something to Search"
                return;
            }

            const result_doctor = this.doctors.filter(doc =>
                doc.name.toLowerCase().startsWith(search)
            )
            
            this.search_doctor = result_doctor
            return
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}


const check_availability ={
    template:`
    <div>
        <p class = "error" style = "font-size: 80%; background: rgb(237, 33, 0); animation: error 5s ease-in-out forwards;" v-if = "error">
            \{\{ error }}
        </p>
        <p class = "error" style = "font-size: 80%; background: rgb(0, 237, 20); animation: error 5s ease-in-out forwards;" v-if = "success">
            \{\{ success }}
        </p>  
        <div style = "min-height: 100vh; background-color: rgb(253, 253, 240);">
            <div style = "display:flex">
                <div class="side_bar">
                    <div style = "font-size: 115%; font-weight:bold; padding-top:10%; padding-left:5%; padding-right:5%">
                        <div v-if="gender === 'Male'">
                            <img style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                        </div>
                        <div v-if="gender === 'Female'">
                            <img v-else style = "width: 20%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/patient_doctor_logo.png"><br>
                        </div>
                        \{\{user_name}}
                        <p style = "font-weight:normal; font-size:55%"> \{\{ user_email }} </p>
                        <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:40%; padding:3%; margin-bottom:10%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>
                    </div>
                    <div class = "side_bar_options">
                        <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Home</button><br>
                        <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button><br>
                        <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Departments</button><br>
                        <button class = "logout patient_logout" @click = "view_appointments()" style= "margin-top:5%; margin-bottom:5%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button><br>
                    </div>
                </div>
                <div style = "flex:4; display:flex; flex-direction:column; align-items:center; font-family:lora">
                    <div style = "display:flex; width:93%; padding: 1%; margin-top:3%; margin-bottom:2%; font-size: 70%; justify-content:space-between; align-items:center; border-bottom: 1px solid rgb(0,0,0,0.5)">
                        <div style = " display:flex; justify-content:flex-start; gap:2%; align-items:center;">
                            <button class="side_menu patient_logout" style = "font-size: 100%; font-weight:bold; background-color: rgb(240, 249, 263); border: 2px solid rgb(0,0,0,0.5); border-radius:20px; color:rgb(0,0,0,0.7)" @click="show_menu = true">☰</button>
                            <p style = "width:200px; margin:0; font-size: 180%; font-weight:bold; ">Check Availability</p>
                        </div>
                    </div>
                    <div class = "appointments" style = "color: rgb(152, 155, 0)">
                        <div style = "display:flex; justify-content:center; align-items:center; flex-direction:column;">
                            <div style = "margin-bottom:3%; border-bottom:1px solid rgb(0,0,0,0.5); width:100%; display:flex; justify-content:center; flex-direction:column; align-items:center" >
                                <div style = "font-size:120%">Dr. \{\{doctor.name}} ( \{\{doctor.doctor_department}} ) </div>
                                <p style = "margin-bottom:2px;color:black;font-size:80%;">Check Availability for the Next 7 Days</p>
                                <p v-if="days.length !== 0" style = "margin-bottom:1%; font-size:60%; color:blue">Select the Date of Appointment</p>
                            </div>
                            <div v-if="doctor.blacklist === false">
                                <div v-if="days.length !== 0" style = "width:100%;">
                                    <div style="display:flex; align-items:center; flex-wrap:wrap; font-size:70%; justify-content:center; padding:3%; border-radius:10px; border:1px solid rgb(0,0,0,0.5); background-color:rgb(255, 255, 237)">
                                        <button v-for="day in days" :key="day.date" @click ="select_date(day.date)" :style="{display:'flex', border:'2px solid rgb(0,0,0)', margin:'3px', padding:'10px', borderRadius:'10px', background: selected_date === day.date ? 'rgb(0,0,0,0.1)' : 'white', border: selected_date === day.date ? '3px solid rgb(10, 202, 0)' : '1px solid black'}">
                                            \{\{ day.display }}
                                        </button>
                                    </div>
                                    <div v-if="selected_date && availability[selected_date]" style="margin-top:10px; font-size:70%; display:flex;gap:20px; width:100%; align-items:center; flex-wrap:wrap; justify-content:center; padding:3%; border-radius:10px; border:1px solid rgb(0,0,0,0.5); background-color:rgb(255, 255, 237)">
                                        <button v-for="slot in availability[selected_date]" :key="slot" @click="select_slot(slot)" :style="{padding:'8px', borderRadius:'5px', background: selected_slot === slot ? 'rgb(0,0,0,0.2)' : 'white', border: selected_slot === slot ? '3px solid rgb(10, 202, 0)' : '1px solid black' }">
                                            \{\{ slot }}
                                        </button>
                                    </div>
                                    <div style = "display:flex; justify-content:space-between">
                                        <button class ="logout patient_logout" @click = "$router.push('/patient_departments')" type = "button" style = " padding:1%; margin:3%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Back</button>    
                                        <button class ="logout patient_logout" @click = "book_appointment()" type = "button" style = " padding:1%; margin:3%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Book Appointment</button>    
                                    </div>
                                </div>
                                <div v-else style = "color:red;">
                                    Doctor Not Available
                                    <div style = "display:flex;margin:5%; justify-content:center;">
                                        <button class ="logout patient_logout" @click = "$router.push('/patient_departments')" type = "button" style = " padding:2%; margin:5%; font-size:90%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Back</button>    
                                    </div>
                                </div>
                            </div>
                            <div v-else style = "color:red;">
                                Doctor Not Available
                                <div style = "display:flex;margin:5%; justify-content:center;">
                                    <button class ="logout patient_logout" @click = "$router.push('/patient_departments')" type = "button" style = " padding:2%; margin:5%; font-size:90%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Back</button>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if = "show_menu" class = "display" @click = "show_menu = false"></div>
            <div class="mobile_menu" :class="{ show: show_menu }">
                <div style = "text-align:right; margin-right:5%; margin-top:5%">
                    <button @click="show_menu = false" class = "doctor_logout" style = "border:0; background-color:white;font-size:100%; border-radius:50px; color:rgb(0,0,0,0.5);">✖</button> 
                </div>
                <div style = "display:flex; align-items:center; justify-content:center; font-size: 120%">
                    <img v-if="gender === 'Male'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/male_patient_logo.png"><br>
                    <img v-if="gender === 'Female'" style = "width: 20%; margin-left:5%; margin-right:5%; box-shadow: 0 0 7px rgba(0,0,0); border-radius:100%" src = "/static/female_patient_logo.png"><br>
                    <div style = "font-weight:bold; display:flex; flex-direction:column; margin-right:15%">
                        \{\{user_name}}
                        <p style = "font-weight:normal; font-size:55%; margin:0">\{\{user_email}} </p>
                    </div>
                </div>
                <div style = "text-align:center">   
                    <button class ="logout patient_logout" @click = "logout()" type = "button" style = "width:60%; padding:1%; margin:5%; font-size:70%; background-color: rgb(254, 255, 191); color: rgb(152, 155, 0)">Logout</button>    
                </div>
                <div class = "side_bar_options" style = "text-align:center">
                    <button class = "logout patient_logout" @click = "$router.push('/patient_dashboard')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Home</button>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_doctors')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Doctors</button>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_departments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Departments</button>
                    <button class = "logout patient_logout" @click = "$router.push('/patient_treatments')" style= "margin-bottom:7%; font-size:100%; border:0; width:80%; padding:2%">Treatments</button>
                </div>
            </div>
        </div>
    </div>`,  
    
    data(){
        return{
            error: "",
            user_name: "",
            user_email:"",
            gender:"",
            show_menu: false,
            availability:{},
            days:[],
            slots:[],
            doctor:{},
            selected_date: null,
            selected_slot: null
        }
    },

    async mounted(){
        try{
            this.days = this.get_days()
            this.load_page()
            const id = this.$route.query.id
            const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            const data = await axios.get(`api/patient_check_availability/${id}`)
            this.doctor = data.data.doctor
            this.availability = data.data.availability || {}
            this.days = this.get_days()
            if(this.$route.query.success){
                this.success = this.$route.query.success
                this.$router.replace({query:{}})
            }
            if(this.$route.query.error){
                this.error = this.$route.query.error
                this.$router.replace({query:{}})
            }
            
        }catch(err){
            if(err.response && err.response.status === 401){
                this.$router.push({ path: "/", query: {error: err.response.data.error}})
            }
        }
    },

    methods: {
        async load_page(){
            const id = this.$route.query.id
            const needed_data = await axios.get("/api/patient_dashboard")
            this.user_name = needed_data.data.user_name
            this.user_email = needed_data.data.user_email
            this.gender = needed_data.data.gender
            const data = await axios.get(`api/patient_check_availability/${id}`)
            this.availability = data.data.availability || {}
            this.days = this.get_days()
            
        },

        get_days(){
            const dates = []
            for(let day in this.availability){
                const date = new Date(day)
                dates.push({ date: day, display: date.toDateString() })
            }
            return dates
        },

        selected(date, time){
            return this.availability[date]?.includes(time) || false
        },

        select_date(date){
            this.error = ""
            if(this.selected_date === date){
                this.selected_date = null
                this.selected_slot = null
            }else {
                this.selected_date = date
                this.selected_slot = null 
            }
        },

        select_slot(slot){
            this.error = ""
            if(this.selected_slot === slot){
                this.selected_slot = null
            } else {
                this.selected_slot = slot
            }
        },

        async book_appointment(){
            if(this.selected_date === null){
                this.error = ""
                this.$nextTick(() => {
                    this.error = "Select Date to Book Appointment"
                })
                return
            } 

            if(this.selected_slot === null){
                this.error = ""
                this.$nextTick(() => {
                    this.error = "Select Time to Book Appointment"
                })
                return
            }
            try{
                await axios.post("/api/book_appointment", { 
                    doctor_id: this.$route.query.id, 
                    date: this.selected_date, 
                    time: this.selected_slot })
                this.$router.push({ path: "/patient_dashboard", query: {success: "Booked Appointment Successfully"} })
            }catch(err){
                this.error = err.response?.data?.error || "Something Went Wrong"
            }
        },

        async logout(){
            try{
                const logout = await axios.post("/api/logout")
                this.$router.push({ path : "/", query: {error: "Logged Out"}})
            }
            catch(err){
                this.error = "Logout Failed"
            }
        },
    }
}


const route = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path:"/", component: index },
        { path:"/signup", component: signup },
        { path:"/login", component : login},
        { path:"/admin_dashboard", component : admin_dashboard},
        { path:"/admin_doctors", component : admin_doctors},
        { path:"/add_doctor", component : add_doctor},
        { path:"/edit_doctor", component : edit_doctor},
        { path:"/admin_departments", component : admin_departments},
        { path:"/add_department", component : add_department},
        { path:"/edit_department", component : edit_department},
        { path:"/view_doctors", component : view_doctors},
        { path:"/admin_patients", component : admin_patients},
        { path:"/edit_patient", component : edit_patient},
        { path:"/admin_appointments", component : admin_appointments},
        { path:"/admin_previous_appointments", component : admin_previous_appointments},
        { path:"/admin_blacklists", component : admin_blacklists},
        { path:"/doctor_dashboard", component : doctor_dashboard},
        { path:"/doctor_upcoming_appointments", component : doctor_upcoming_appointments},
        { path:"/doctor_treatments", component : doctor_treatments},
        { path:"/doctor_provide_availability", component : doctor_provide_availability},
        { path:"/doctor_view_history", component : doctor_view_history},
        { path:"/attend_patient", component : attend_patient},
        { path:"/patient_dashboard", component : patient_dashboard},
        { path:"/patient_edit", component : patient_edit},
        { path:"/patient_treatments", component : patient_treatments},
        { path:"/patient_departments", component : patient_departments},
        { path:"/patient_doctors", component : patient_doctors},
        { path:"/patient_view_doctors", component : patient_view_doctors},
        { path: "/check_availability", component : check_availability}
    ]
})
const app = Vue.createApp({})
app.use(route)
app.mount("#app")
