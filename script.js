// --- PLAYER DATA (Updated with Static Roles & Prices) ---
// Roles: Opener, Middle Order, Finisher, Power Hitter, Anchor
// Bowling: Pacer, Spinner, Swing Bowler, Mystery Spinner

const playersDB = {
    "Batsmen": [
        { name: "Virat Kohli", role: "ANCHOR", price: "2 Crore", rating: 5.0, country: "India" },
        { name: "Rohit Sharma", role: "OPENER", price: "2 Crore", rating: 5.0, country: "India" },
        { name: "David Warner", role: "OPENER", price: "2 Crore", rating: 4.5, country: "Australia" },
        { name: "Kane Williamson", role: "ANCHOR", price: "2 Crore", rating: 4.1, country: "New Zealand" },
        { name: "Faf du Plessis", role: "OPENER", price: "2 Crore", rating: 4.4, country: "South Africa" },
        { name: "Dewald Brevis", role: "POWER HITTER", price: "2 Crore", rating: 4.0, country: "South Africa" },
        { name: "Shubman Gill", role: "OPENER", price: "1.5 Crore", rating: 4.8, country: "India" },
        { name: "Suryakumar Yadav", role: "MR. 360", price: "1.5 Crore", rating: 5.0, country: "India" },
        { name: "Jos Buttler", role: "OPENER", price: "1.5 Crore", rating: 4.9, country: "England" },
        { name: "Devon Conway", role: "OPENER", price: "1.5 Crore", rating: 4.3, country: "New Zealand" },
        { name: "Travis Head", role: "OPENER", price: "1.5 Crore", rating: 4.5, country: "Australia" },
        { name: "Sherfane Rutherford", role: "FINISHER", price: "1.5 Crore", rating: 3.6, country: "West Indies" },
        { name: "Ruturaj Gaikwad", role: "OPENER", price: "1 Crore", rating: 4.6, country: "India" },
        { name: "Shreyas Iyer", role: "MIDDLE ORDER", price: "1 Crore", rating: 4.4, country: "India" },
        { name: "Tilak Varma", role: "MIDDLE ORDER", price: "1 Crore", rating: 4.3, country: "India" },
        { name: "Rajat Patidar", role: "POWER HITTER", price: "1 Crore", rating: 4.0, country: "India" },
        { name: "Glenn Phillips", role: "FINISHER", price: "1 Crore", rating: 3.8, country: "New Zealand" },
        { name: "Jason Roy", role: "OPENER", price: "1 Crore", rating: 3.9, country: "England" },
        { name: "Nitish Rana", role: "MIDDLE ORDER", price: "1 Crore", rating: 3.9, country: "India" },
        { name: "Rahul Tripathi", role: "POWER HITTER", price: "1 Crore", rating: 3.8, country: "India" },
        { name: "Mayank Agarwal", role: "OPENER", price: "1 Crore", rating: 3.4, country: "India" },
        { name: "Devdutt Padikkal", role: "OPENER", price: "1 Crore", rating: 3.5, country: "India" },
        { name: "Yashasvi Jaiswal", role: "OPENER", price: "75 Lakh", rating: 4.7, country: "India" },
        { name: "Rinku Singh", role: "FINISHER", price: "75 Lakh", rating: 4.5, country: "India" },
        { name: "Sai Sudharsan", role: "ANCHOR", price: "75 Lakh", rating: 4.2, country: "India" },
        { name: "Shimron Hetmyer", role: "FINISHER", price: "75 Lakh", rating: 4.1, country: "West Indies" },
        { name: "Rovman Powell", role: "POWER HITTER", price: "75 Lakh", rating: 3.8, country: "West Indies" },
        { name: "Ajinkya Rahane", role: "ANCHOR", price: "75 Lakh", rating: 3.6, country: "India" },
        { name: "Manish Pandey", role: "ANCHOR", price: "75 Lakh", rating: 3.5, country: "India" },
        { name: "Abhishek Sharma", role: "OPENER", price: "75 Lakh", rating: 4.0, country: "India" },
        { name: "Angkrish Raghuvanshi", role: "OPENER", price: "75 Lakh", rating: 3.5, country: "India" },
        { name: "Prithvi Shaw", role: "OPENER", price: "50 Lakh", rating: 3.3, country: "India" },
        { name: "Riyan Parag", role: "MIDDLE ORDER", price: "50 Lakh", rating: 4.1, country: "India" },
        { name: "Abdul Samad", role: "FINISHER", price: "50 Lakh", rating: 3.2, country: "India" },
        { name: "Shahrukh Khan", role: "FINISHER", price: "50 Lakh", rating: 3.5, country: "India" },
        { name: "Sarfaraz Khan", role: "MIDDLE ORDER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Anmolpreet Singh", role: "OPENER", price: "50 Lakh", rating: 2.5, country: "India" },
        { name: "Mandeep Singh", role: "MIDDLE ORDER", price: "50 Lakh", rating: 2.8, country: "India" },
        { name: "Karun Nair", role: "ANCHOR", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Cheteshwar Pujara", role: "ANCHOR", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Gurnoor Singh Brar", role: "MIDDLE ORDER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Robin Minz", role: "FINISHER", price: "50 Lakh", rating: 3.2, country: "India" },
        { name: "Shubham Dubey", role: "FINISHER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Aniket Verma", role: "MIDDLE ORDER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Yash Dhull", role: "OPENER", price: "20 Lakh", rating: 2.8, country: "India" },
        { name: "Priyam Garg", role: "MIDDLE ORDER", price: "20 Lakh", rating: 2.5, country: "India" },
        { name: "Abhinav Manohar", role: "FINISHER", price: "20 Lakh", rating: 3.4, country: "India" },
        { name: "Ayush Badoni", role: "FINISHER", price: "20 Lakh", rating: 3.6, country: "India" },
        { name: "Ajay Mandal", role: "MIDDLE ORDER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Ashutosh Sharma", role: "FINISHER", price: "20 Lakh", rating: 3.8, country: "India" },
        { name: "Madhav Tiwari", role: "MIDDLE ORDER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Himmat Singh", role: "MIDDLE ORDER", price: "20 Lakh", rating: 3.2, country: "India" },
        { name: "Harnoor Pannu", role: "OPENER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Mitch Owen", role: "MIDDLE ORDER", price: "20 Lakh", rating: 3.0, country: "Australia" },
        { name: "Musheer Khan", role: "MIDDLE ORDER", price: "20 Lakh", rating: 3.5, country: "India" },
        { name: "Priyansh Arya", role: "OPENER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Pyla Avinash", role: "MIDDLE ORDER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Suryansh Shedge", role: "MIDDLE ORDER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Vaibhav Suryavanshi", role: "OPENER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Ayush Mhatre", role: "OPENER", price: "20 Lakh", rating: 3.0, country: "India" }
    ],
    "Wicketkeepers": [
        { name: "MS Dhoni", role: "LEGEND / FINISHER", price: "2 Crore", rating: 5.0, country: "India" },
        { name: "Rishabh Pant", role: "X-FACTOR", price: "2 Crore", rating: 4.8, country: "India" },
        { name: "KL Rahul", role: "OPENER", price: "2 Crore", rating: 4.7, country: "India" },
        { name: "Sanju Samson", role: "CAPTAIN / BATTER", price: "1.5 Crore", rating: 4.6, country: "India" },
        { name: "Heinrich Klaasen", role: "POWER HITTER", price: "1.5 Crore", rating: 4.9, country: "South Africa" },
        { name: "Quinton de Kock", role: "OPENER", price: "1.5 Crore", rating: 4.4, country: "South Africa" },
        { name: "Ryan Rickelton", role: "OPENER", price: "1.5 Crore", rating: 3.8, country: "South Africa" },
        { name: "Ishan Kishan", role: "OPENER", price: "1 Crore", rating: 4.3, country: "India" },
        { name: "Phil Salt", role: "OPENER", price: "1 Crore", rating: 4.2, country: "England" },
        { name: "Jonny Bairstow", role: "OPENER", price: "1 Crore", rating: 4.1, country: "England" },
        { name: "Dinesh Karthik", role: "FINISHER", price: "1 Crore", rating: 4.2, country: "India" },
        { name: "Jitesh Sharma", role: "FINISHER", price: "75 Lakh", rating: 3.8, country: "India" },
        { name: "Dhruv Jurel", role: "FINISHER", price: "75 Lakh", rating: 4.0, country: "India" },
        { name: "Wriddhiman Saha", role: "OPENER", price: "75 Lakh", rating: 3.5, country: "India" },
        { name: "KS Bharat", role: "KEEPER BAT", price: "75 Lakh", rating: 3.0, country: "India" },
        { name: "Prabhsimran Singh", role: "OPENER", price: "50 Lakh", rating: 3.8, country: "India" },
        { name: "Anuj Rawat", role: "FINISHER", price: "50 Lakh", rating: 3.2, country: "India" },
        { name: "Narayan Jagadeesan", role: "OPENER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Tim Seifert", role: "OPENER", price: "50 Lakh", rating: 3.2, country: "New Zealand" },
        { name: "Matthew Wade", role: "FINISHER", price: "50 Lakh", rating: 3.4, country: "Australia" },
        { name: "Sam Billings", role: "MIDDLE ORDER", price: "50 Lakh", rating: 3.5, country: "England" },
        { name: "Vishnu Vinod", role: "FINISHER", price: "20 Lakh", rating: 2.8, country: "India" },
        { name: "Upendra Yadav", role: "MIDDLE ORDER", price: "20 Lakh", rating: 2.5, country: "India" },
        { name: "Abishek Porel", role: "KEEPER BAT", price: "20 Lakh", rating: 3.5, country: "India" },
        { name: "Kumar Kushagra", role: "FINISHER", price: "20 Lakh", rating: 3.2, country: "India" },
        { name: "Donovan Ferreira", role: "FINISHER", price: "20 Lakh", rating: 3.5, country: "South Africa" },
        { name: "Urvil Patel", role: "OPENER", price: "20 Lakh", rating: 3.0, country: "India" }
    ],
    "All-rounders": [
        { name: "Hardik Pandya", role: "PACE ALL-ROUNDER", price: "2 Crore", rating: 4.8, country: "India" },
        { name: "Ravindra Jadeja", role: "SPIN ALL-ROUNDER", price: "2 Crore", rating: 4.9, country: "India" },
        { name: "Andre Russell", role: "MUSCLE RUSSELL", price: "2 Crore", rating: 4.8, country: "West Indies" },
        { name: "Glenn Maxwell", role: "BIG SHOW", price: "2 Crore", rating: 4.5, country: "Australia" },
        { name: "Rashid Khan", role: "SPIN WIZARD", price: "2 Crore", rating: 5.0, country: "Afghanistan" },
        { name: "Mitchell Santner", role: "SPIN ALL-ROUNDER", price: "2 Crore", rating: 4.2, country: "New Zealand" },
        { name: "Will Jacks", role: "SPIN ALL-ROUNDER", price: "2 Crore", rating: 4.3, country: "England" },
        { name: "Azmatullah Omarzai", role: "PACE ALL-ROUNDER", price: "2 Crore", rating: 4.0, country: "Afghanistan" },
        { name: "Shivam Dube", role: "POWER HITTER", price: "2 Crore", rating: 4.5, country: "India" },
        { name: "Axar Patel", role: "SPIN ALL-ROUNDER", price: "1.5 Crore", rating: 4.7, country: "India" },
        { name: "Cameron Green", role: "PACE ALL-ROUNDER", price: "1.5 Crore", rating: 4.3, country: "Australia" },
        { name: "Marcus Stoinis", role: "POWER HITTER", price: "1.5 Crore", rating: 4.4, country: "Australia" },
        { name: "Mitchell Marsh", role: "PACE ALL-ROUNDER", price: "1.5 Crore", rating: 4.2, country: "Australia" },
        { name: "Sam Curran", role: "PACE ALL-ROUNDER", price: "1.5 Crore", rating: 4.3, country: "England" },
        { name: "Liam Livingstone", role: "POWER HITTER", price: "1.5 Crore", rating: 4.2, country: "England" },
        { name: "Jamie Overton", role: "PACE ALL-ROUNDER", price: "1.5 Crore", rating: 3.8, country: "England" },
        { name: "Moeen Ali", role: "SPIN ALL-ROUNDER", price: "1 Crore", rating: 4.0, country: "England" },
        { name: "Ben Stokes", role: "CLUTCH PLAYER", price: "1 Crore", rating: 4.6, country: "England" },
        { name: "Wanindu Hasaranga", role: "SPIN ALL-ROUNDER", price: "1 Crore", rating: 4.3, country: "Sri Lanka" },
        { name: "Sunil Narine", role: "MYSTERY SPINNER", price: "1 Crore", rating: 4.9, country: "West Indies" },
        { name: "Jason Holder", role: "PACE ALL-ROUNDER", price: "1 Crore", rating: 3.7, country: "West Indies" },
        { name: "Aiden Markram", role: "SPIN ALL-ROUNDER", price: "1 Crore", rating: 4.0, country: "South Africa" },
        { name: "Jayant Yadav", role: "SPIN ALL-ROUNDER", price: "1 Crore", rating: 3.5, country: "India" },
        { name: "Shreyas Gopal", role: "SPIN ALL-ROUNDER", price: "1 Crore", rating: 3.6, country: "India" },
        { name: "Kamindu Mendis", role: "SPIN ALL-ROUNDER", price: "1 Crore", rating: 3.5, country: "Sri Lanka" },
        { name: "Krunal Pandya", role: "SPIN ALL-ROUNDER", price: "75 Lakh", rating: 3.8, country: "India" },
        { name: "Washington Sundar", role: "SPIN ALL-ROUNDER", price: "75 Lakh", rating: 3.9, country: "India" },
        { name: "Shardul Thakur", role: "LORD / PARTNERSHIP BREAKER", price: "75 Lakh", rating: 3.9, country: "India" },
        { name: "Rahul Tewatia", role: "FINISHER", price: "75 Lakh", rating: 3.9, country: "India" },
        { name: "Shahbaz Ahmed", role: "SPIN ALL-ROUNDER", price: "75 Lakh", rating: 3.5, country: "India" },
        { name: "Harpreet Brar", role: "SPIN ALL-ROUNDER", price: "75 Lakh", rating: 3.6, country: "India" },
        { name: "Rishi Dhawan", role: "PACE ALL-ROUNDER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Lalit Yadav", role: "SPIN ALL-ROUNDER", price: "50 Lakh", rating: 3.2, country: "India" },
        { name: "Ramandeep Singh", role: "PACE ALL-ROUNDER", price: "50 Lakh", rating: 3.5, country: "India" },
        { name: "Anukul Roy", role: "SPIN ALL-ROUNDER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Swapnil Singh", role: "SPIN ALL-ROUNDER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Karn Sharma", role: "LEG SPINNER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Nishant Sindhu", role: "SPIN ALL-ROUNDER", price: "50 Lakh", rating: 3.2, country: "India" },
        { name: "R. Sai Kishore", role: "SPIN ALL-ROUNDER", price: "50 Lakh", rating: 3.8, country: "India" },
        { name: "Raj Angad Bawa", role: "PACE ALL-ROUNDER", price: "50 Lakh", rating: 3.2, country: "India" },
        { name: "Dwaine Pretorius", role: "PACE ALL-ROUNDER", price: "20 Lakh", rating: 3.2, country: "South Africa" },
        { name: "Romario Shepherd", role: "POWER HITTER", price: "20 Lakh", rating: 3.6, country: "West Indies" },
        { name: "Fabian Allen", role: "SPIN ALL-ROUNDER", price: "20 Lakh", rating: 3.2, country: "West Indies" },
        { name: "Odean Smith", role: "PACE ALL-ROUNDER", price: "20 Lakh", rating: 3.1, country: "West Indies" },
        { name: "Mohammad Nabi", role: "SPIN ALL-ROUNDER", price: "20 Lakh", rating: 3.8, country: "Afghanistan" },
        { name: "Shakib Al Hasan", role: "SPIN ALL-ROUNDER", price: "20 Lakh", rating: 4.0, country: "Bangladesh" },
        { name: "Manav Suthar", role: "SPIN ALL-ROUNDER", price: "20 Lakh", rating: 3.2, country: "India" },
        { name: "Matthew Breetzke", role: "BATTING ALL-ROUNDER", price: "20 Lakh", rating: 3.3, country: "South Africa" },
        { name: "Allah Ghazanfar", role: "SPIN ALL-ROUNDER", price: "20 Lakh", rating: 3.6, country: "Afghanistan" },
        { name: "Jacob Bethell", role: "SPIN ALL-ROUNDER", price: "20 Lakh", rating: 3.2, country: "England" },
        { name: "Nitish Kumar Reddy", role: "PACE ALL-ROUNDER", price: "20 Lakh", rating: 3.8, country: "India" },
        { name: "Smaran Ravichandaran", role: "BATTING ALL-ROUNDER", price: "20 Lakh", rating: 3.0, country: "India" }
    ],
    "Bowlers": [
        { name: "Jasprit Bumrah", role: "YORKER KING", price: "2 Crore", rating: 5.0, country: "India" },
        { name: "Mohammed Shami", role: "SEAM POSITION", price: "2 Crore", rating: 4.8, country: "India" },
        { name: "Pat Cummins", role: "LEADER / PACER", price: "2 Crore", rating: 4.9, country: "Australia" },
        { name: "Kagiso Rabada", role: "EXPRESS PACE", price: "2 Crore", rating: 4.6, country: "South Africa" },
        { name: "Yuzvendra Chahal", role: "CHESS MASTER", price: "2 Crore", rating: 4.8, country: "India" },
        { name: "Mitchell Starc", role: "LETHAL YORKER", price: "1.5 Crore", rating: 4.8, country: "Australia" },
        { name: "Trent Boult", role: "SWING KING", price: "1.5 Crore", rating: 4.7, country: "New Zealand" },
        { name: "Anrich Nortje", role: "EXPRESS PACE", price: "1.5 Crore", rating: 4.4, country: "South Africa" },
        { name: "Josh Hazlewood", role: "LINE & LENGTH", price: "1.5 Crore", rating: 4.5, country: "Australia" },
        { name: "Nathan Ellis", role: "DEATH BOWLER", price: "1.5 Crore", rating: 4.0, country: "Australia" },
        { name: "Kuldeep Yadav", role: "CHINA MAN", price: "1 Crore", rating: 4.7, country: "India" },
        { name: "Arshdeep Singh", role: "SWING / DEATH", price: "1 Crore", rating: 4.4, country: "India" },
        { name: "Bhuvneshwar Kumar", role: "SWING KING", price: "1 Crore", rating: 3.9, country: "India" },
        { name: "Ravi Bishnoi", role: "GOOGLY MASTER", price: "1 Crore", rating: 4.3, country: "India" },
        { name: "Varun Chakaravarthy", role: "MYSTERY SPINNER", price: "1 Crore", rating: 4.4, country: "India" },
        { name: "Mayank Markande", role: "LEG SPINNER", price: "1 Crore", rating: 3.7, country: "India" },
        { name: "Brydon Carse", role: "EXPRESS PACE", price: "1 Crore", rating: 3.8, country: "England" },
        { name: "Harshal Patel", role: "PURPLE PATEL", price: "75 Lakh", rating: 4.1, country: "India" },
        { name: "Avesh Khan", role: "PACER", price: "75 Lakh", rating: 3.8, country: "India" },
        { name: "Prasidh Krishna", role: "HIT THE DECK", price: "75 Lakh", rating: 4.0, country: "India" },
        { name: "T Natarajan", role: "YORKER SPECIALIST", price: "75 Lakh", rating: 4.1, country: "India" },
        { name: "Mohammed Siraj", role: "PACER", price: "75 Lakh", rating: 4.5, country: "India" },
        { name: "Mukesh Kumar", role: "Accurate Pacer", price: "75 Lakh", rating: 3.9, country: "India" },
        { name: "Harshit Rana", role: "PACER", price: "75 Lakh", rating: 4.1, country: "India" },
        { name: "Vaibhav Arora", role: "SWING BOWLER", price: "75 Lakh", rating: 3.7, country: "India" },
        { name: "Arjun Tendulkar", role: "LEFT ARM PACER", price: "75 Lakh", rating: 3.0, country: "India" },
        { name: "Mayank Yadav", role: "EXPRESS PACE", price: "75 Lakh", rating: 4.2, country: "India" },
        { name: "Suyash Sharma", role: "MYSTERY SPINNER", price: "75 Lakh", rating: 3.8, country: "India" },
        { name: "Vyshak Vijaykumar", role: "PACER", price: "75 Lakh", rating: 3.6, country: "India" },
        { name: "Xavier Bartlett", role: "SWING BOWLER", price: "75 Lakh", rating: 3.8, country: "Australia" },
        { name: "Mukesh Choudhary", role: "LEFT ARM PACER", price: "75 Lakh", rating: 3.7, country: "India" },
        { name: "Yash Thakur", role: "DEATH BOWLER", price: "75 Lakh", rating: 3.9, country: "India" },
        { name: "Ishant Sharma", role: "VETERAN PACER", price: "50 Lakh", rating: 3.5, country: "India" },
        { name: "Umesh Yadav", role: "PACER", price: "50 Lakh", rating: 3.6, country: "India" },
        { name: "Khaleel Ahmed", role: "LEFT ARM PACER", price: "50 Lakh", rating: 3.9, country: "India" },
        { name: "Chetan Sakariya", role: "LEFT ARM PACER", price: "50 Lakh", rating: 3.2, country: "India" },
        { name: "Jaydev Unadkat", role: "VETERAN PACER", price: "50 Lakh", rating: 3.3, country: "India" },
        { name: "Umran Malik", role: "EXPRESS PACE", price: "50 Lakh", rating: 3.5, country: "India" },
        { name: "Yash Dayal", role: "PACER", price: "50 Lakh", rating: 3.8, country: "India" },
        { name: "Akash Madhwal", role: "DEATH BOWLER", price: "50 Lakh", rating: 3.5, country: "India" },
        { name: "Simarjeet Singh", role: "PACER", price: "50 Lakh", rating: 3.4, country: "India" },
        { name: "Rahul Chahar", role: "LEG SPINNER", price: "50 Lakh", rating: 3.8, country: "India" },
        { name: "Digvesh Rathi", role: "SPINNER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Manimaran Siddharth", role: "LEFT ARM SPINNER", price: "50 Lakh", rating: 3.5, country: "India" },
        { name: "Prince Yadav", role: "PACER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Ashwani Kumar", role: "PACER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Corbin Bosch", role: "PACER", price: "50 Lakh", rating: 3.2, country: "South Africa" },
        { name: "Naman Dhir", role: "OFF SPINNER", price: "50 Lakh", rating: 3.7, country: "India" },
        { name: "Rasikh Dar", role: "PACER", price: "50 Lakh", rating: 3.6, country: "India" },
        { name: "Gurjapneet Singh", role: "LEFT ARM PACER", price: "50 Lakh", rating: 3.0, country: "India" },
        { name: "Adam Zampa", role: "LEG SPINNER", price: "20 Lakh", rating: 4.0, country: "Australia" },
        { name: "Mujeeb Ur Rahman", role: "MYSTERY SPINNER", price: "20 Lakh", rating: 3.8, country: "Afghanistan" },
        { name: "Fazalhaq Farooqi", role: "PACER", price: "20 Lakh", rating: 3.7, country: "Afghanistan" },
        { name: "Naveen-ul-Haq", role: "CHANGES OF PACE", price: "20 Lakh", rating: 3.8, country: "Afghanistan" },
        { name: "Noor Ahmad", role: "MYSTERY SPINNER", price: "20 Lakh", rating: 4.2, country: "Afghanistan" },
        { name: "Maheesh Theekshana", role: "MYSTERY SPINNER", price: "20 Lakh", rating: 4.0, country: "Sri Lanka" },
        { name: "Matheesha Pathirana", role: "BABY MALINGA", price: "20 Lakh", rating: 4.5, country: "Sri Lanka" },
        { name: "Dushmantha Chameera", role: "PACER", price: "20 Lakh", rating: 3.5, country: "Sri Lanka" },
        { name: "Mustafizur Rahman", role: "CUTTER MASTER", price: "20 Lakh", rating: 3.8, country: "Bangladesh" },
        { name: "Alzarri Joseph", role: "PACER", price: "20 Lakh", rating: 3.6, country: "West Indies" },
        { name: "Obed McCoy", role: "PACER", price: "20 Lakh", rating: 3.5, country: "West Indies" },
        { name: "Akeal Hosein", role: "SPINNER", price: "20 Lakh", rating: 3.5, country: "West Indies" },
        { name: "Reece Topley", role: "PACER", price: "20 Lakh", rating: 3.7, country: "England" },
        { name: "Mark Wood", role: "EXPRESS PACE", price: "20 Lakh", rating: 4.3, country: "England" },
        { name: "Adil Rashid", role: "LEG SPINNER", price: "20 Lakh", rating: 3.9, country: "England" },
        { name: "Chris Jordan", role: "DEATH BOWLER", price: "20 Lakh", rating: 3.5, country: "England" },
        { name: "Tymal Mills", role: "DEATH BOWLER", price: "20 Lakh", rating: 3.2, country: "England" },
        { name: "Lockie Ferguson", role: "EXPRESS PACE", price: "20 Lakh", rating: 4.0, country: "New Zealand" },
        { name: "Matt Henry", role: "PACER", price: "20 Lakh", rating: 3.6, country: "New Zealand" },
        { name: "Ish Sodhi", role: "LEG SPINNER", price: "20 Lakh", rating: 3.5, country: "New Zealand" },
        { name: "Mohd. Arshad Khan", role: "LEFT ARM PACER", price: "20 Lakh", rating: 3.2, country: "India" },
        { name: "Arshin Kulkarni", role: "PACER", price: "20 Lakh", rating: 3.2, country: "India" },
        { name: "Raghu Sharma", role: "LEG SPINNER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Kwena Maphaka", role: "LEFT ARM PACER", price: "20 Lakh", rating: 3.9, country: "South Africa" },
        { name: "Lhuan-Dre Pretorius", role: "BOWLER", price: "20 Lakh", rating: 3.3, country: "South Africa" },
        { name: "Nandre Burger", role: "LEFT ARM PACER", price: "20 Lakh", rating: 3.9, country: "South Africa" },
        { name: "Yudhvir Charak", role: "PACER", price: "20 Lakh", rating: 3.3, country: "India" },
        { name: "Abhinandan Singh", role: "BOWLER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Harsh Dubey", role: "SPINNER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Zeeshan Ansari", role: "LEG SPINNER", price: "20 Lakh", rating: 3.0, country: "India" },
        { name: "Anshul Kamboj", role: "PACER", price: "20 Lakh", rating: 3.4, country: "India" },
        { name: "Ramakrishna Ghosh", role: "BOWLER", price: "20 Lakh", rating: 3.0, country: "India" }
    ]
};




// --- GLOBAL CONFIG ---
const THEME_COLOR = "#D4AF37"; // Gold

function getFlagSVG(country) {
    const flagStyle = `width: 60px; height: 40px; filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));`;
    const waveAnim = `<animateTransform attributeName="transform" type="skewX" values="0;10;0" dur="2s" repeatCount="indefinite" />`;

    // Wave Wrapper
    const wrapStart = `<svg viewBox="0 0 60 40" style="${flagStyle}" class="player-flag-svg"><g>`;
    const wrapEnd = `${waveAnim}</g></svg>`;

    switch (country) {
        case "India":
            return `${wrapStart}<rect width="60" height="13.3" fill="#FF9933"/><rect y="13.3" width="60" height="13.3" fill="#FFFFFF"/><rect y="26.6" width="60" height="13.3" fill="#138808"/><circle cx="30" cy="20" r="5" fill="none" stroke="#000080" stroke-width="1.5"/>${wrapEnd}`;
        case "Australia":
            return `${wrapStart}<rect width="60" height="40" fill="#00008B"/><path d="M0 0 L30 20 L0 40 Z" fill="#FF0000" opacity="0.2"/><circle cx="15" cy="10" r="3" fill="#FFF"/><path d="M45 10 L47 15 L42 15 Z" fill="#FFF"/>${wrapEnd}`; // Simplified
        case "England":
            return `${wrapStart}<rect width="60" height="40" fill="#FFFFFF"/><rect x="25" width="10" height="40" fill="#CE1124"/><rect y="15" width="60" height="10" fill="#CE1124"/>${wrapEnd}`;
        case "South Africa":
            return `${wrapStart}<path d="M0 0 L60 0 L60 13 L35 13 L25 20 L35 27 L60 27 L60 40 L0 40 L0 27 L10 20 L0 13 Z" fill="#007749"/><path d="M0 0 L20 13 L0 26 Z" fill="#000"/><path d="M0 0 L60 0 L60 13 L0 13 Z" fill="#E03C31"  mask="url(#mask)"/><path d="M0 27 L60 27 L60 40 L0 40 Z" fill="#001489"/>${wrapEnd}`; // Very Simplified
        case "New Zealand":
            return `${wrapStart}<rect width="60" height="40" fill="#00247D"/><text x="40" y="20" font-size="20" fill="red">★</text>${wrapEnd}`; // Simplified
        case "West Indies":
            return `${wrapStart}<rect width="60" height="40" fill="#7B001C"/><circle cx="30" cy="20" r="10" fill="#FDB913"/>${wrapEnd}`;
        case "Sri Lanka":
            return `${wrapStart}<rect width="60" height="40" fill="#FFBE29"/><rect x="20" y="5" width="35" height="30" fill="#8D153A"/>${wrapEnd}`;
        case "Afghanistan":
            return `${wrapStart}<rect width="20" height="40" fill="#000"/><rect x="20" width="20" height="40" fill="#d32011"/><rect x="40" width="20" height="40" fill="#007a36"/>${wrapEnd}`;
        case "Bangladesh":
            return `${wrapStart}<rect width="60" height="40" fill="#006a4e"/><circle cx="25" cy="20" r="10" fill="#f42a41"/>${wrapEnd}`;
        default:
            return `${wrapStart}<rect width="60" height="40" fill="#888"/>${wrapEnd}`;
    }
}

function parseData() {
    return playersDB;
}

function generateSlides() {
    const slides = [];
    let globalId = 1;

    // No longer needed as we have static prices
    // const getRandomPrice = () => { ... }; 

    const dataToProcess = parseData(); // Returns playersDB with Objects

    for (const [catName, players] of Object.entries(dataToProcess)) {
        if (!players || players.length === 0) continue;

        slides.push({
            type: 'category',
            title: catName.toUpperCase(),
            subtitle: `${players.length} PLAYERS`,
            color: THEME_COLOR
        });

        const totalSets = Math.ceil(players.length / 10); // 10 players per set approx
        const setSize = Math.ceil(players.length / totalSets);

        for (let i = 0; i < totalSets; i++) {
            const setPlayers = players.slice(i * setSize, (i + 1) * setSize);
            if (setPlayers.length === 0) break;

            slides.push({
                type: 'set',
                title: `SET ${i + 1}`,
                color: THEME_COLOR
            });

            setPlayers.forEach(p => {
                // p is now an Object {name, role, price, rating}
                slides.push({
                    type: 'player',
                    id: globalId++,
                    name: p.name,
                    color: THEME_COLOR,
                    colorName: "Gold",
                    basePrice: p.price, // Use STATIC PRICE
                    rating: p.rating,   // Use STATIC RATING
                    category: catName.toUpperCase(),
                    country: p.country, // Add Country
                    specialist: p.role // Use STATIC ROLE
                });
            });
        }
    }
    return slides;
}

// --- RENDERING LOGIC ---
let currentIndex = 0;
let autoPlayInterval;
let isAutoPlaying = false;

// DOM Elements
const slideNumberEl = document.getElementById('slide-number');
const playerNameEl = document.getElementById('player-name');
const teamBadgeEl = document.getElementById('team-badge');
const basePriceEl = document.getElementById('base-price');
const starRatingEl = document.getElementById('star-rating');
const playerImageEl = document.getElementById('player-image');
const categoryBannerEl = document.getElementById('category-banner');
const progressBarEl = document.getElementById('progress-bar');
const playerInfoContainer = document.querySelector('.player-info');
const playerVisualContainer = document.querySelector('.player-visual');
const mainLayout = document.querySelector('.main-layout');

// View Containers
const categorySlideView = document.getElementById('category-slide-view');
const mainCatTitle = document.getElementById('main-cat-title');
const subCatTitle = document.getElementById('sub-cat-title');
const setSlideView = document.getElementById('set-slide-view');
const setTitle = document.getElementById('set-title');
const introSlideView = document.getElementById('intro-slide-view');
const startBtn = document.getElementById('start-btn');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const autoBtn = document.getElementById('auto-btn');

// START Logic
startBtn.addEventListener('click', () => {
    introSlideView.classList.add('hidden');
    setTimeout(() => {
        renderSlide(0);
    }, 800); // Wait for the 3D zoom-out animation
});

function updateIntroStats() {
    const data = parseData(); // Get playersDB
    document.getElementById('stat-batsmen').textContent = data['Batsmen']?.length || 0;
    document.getElementById('stat-bowlers').textContent = data['Bowlers']?.length || 0;
    document.getElementById('stat-allrounders').textContent = data['All-rounders']?.length || 0;
    document.getElementById('stat-keepers').textContent = data['Wicketkeepers']?.length || 0;
}

// --- INITIALIZATION ---
updateIntroStats();
const slidesData = generateSlides();

function renderSlide(index) {
    if (!slidesData || slidesData.length === 0) return;
    const data = slidesData[index];
    if (!data) return;

    // Reset All Views
    playerInfoContainer.classList.remove('active');
    playerVisualContainer.classList.remove('active');
    categorySlideView.classList.remove('active');
    setSlideView.classList.remove('active');

    // Reset specific animation classes if reusable
    void playerInfoContainer.offsetWidth;
    void playerVisualContainer.offsetWidth;

    document.documentElement.style.setProperty('--primary-color', data.color);

    setTimeout(() => {
        if (data.type === 'category') {
            mainLayout.style.display = 'none';
            setSlideView.style.display = 'none';
            categorySlideView.style.display = 'flex';
            categoryBannerEl.style.display = 'none';

            mainCatTitle.textContent = data.title;
            subCatTitle.textContent = data.subtitle;

            // --- ANIMATION INJECTION ---
            const animContainer = document.getElementById('cat-anim-container');
            const gold = "#D4AF37";
            let svgContent = '';

            if (data.title === 'BATSMEN') {
                // Bat Icon
                svgContent = `
                <svg viewBox="0 0 100 100" class="cat-anim-svg anim-bat">
                    <rect x="46" y="5" width="8" height="25" rx="2" fill="none" stroke="${gold}" stroke-width="3"/>
                    <path d="M42,30 L58,30 L60,85 C60,92 56,95 50,95 C44,95 40,92 40,85 L42,30 Z" fill="none" stroke="${gold}" stroke-width="3"/>
                    <line x1="50" y1="35" x2="50" y2="75" stroke="${gold}" stroke-width="1"/>
                </svg>`;
            } else if (data.title === 'BOWLERS') {
                // Ball Icon
                svgContent = `
                <svg viewBox="0 0 100 100" class="cat-anim-svg anim-ball">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="${gold}" stroke-width="3"/>
                    <path d="M50,15 A35,35 0 0,1 50,85" fill="none" stroke="${gold}" stroke-width="1" stroke-dasharray="4 2"/>
                    <path d="M25,25 Q50,50 75,25" fill="none" stroke="${gold}" stroke-width="2"/>
                    <path d="M25,75 Q50,50 75,75" fill="none" stroke="${gold}" stroke-width="2"/>
                </svg>`;
            } else if (data.title === 'WICKETKEEPERS') {
                // Gloves Icon
                svgContent = `
                <svg viewBox="0 0 100 100" class="cat-anim-svg anim-gloves">
                    <path d="M20,40 Q20,20 40,30 L45,50 L30,80 Z" fill="none" stroke="${gold}" stroke-width="3"/>
                    <path d="M80,40 Q80,20 60,30 L55,50 L70,80 Z" fill="none" stroke="${gold}" stroke-width="3"/>
                    <rect x="35" y="70" width="30" height="10" rx="5" fill="none" stroke="${gold}" stroke-width="2"/>
                </svg>`;
            } else if (data.title === 'ALL-ROUNDERS') {
                // Crossed Bat and Ball
                svgContent = `
                 <svg viewBox="0 0 100 100" class="cat-anim-svg anim-allround">
                    <g transform="rotate(45, 50, 50)">
                         <rect x="47" y="10" width="6" height="80" rx="3" fill="none" stroke="${gold}" stroke-width="3"/>
                    </g>
                     <g transform="rotate(-45, 50, 50)">
                         <rect x="47" y="10" width="6" height="80" rx="3" fill="none" stroke="${gold}" stroke-width="3"/>
                    </g>
                    <circle cx="50" cy="50" r="10" fill="${gold}"/>
                </svg>`;
            }

            animContainer.innerHTML = svgContent;
            // ---------------------------

            setTimeout(() => categorySlideView.classList.add('active'), 50);

        } else if (data.type === 'set') {
            mainLayout.style.display = 'none';
            categorySlideView.style.display = 'none';
            setSlideView.style.display = 'flex';
            categoryBannerEl.style.display = 'none';

            setTitle.textContent = data.title;
            setTimeout(() => setSlideView.classList.add('active'), 50);

        } else {
            mainLayout.style.display = 'flex';
            categorySlideView.style.display = 'none';
            setSlideView.style.display = 'none';
            categoryBannerEl.style.display = 'block';

            slideNumberEl.textContent = `#${data.id.toString().padStart(3, '0')}`;
            playerNameEl.textContent = data.name;

            // Specialist Role Badge Logic
            teamBadgeEl.textContent = data.specialist;
            teamBadgeEl.className = 'team-badge specialist-badge';
            teamBadgeEl.style = "";

            basePriceEl.textContent = `Base Price: ₹ ${data.basePrice}`;
            // Render Star Rating
            const ratingVal = Math.round(data.rating);
            const starStr = '★'.repeat(ratingVal).padEnd(5, '☆');
            starRatingEl.textContent = `${data.rating} ${starStr}`;
            starRatingEl.style.color = "#FFD700"; // Gold color inline or via class

            // Render Flag
            let flagContainer = document.getElementById('player-flag-container');
            if (!flagContainer) {
                flagContainer = document.createElement('div');
                flagContainer.id = 'player-flag-container';
                flagContainer.className = 'player-flag-container';
                playerInfoContainer.appendChild(flagContainer);
            }
            flagContainer.innerHTML = getFlagSVG(data.country);

            categoryBannerEl.textContent = data.category;

            // Enhanced Image Handling: Try PNG first (background-less), then JPG, then JPEG
            const imgPathPng = `assets/Players/${data.name}.png`;
            const imgPathJpg = `assets/Players/${data.name}.jpg`;
            const imgPathJpeg = `assets/Players/${data.name}.jpeg`;

            // Clear previous image state
            playerImageEl.src = '';
            playerImageEl.style.display = 'none';

            const tryLoadImage = (paths) => {
                if (paths.length === 0) {
                    playerImageEl.src = 'assets/cricket_player_silhouette.svg';
                    playerImageEl.style.display = 'block';
                    return;
                }
                const tempImg = new Image();
                tempImg.onload = () => {
                    playerImageEl.src = paths[0];
                    playerImageEl.style.display = 'block';
                };
                tempImg.onerror = () => {
                    tryLoadImage(paths.slice(1));
                };
                tempImg.src = paths[0];
            };

            tryLoadImage([imgPathPng, imgPathJpg, imgPathJpeg]);

            setTimeout(() => {
                playerInfoContainer.classList.add('active');
                playerVisualContainer.classList.add('active');
            }, 50);
        }
        updateProgressBar();
    }, 300);
}

function updateProgressBar() {
    const progress = ((currentIndex + 1) / slidesData.length) * 100;
    progressBarEl.style.width = `${progress}%`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slidesData.length;
    renderSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    renderSlide(currentIndex);
}

function toggleAutoPlay() {
    if (isAutoPlaying) {
        clearInterval(autoPlayInterval);
        autoBtn.textContent = "▶ AUTO";
        autoBtn.style.background = "transparent";
        autoBtn.style.color = "#fff";
    } else {
        autoPlayInterval = setInterval(nextSlide, 3000);
        autoBtn.textContent = "II STOP";
        autoBtn.style.background = "var(--primary-color)";
        autoBtn.style.color = "#000";
    }
    isAutoPlaying = !isAutoPlaying;
}

// Listeners
nextBtn.addEventListener('click', () => { nextSlide(); if (isAutoPlaying) toggleAutoPlay(); });
prevBtn.addEventListener('click', () => { prevSlide(); if (isAutoPlaying) toggleAutoPlay(); });
autoBtn.addEventListener('click', toggleAutoPlay);
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === ' ') toggleAutoPlay();
});

// 3D Parallax Mouse Move Effect
document.addEventListener('mousemove', (e) => {
    if (introSlideView.classList.contains('hidden') && mainLayout.style.display !== 'none') {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 80;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 80;
        // Apply smooth tilt
        mainLayout.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});
